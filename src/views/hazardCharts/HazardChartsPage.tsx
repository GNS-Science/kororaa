import React, { useState, useRef } from 'react';
import { ControlsBar } from '@gns-science/toshi-nest';
import { Button, Box, Typography, Fab } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useReactToPrint } from 'react-to-print';
import ShareIcon from '@mui/icons-material/Share';

import HazardCharts from './HazardCharts';
import HazardChartsControls from './HazardChartsControls';
import { getHazardTableOptions } from './hazardPage.service';
import { hazardChartsMockData } from '../../constants/hazardChartsMockData';
import { HazardCurvesSelections } from './hazardCharts.types';

const HazardChartsPage: React.FC = () => {
  const printTargetRef = useRef<HTMLDivElement>(null);
  const hazardTableOptions = getHazardTableOptions(hazardChartsMockData);

  const [hazardCurvesSelections, setHazardCurvesSelections] = useState<HazardCurvesSelections>({
    lat: '',
    lon: '',
    vs30: hazardTableOptions.vs30[0],
    spectralPeriod: hazardTableOptions.spectralPeriod[0],
    POE: 'None',
  });

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
              <Button variant="contained">Save Data</Button>
            </ControlsBar>
          </Box>
        </Box>
      )}
    </PageContainer>
  );
};

export default HazardChartsPage;
