import React, { useReducer } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

import HazardChartsControls from './HazardChartsControls';
import HazardChartsPlotsView from './HazardChartsPlotsView';
import { hazardPageReducer, hazardPageReducerInitialState } from './hazardPageReducer';
import { InfoTooltip } from '../../components/common/InfoTooltip';
import { hazardMarkdown } from '../../utils/markdownUtils';

const PageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  flexDirection: 'column',
  [theme.breakpoints.down('xl')]: {
    margin: '0 2% 0 2%',
  },
}));

const TitleContainer = styled('div')({
  justifyContent: 'left',
  textAlign: 'left',
  width: '100%',
  paddingBottom: '2rem',
});

const HazardChartsPage: React.FC = () => {
  const [state, dispatch] = useReducer(hazardPageReducer, hazardPageReducerInitialState);

  return (
    <PageContainer>
      <TitleContainer>
        <Typography variant="h1">
          Hazard Curves and Spectra
          <InfoTooltip markdown={hazardMarkdown} />
        </Typography>
      </TitleContainer>
      <HazardChartsControls state={state} dispatch={dispatch} />
      <React.Suspense fallback={<CircularProgress />}>
        <HazardChartsPlotsView state={state} dispatch={dispatch} />
      </React.Suspense>
    </PageContainer>
  );
};

export default HazardChartsPage;
