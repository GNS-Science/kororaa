import React, { useReducer, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LeafletDrawer } from '@gns-science/toshi-nest';

import HazardMaps from './HazardMaps';
import { hazardMapsReducer, initialState } from './hazardMapReducer';
import HazardMapsControls from './__generated__/HazardMapsControls';

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

const HazardMapsPage: React.FC = () => {
  const [state, dispatch] = useReducer(hazardMapsReducer, initialState);
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  return (
    <PageContainer>
      <Box role="hazardMapsView" sx={{ width: '100%' }}>
        <React.Suspense fallback={<CircularProgress />}>
          <HazardMaps state={state} setFullscreen={setFullscreen} />
        </React.Suspense>
        <LeafletDrawer drawerHeight={'700px'} headerHeight={'120px'} width={'400px'} fullscreen={fullscreen}>
          <HazardMapsControls state={state} dispatch={dispatch} />
        </LeafletDrawer>
      </Box>
    </PageContainer>
  );
};

export default HazardMapsPage;
