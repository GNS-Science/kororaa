import React from 'react';
import { LeafletMap, ColorBar } from '@gns-science/toshi-nest';
import { Box } from '@mui/material';
import { graphql } from 'babel-plugin-relay/macro';

import { HazardMapsState } from './hazardMapReducer';
import { useLazyLoadQuery } from 'react-relay';
// import { HazardMapsQuery } from './__generated__/HazardMapsQuery.graphql';
import { getTickValues, readablePoe } from './hazardMaps.service';
import { GRID_ID, HAZARD_MODEL } from '../../utils/environmentVariables';

interface HazardMapsProps {
  geoJson: string[];
  colorScale: ColorScale | undefined;
  setFullscreen: (value: boolean) => void;
}

export interface ColorScale {
  levels: number[];
  hexrgbs: (string | undefined)[];
}

const HazardMaps: React.FC<HazardMapsProps> = ({ geoJson, setFullscreen, colorScale }: HazardMapsProps) => {
  const zoom = 5;
  const nzCentre = [-40.946, 174.167];

  return (
    <Box sx={{ width: '100%', height: '700px' }}>
      <LeafletMap geoJsonData={geoJson} zoom={zoom} nzCentre={nzCentre} height={'700px'} width={'100%'} setFullscreen={setFullscreen} />
      {colorScale && (
        <ColorBar width={300} height={35} colors={colorScale?.hexrgbs} tickValues={colorScale?.levels} style={{ position: 'relative', zIndex: 10000000, top: '-125px', left: 'calc(100% - 365px)' }} />
      )}
    </Box>
  );
};

export default HazardMaps;

// export const hazardMapsQuery = graphql`
//   query HazardMapsQuery(
//     $grid_id: RegionGrid
//     $hazard_model_ids: [String]
//     $imts: [String]
//     $aggs: [String]
//     $vs30s: [Float]
//     $poes: [Float]
//     $color_scale: String
//     $color_scale_vmax: Float
//     $fill_opacity: Float
//     $stroke_width: Float
//     $stroke_opacity: Float
//   ) {
//     gridded_hazard(grid_id: $grid_id, hazard_model_ids: $hazard_model_ids, imts: $imts, aggs: $aggs, vs30s: $vs30s, poes: $poes) {
//       ok
//       gridded_hazard {
//         grid_id
//         hazard_model
//         imt
//         agg
//         hazard_map(color_scale: $color_scale, color_scale_vmax: $color_scale_vmax, fill_opacity: $fill_opacity, stroke_width: $stroke_width, stroke_opacity: $stroke_opacity) {
//           geojson
//           colour_scale {
//             levels
//             hexrgbs
//           }
//         }
//       }
//     }
//   }
// `;
