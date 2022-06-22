import React, { useState } from 'react';
import { Box, Typography, Fab, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShareIcon from '@mui/icons-material/Share';

import HazardChartsControls from './HazardChartsControls';
import { HazardCurvesQueryVariables, HazardCurvesViewVariables } from './hazardCharts.types';
import { hazardPageLocations, hazardPageOptions } from './constants/hazardPageOptions';
import HazardChartsPlotsView from './HazardChartsPlotsView';

const HazardChartsPage: React.FC = () => {
  const [queryVariables, setQueryVariables] = useState<HazardCurvesQueryVariables>({
    hazard_model: 'TEST1',
    vs30s: [hazardPageOptions.vs30s[0]],
    locs: [hazardPageLocations[0].id],
    imts: hazardPageOptions.imts,
    aggs: ['mean'],
  });

  const [viewVariables, setViewVariables] = useState<HazardCurvesViewVariables>({
    imts: [hazardPageOptions.imts[0]],
    poe: undefined,
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
      <HazardChartsControls queryVariables={queryVariables} setQueryVariables={setQueryVariables} viewVariables={viewVariables} setViewVariables={setViewVariables} />
      <React.Suspense fallback={<CircularProgress />}>
        <HazardChartsPlotsView queryVariables={queryVariables} viewVariables={viewVariables} />
      </React.Suspense>
    </PageContainer>
  );
};

export default HazardChartsPage;
