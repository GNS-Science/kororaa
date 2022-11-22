import React, { useReducer, useState, useMemo, useTransition, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LeafletDrawer } from '@gns-science/toshi-nest';

import FaultModel from './FaultModel';
import { flexParentCenter } from '../../utils/styleUtils';
import { InfoTooltip } from '../../components/common/InfoTooltip';
import { faultModelReducer, initialState } from './faultModelReducer';
import SimpleBackdrop from '../../components/common/SimpleBackdrop';
import sampleData from './constants/sampleData';
import FaultModelControls from './FaultModelControls';

const PageContainer = styled(Box)(({ theme }) => ({
  ...flexParentCenter,
  margin: '0 5% 0 5% 0.5% 0.5%',
  flexDirection: 'column',
  [theme.breakpoints.down('xl')]: {
    margin: '0 2% 0 2% 0.2% 0.2%',
  },
}));

const FaultModelComponent: React.FC = () => {
  const [state, dispatch] = useReducer(faultModelReducer, initialState);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const markdown = '## Fault Model\n\nThis is the fault model.';
  const content_type = 'Markdown';

  useEffect(() => {
    function updateScrollHeight() {
      setScrollHeight(window.scrollY);
    }
    window.addEventListener('scroll', updateScrollHeight);
    updateScrollHeight();
    return () => window.removeEventListener('scroll', updateScrollHeight);
  }, []);

  return (
    <PageContainer>
      {isPending && <SimpleBackdrop />}
      <Box role="faultModelView" sx={{ ...flexParentCenter, justifyContent: 'center', height: '100%', width: '100%' }}>
        <LeafletDrawer drawerHeight={'80vh'} headerHeight={`${100 - scrollHeight}px`} width={'500px'} fullscreen={fullscreen}>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            Inversion Fault Model
            <InfoTooltip content={markdown || ''} format={content_type === 'Markdown'} />
          </Typography>
          <React.Suspense fallback={<SimpleBackdrop />}>
            <FaultModelControls state={state} dispatch={dispatch} startTransition={startTransition} isPending={isPending} geoJson={[sampleData.ruptures, sampleData.locations]} />
          </React.Suspense>
        </LeafletDrawer>
        <FaultModel geoJson={[sampleData.ruptures, sampleData.locations]} setFullscreen={setFullscreen} />
      </Box>
    </PageContainer>
  );
};

const FaultModelPage: React.FC = () => {
  return (
    <React.Suspense fallback={<SimpleBackdrop />}>
      <FaultModelComponent />
    </React.Suspense>
  );
};

export default FaultModelPage;
