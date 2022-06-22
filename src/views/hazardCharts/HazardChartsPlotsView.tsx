import React, { useMemo, useRef } from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { Box, Button } from '@mui/material';
import { useReactToPrint } from 'react-to-print';
import { CSVLink } from 'react-csv';
import { ControlsBar } from '@gns-science/toshi-nest';

import { HazardChartsPlotsViewQuery } from './__generated__/HazardChartsPlotsViewQuery.graphql';
import { HazardCurvesQueryVariables, HazardCurvesViewVariables } from './hazardCharts.types';
import { hazardPageOptions } from './hazardPageOptions';
import HazardCharts from './HazardCharts';
import { getCSVdata } from './hazardPage.service';

interface HazardChartsPlotsViewProps {
  queryVariables: HazardCurvesQueryVariables;
  viewVariables: HazardCurvesViewVariables;
}

const HazardChartsPlotsView: React.FC<HazardChartsPlotsViewProps> = ({ queryVariables, viewVariables }: HazardChartsPlotsViewProps) => {
  const printTargetRef = useRef<HTMLDivElement>(null);

  const data = useLazyLoadQuery<HazardChartsPlotsViewQuery>(hazardChartsPlotsViewQuery, queryVariables);

  const handlePrint = useReactToPrint({
    content: () => printTargetRef.current,
  });

  const CSVdata = useMemo(() => {
    return getCSVdata(hazardPageOptions.imts, data);
  }, [data]);

  return (
    <Box role="plotsView" sx={{ width: '100%' }}>
      <div ref={printTargetRef}>
        <HazardCharts data={data} viewVariables={viewVariables} />
      </div>
      <Box sx={{ height: 70, marginTop: '20px' }}>
        <ControlsBar>
          <Button variant="contained" onClick={handlePrint}>
            Print Figures
          </Button>
          <CSVLink data={CSVdata} filename="hazard-curves.csv">
            <Button variant="contained">Save Data</Button>
          </CSVLink>
        </ControlsBar>
      </Box>
    </Box>
  );
};

export default HazardChartsPlotsView;

export const hazardChartsPlotsViewQuery = graphql`
  query HazardChartsPlotsViewQuery($hazard_model: String, $vs30s: [Float], $imts: [String], $locs: [String], $aggs: [String]) {
    #about
    hazard_curves(hazard_model: $hazard_model, vs30s: $vs30s, imts: $imts, locs: $locs, aggs: $aggs) {
      ok
      curves {
        loc
        imt
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
