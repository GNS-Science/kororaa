import React, { useReducer } from 'react';
import { Box, Typography, Fab, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShareIcon from '@mui/icons-material/Share';

import HazardChartsControls from './HazardChartsControls';
import { hazardPageLocations, hazardPageOptions } from './constants/hazardPageOptions';
import HazardChartsPlotsView from './HazardChartsPlotsView';
import { hazardPageReducer } from './hazardPageReducer';

const HazardChartsPage: React.FC = () => {
  const [state, dispatch] = useReducer(hazardPageReducer, {
    locs: [hazardPageLocations[0].id],
    vs30s: [hazardPageOptions.vs30s[0]],
    imts: [hazardPageOptions.imts[0]],
    poe: undefined,
    showUncertainty: true,
    xScale: 'log',
    yScale: 'log',
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
      <HazardChartsControls state={state} dispatch={dispatch} />
      <React.Suspense fallback={<CircularProgress />}>
        <HazardChartsPlotsView state={state} />
      </React.Suspense>
    </PageContainer>
  );
};

export default HazardChartsPage;
