import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

import HazardMaps from './HazardMaps';

const HazardMapsPage: React.FC = () => {
  const PageContainer = styled(Box)(({ theme }) => ({
    ...flexProps,
    margin: '0 5% 0 5% 0.5% 0.5%',
    flexDirection: 'column',
    [theme.breakpoints.down('xl')]: {
      margin: '0 2% 0 2% 0.2% 0.2%',
    },
  }));

  const flexProps = {
    display: 'flex',
    justifyConten: 'center',
    alignItems: 'center',
  };

  return (
    <PageContainer>
      <Box role="hazardMapsView" sx={{ width: '100%' }}>
        <React.Suspense fallback={<CircularProgress />}>
          <HazardMaps />
        </React.Suspense>
      </Box>
    </PageContainer>
  );
};

export default HazardMapsPage;
