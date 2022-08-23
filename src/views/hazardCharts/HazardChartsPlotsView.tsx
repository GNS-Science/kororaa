import React, { useRef } from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { Box, Button } from '@mui/material';
import { useReactToPrint } from 'react-to-print';
import { CSVLink } from 'react-csv';
import { ControlsBar } from '@gns-science/toshi-nest';

import { HazardChartsPlotsViewQuery } from './__generated__/HazardChartsPlotsViewQuery.graphql';
import { hazardPageOptions } from './constants/hazardPageOptions';
import HazardCharts from './HazardCharts';
import { HazardPageState } from './hazardPageReducer';
import { getLatLonArray } from '../../services/latLon/latLon.service';
import { RESOLUTION, HAZARD_MODEL } from '../../utils/environmentVariables';

interface HazardChartsPlotsViewProps {
  state: HazardPageState;
}

const HazardChartsPlotsView: React.FC<HazardChartsPlotsViewProps> = ({ state }: HazardChartsPlotsViewProps) => {
  const printTargetRef = useRef<HTMLDivElement>(null);

  const data = useLazyLoadQuery<HazardChartsPlotsViewQuery>(hazardChartsPlotsViewQuery, {
    hazard_model: HAZARD_MODEL,
    locs: getLatLonArray(state.locationData),
    vs30s: state.vs30s,
    imts: hazardPageOptions.imts,
    aggs: ['mean', '0.005', '0.995', '0.1', '0.9'],
    resolution: RESOLUTION,
  });

  const handlePrint = useReactToPrint({
    content: () => printTargetRef.current,
  });

  return (
    <Box role="plotsView" sx={{ width: '100%' }}>
      <div ref={printTargetRef}>
        <HazardCharts data={data} state={state} />
      </div>
      <Box sx={{ height: 70, marginTop: '20px' }}>
        <ControlsBar>
          <Button variant="contained" onClick={handlePrint}>
            Print Figures
          </Button>
          <CSVLink data={[]} filename="hazard-curves.csv">
            <Button variant="contained">Save Data</Button>
          </CSVLink>
        </ControlsBar>
      </Box>
    </Box>
  );
};

export default HazardChartsPlotsView;

export const hazardChartsPlotsViewQuery = graphql`
  query HazardChartsPlotsViewQuery($hazard_model: String, $vs30s: [Float], $imts: [String], $locs: [String], $aggs: [String], $resolution: Float) {
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
