import React, { useReducer } from 'react';
import { Box, Typography, Tooltip, CircularProgress, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';

import HazardChartsControls from './HazardChartsControls';
import HazardChartsPlotsView from './HazardChartsPlotsView';
import { hazardPageReducer, hazardPageReducerInitialState } from './hazardPageReducer';
import { flexParentCenter } from '../../utils/styleUtils';

const HazardChartsPage: React.FC = () => {
  const [state, dispatch] = useReducer(hazardPageReducer, hazardPageReducerInitialState);

  const PageContainer = styled(Box)(({ theme }) => ({
    ...flexParentCenter,
    margin: '0 5% 0 5%',
    flexDirection: 'column',
    [theme.breakpoints.down('xl')]: {
      margin: '0 2% 0 2%',
    },
  }));

  return (
    <PageContainer>
      <Box sx={{ ...flexParentCenter, width: '100%' }}>
        <Typography variant="h1" sx={{ padding: 2, width: '100%', textAlign: 'center' }}>
          Hazard Curves and Spectra
          <Tooltip title="lorem ipsum dolor sit amet">
            <IconButton>
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </Typography>
      </Box>
      <HazardChartsControls state={state} dispatch={dispatch} />
      <React.Suspense fallback={<CircularProgress />}>
        <HazardChartsPlotsView state={state} dispatch={dispatch} />
      </React.Suspense>
    </PageContainer>
  );
};

export default HazardChartsPage;
