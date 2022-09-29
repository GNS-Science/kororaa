import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { Box } from '@mui/material';

import { HazardChartsPlotsViewQuery } from './__generated__/HazardChartsPlotsViewQuery.graphql';
import { hazardPageOptions } from './constants/hazardPageOptions';
import HazardCharts from './HazardCharts';
import { HazardPageState } from './hazardPageReducer';
import { getLatLonArray } from '../../services/latLon/latLon.service';
import { RESOLUTION, HAZARD_MODEL, MEAN, UPPER1, UPPER2, LOWER1, LOWER2 } from '../../utils/environmentVariables';

interface HazardChartsPlotsViewProps {
  state: HazardPageState;
  dispatch: React.Dispatch<Partial<HazardPageState>>;
  printTargetRef: React.RefObject<HTMLDivElement>;
}

const HazardChartsPlotsView: React.FC<HazardChartsPlotsViewProps> = ({ state, dispatch, printTargetRef }: HazardChartsPlotsViewProps) => {
  const data = useLazyLoadQuery<HazardChartsPlotsViewQuery>(hazardChartsPlotsViewQuery, {
    hazard_model: HAZARD_MODEL,
    locs: getLatLonArray(state.locationData),
    vs30s: state.vs30s,
    imts: hazardPageOptions.imts,
    aggs: [MEAN, LOWER2, UPPER2, LOWER1, UPPER1],
    resolution: RESOLUTION,
  });

  return (
    <Box role="plotsView" sx={{ width: '100%' }}>
      <div ref={printTargetRef}>
        <HazardCharts data={data} state={state} dispatch={dispatch} />
      </div>
    </Box>
  );
};

export default HazardChartsPlotsView;

export const hazardChartsPlotsViewQuery = graphql`
  query HazardChartsPlotsViewQuery($hazard_model: String, $vs30s: [Int], $imts: [String], $locs: [String], $aggs: [String], $resolution: Float) {
    hazard_curves(hazard_model: $hazard_model, vs30s: $vs30s, imts: $imts, locs: $locs, aggs: $aggs, resolution: $resolution) {
      ok
      locations {
        lat
        lon
        resolution
        code
        name
        key
      }
      curves {
        hazard_model
        imt
        loc
        agg
        vs30
        curve {
          levels
          values
        }
      }
    }
  }
`;
