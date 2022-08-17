import { graphql } from 'babel-plugin-relay/macro';
import React from 'react';

const HazardMapsView: React.FC = () => {
  return <>Hazard Maps View</>;
};

export default HazardMapsView;

export const hazardMapsViewQuery = graphql`
  query HazardMapsViewQuery($grid_id: RegionGrid, $hazard_model_ids: [String], $imts: [String], $aggs: [String], $vs30s: [Float], $poes: [Float]) {
    gridded_hazard(grid_id: $grid_id, hazard_model_ids: $hazard_model_ids, imts: $imts, aggs: $aggs, vs30s: $vs30s, poes: $poes) {
      ok
      gridded_hazard {
        grid_id
        hazard_model
        imt
        agg
        values
        geojson(
          color_scale: "inferno"
          color_scale_vmax: 2.0 #AUTO ??
          fill_opacity: 0.5
          stroke_width: 0.1
          stroke_opacity: 0.5
        )
      }
    }
  }
`;
