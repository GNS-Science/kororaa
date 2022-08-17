import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import HazardMapsView from './HazardMapsView';

const HazardMapsPage: React.FC = () => {
  const PageContainer = styled(Box)(({ theme }) => ({
    ...flexProps,
    margin: '0 5% 0 5%',
    flexDirection: 'column',
    [theme.breakpoints.down('xl')]: {
      margin: '0 2% 0 2%',
    },
  }));

  const flexProps = {
    display: 'flex',
    justifyConten: 'center',
    alignItems: 'center',
  };

  return (
    <PageContainer>
      <Box sx={{ ...flexProps, width: '100%' }}>
        <Typography variant="h1" sx={{ padding: 2, width: '100%', textAlign: 'center' }}>
          Hazard Maps
        </Typography>
        <React.Suspense fallback={<CircularProgress />}>
          <HazardMapsView />
        </React.Suspense>
      </Box>
    </PageContainer>
  );
};

export default HazardMapsPage;
