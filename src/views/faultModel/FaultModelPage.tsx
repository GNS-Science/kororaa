import React, { useReducer, useState, useTransition, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LeafletDrawer } from '@gns-science/toshi-nest';
import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';

import FaultModel from './FaultModel';
import { flexParentCenter } from '../../utils/styleUtils';
import { InfoTooltip } from '../../components/common/InfoTooltip';
import { faultModelReducer, initialState } from './faultModelReducer';
import SimpleBackdrop from '../../components/common/SimpleBackdrop';
import sampleData from './constants/sampleData';
import FaultModelControls from './FaultModelControls';
import { FaultModelTableContainer } from './FaultModelTableContainer';
import { FaultModelPageQuery } from './__generated__/FaultModelPageQuery.graphql';

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
  const data = useLazyLoadQuery<FaultModelPageQuery>(faultModelPageQuery, {});
  // console.log(data);
  const faultSystemBranches =
    data?.nzshm_model?.model?.source_logic_tree_spec?.fault_system_branches &&
    data?.nzshm_model?.model?.source_logic_tree_spec?.fault_system_branches.filter((branch) => branch && branch?.short_name === 'CRU')[0]?.branches;
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
        <LeafletDrawer drawerHeight={'80vh'} headerHeight={`${100 - scrollHeight}px`} width={'400px'} fullscreen={fullscreen}>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            Inversion Fault Model
            <InfoTooltip content={markdown || ''} format={content_type === 'Markdown'} />
          </Typography>
          <React.Suspense fallback={<SimpleBackdrop />}>
            <FaultModelControls
              state={state}
              dispatch={dispatch}
              startTransition={startTransition}
              isPending={isPending}
              geoJson={[sampleData.ruptures, sampleData.locations]}
              options={faultSystemBranches}
            />
          </React.Suspense>
        </LeafletDrawer>
        <FaultModel geoJson={[sampleData.ruptures, sampleData.locations]} setFullscreen={setFullscreen} />
      </Box>
      <FaultModelTableContainer data={sampleData.ruptures} id="faultModelTable" />
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

export const faultModelPageQuery = graphql`
  query FaultModelPageQuery {
    nzshm_model(version: "NSHM_1.0.0") {
      model {
        version
        title
        source_logic_tree_spec {
          fault_system_branches {
            short_name
            long_name
            branches {
              name
              long_name
              value_options
            }
          }
        }
      }
    }
  }
`;
