import React, { useMemo } from 'react';
import { LeafletMap, ColorBar } from '@gns-science/toshi-nest';
import { graphql } from 'babel-plugin-relay/macro';
import { Fab, Box } from '@mui/material';
import { CSVLink } from 'react-csv';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { HazardMapsState } from './hazardMapReducer';
import { useLazyLoadQuery } from 'react-relay';
import { HazardMapsQuery } from './__generated__/HazardMapsQuery.graphql';
import { getHazardMapCSVData, parsePoe } from './hazardMaps.service';

interface HazardMapsProps {
  state: HazardMapsState;
  setFullscreen: (value: boolean) => void;
}

const HazardMaps: React.FC<HazardMapsProps> = ({ state, setFullscreen }: HazardMapsProps) => {
  const data = useLazyLoadQuery<HazardMapsQuery>(hazardMapsQuery, {
    grid_id: 'NZ_0_1_NB_1_0',
    hazard_model_ids: ['SLT_TAG_FINAL'],
    imts: state.spectralPeriod,
    aggs: state.statistic,
    vs30s: state.vs30,
    poes: [parsePoe(state.poe[0])],
    color_scale: state.color_scale,
    color_scale_vmax: state.color_scale_vmax,
    fill_opacity: state.fill_opacity,
    stroke_width: state.stroke_width,
    stroke_opacity: state.stroke_opacity,
  });

  const geoJson = useMemo(() => {
    let geoJsonData: string[] = [];
    if (data && data.gridded_hazard && data.gridded_hazard.gridded_hazard?.length) {
      geoJsonData = data.gridded_hazard?.gridded_hazard.map((hazard) => hazard?.geojson);
    }
    return geoJsonData;
  }, [data]);

  const zoom = 5;
  const nzCentre = [-40.946, 174.167];

  const colors = useMemo(() => ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'], []);

  return (
    <Box sx={{ width: '100%', height: '700px' }}>
      <CSVLink data={getHazardMapCSVData(geoJson, state.vs30[0], state.spectralPeriod[0], state.poe[0])} filename="hazard-maps.csv">
        <Fab sx={{ position: 'absolute', top: '128px', right: '70px' }} color="primary">
          <ArrowDownwardIcon />
        </Fab>
      </CSVLink>
      <ColorBar width={300} height={35} colors={colors} tickValues={[0, 0.5, 1, 1.5]} bottom="250px" right="10px" />
      <LeafletMap geoJsonData={geoJson} zoom={zoom} nzCentre={nzCentre} height={'700px'} width={'100%'} setFullscreen={setFullscreen} />
    </Box>
  );
};

export default HazardMaps;

export const hazardMapsQuery = graphql`
  query HazardMapsQuery(
    $grid_id: RegionGrid
    $hazard_model_ids: [String]
    $imts: [String]
    $aggs: [String]
    $vs30s: [Float]
    $poes: [Float]
    $color_scale: String
    $color_scale_vmax: Float
    $fill_opacity: Float
    $stroke_width: Float
    $stroke_opacity: Float
  ) {
    gridded_hazard(grid_id: $grid_id, hazard_model_ids: $hazard_model_ids, imts: $imts, aggs: $aggs, vs30s: $vs30s, poes: $poes) {
      ok
      gridded_hazard {
        grid_id
        hazard_model
        imt
        agg
        geojson(color_scale: $color_scale, color_scale_vmax: $color_scale_vmax, fill_opacity: $fill_opacity, stroke_width: $stroke_width, stroke_opacity: $stroke_opacity)
      }
    }
  }
`;
