import React, { useMemo } from 'react';
import { LeafletMap } from '@gns-science/toshi-nest';
import { graphql } from 'babel-plugin-relay/macro';

import { HazardMapsState } from './hazardMapReducer';
import { useLazyLoadQuery } from 'react-relay';
import { HazardMapsQuery } from './__generated__/HazardMapsQuery.graphql';

interface HazardMapsProps {
  state: HazardMapsState;
  setFullscreen: (value: boolean) => void;
}

const HazardMaps: React.FC<HazardMapsProps> = ({ state, setFullscreen }: HazardMapsProps) => {
  const data = useLazyLoadQuery<HazardMapsQuery>(hazardMapsQuery, {
    grid_id: 'NZ_0_1_NB_1_0',
    hazard_model_ids: ['SLT_TAG_FINAL'],
    imts: state.imts,
    aggs: state.aggs,
    vs30s: state.vs30s,
    poes: state.poes,
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

  return (
    <>
      <LeafletMap geoJsonData={geoJson} zoom={zoom} nzCentre={nzCentre} height={'700px'} width={'100%'} setFullscreen={setFullscreen} />
    </>
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
