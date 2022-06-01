import React, { useState, useRef, useMemo } from 'react';
import { ControlsBar } from '@gns-science/toshi-nest';
import { Button, Box, Typography, Fab } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useReactToPrint } from 'react-to-print';
import ShareIcon from '@mui/icons-material/Share';
import { CSVLink } from 'react-csv';

import HazardCharts from './HazardCharts';
import HazardChartsControls from './HazardChartsControls';
import { getCSVdata, getHazardTableOptions } from './hazardPage.service';
import { hazardChartsMockData } from '../../constants/hazardChartsMockData';
import { HazardCurvesSelections } from './hazardCharts.types';
import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { HazardChartsPageQuery } from './__generated__/HazardChartsPageQuery.graphql';

const HazardChartsPage: React.FC = () => {
  const data = useLazyLoadQuery<HazardChartsPageQuery>(hazardChartsPageQuery, { hazard_model: 'TEST1', vs30s: [250], imts: ['PGA'], locs: ['ROT'], aggs: ['mean'] });
  console.log(data);

  const printTargetRef = useRef<HTMLDivElement>(null);
  const hazardTableOptions = getHazardTableOptions(hazardChartsMockData);

  const [hazardCurvesSelections, setHazardCurvesSelections] = useState<HazardCurvesSelections>({
    lat: '',
    lon: '',
    vs30: hazardTableOptions.vs30[0],
    spectralPeriod: hazardTableOptions.spectralPeriod[0],
    POE: 'None',
  });

  const CSVdata = useMemo(() => {
    return getCSVdata(hazardTableOptions.spectralPeriod, hazardCurvesSelections, hazardChartsMockData);
  }, [hazardCurvesSelections, hazardTableOptions.spectralPeriod]);

  const handlePrint = useReactToPrint({
    content: () => printTargetRef.current,
  });

  const flexProps = {
    display: 'flex',
    justifyConten: 'center',
    alignItems: 'center',
  };

  const PageContainer = styled(Box)(({ theme }) => ({
    ...flexProps,
    margin: '0 5% 0 5%',
    flexDirection: 'column',
    [theme.breakpoints.down('xl')]: {
      margin: '0 2% 0 2%',
    },
  }));

  return (
    <PageContainer>
      <Box sx={{ ...flexProps, width: '100%' }}>
        <Typography variant="h1" sx={{ padding: 2, width: '100%', textAlign: 'center' }}>
          Hazard Curves and Spectra
        </Typography>
        <Fab sx={{ position: 'absolute', right: '2.5%' }} color="primary">
          <ShareIcon />
        </Fab>
      </Box>
      <HazardChartsControls selections={hazardCurvesSelections} setSelections={setHazardCurvesSelections} />
      {hazardCurvesSelections.lat && hazardCurvesSelections.lon && (
        <Box sx={{ width: '100%' }}>
          <div ref={printTargetRef}>
            <HazardCharts data={hazardChartsMockData} selections={hazardCurvesSelections} />
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
      )}
    </PageContainer>
  );
};

export default HazardChartsPage;

export const hazardChartsPageQuery = graphql`
  query HazardChartsPageQuery($hazard_model: String, $vs30s: [Float], $imts: [String], $locs: [String], $aggs: [String]) {
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
