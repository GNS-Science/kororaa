import React, { useMemo } from 'react';
import { LeafletMap, ColorBar } from '@gns-science/toshi-nest';
import { graphql } from 'babel-plugin-relay/macro';
import { Fab, Box } from '@mui/material';
import { CSVLink } from 'react-csv';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { HazardMapsState } from './hazardMapReducer';
import { useLazyLoadQuery } from 'react-relay';
import { HazardMapsQuery } from './__generated__/HazardMapsQuery.graphql';
import { getHazardMapCSVData, getTickValues, readablePoe } from './hazardMaps.service';
import { GRID_ID, HAZARD_MODEL } from '../../utils/environmentVariables';

interface HazardMapsProps {
  state: HazardMapsState;
  setFullscreen: (value: boolean) => void;
}

const HazardMaps: React.FC<HazardMapsProps> = ({ state, setFullscreen }: HazardMapsProps) => {
  const data = useLazyLoadQuery<HazardMapsQuery>(hazardMapsQuery, {
    grid_id: GRID_ID,
    hazard_model_ids: [HAZARD_MODEL],
    imts: state.spectralPeriod,
    aggs: state.statistic,
    vs30s: state.vs30,
    poes: state.poe,
    color_scale: state.color_scale,
    color_scale_vmax: state.vmax,
    fill_opacity: state.fill_opacity,
    stroke_width: state.stroke_width,
    stroke_opacity: state.stroke_opacity,
  });

  const geoJson = useMemo<string[]>(() => {
    if (data && data.gridded_hazard && data.gridded_hazard.gridded_hazard?.length) {
      return data.gridded_hazard?.gridded_hazard.map((hazard) => hazard?.hazard_map?.geojson);
    } else {
      return [];
    }
  }, [data]);

  const colorScale = useMemo(() => {
    if (
      data &&
      data.gridded_hazard &&
      data.gridded_hazard.gridded_hazard &&
      data.gridded_hazard.gridded_hazard[0] &&
      data.gridded_hazard.gridded_hazard[0].hazard_map?.colour_scale?.levels &&
      data.gridded_hazard.gridded_hazard[0].hazard_map.colour_scale.hexrgbs
    ) {
      return {
        levels: getTickValues(data.gridded_hazard.gridded_hazard[0]?.hazard_map?.colour_scale?.levels.map((level) => Number(level))),
        hexrgbs: data.gridded_hazard.gridded_hazard[0]?.hazard_map?.colour_scale?.hexrgbs.map((color) => color?.toString()),
      };
    }
  }, [data]);
  const zoom = 5;
  const nzCentre = [-40.946, 174.167];

  return (
    <Box sx={{ width: '100%', height: '700px' }}>
      <CSVLink data={getHazardMapCSVData(geoJson, state.vs30[0], state.spectralPeriod[0], readablePoe(state.poe[0]))} filename="hazard-maps.csv">
        <Fab sx={{ position: 'absolute', top: '128px', right: '70px' }} color="primary">
          <ArrowDownwardIcon />
        </Fab>
      </CSVLink>
      <LeafletMap geoJsonData={geoJson} zoom={zoom} nzCentre={nzCentre} height={'700px'} width={'100%'} setFullscreen={setFullscreen} />
      {colorScale && (
        <ColorBar width={300} height={35} colors={colorScale?.hexrgbs} tickValues={colorScale?.levels} style={{ position: 'relative', zIndex: 10000000, top: '-125px', left: 'calc(100% - 365px)' }} />
      )}
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
        hazard_map(color_scale: $color_scale, color_scale_vmax: $color_scale_vmax, fill_opacity: $fill_opacity, stroke_width: $stroke_width, stroke_opacity: $stroke_opacity) {
          geojson
          colour_scale {
            levels
            hexrgbs
          }
        }
      }
    }
  }
`;
