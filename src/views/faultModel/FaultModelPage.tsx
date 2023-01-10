import React, { useState, useTransition, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LeafletDrawer } from '@gns-science/toshi-nest';
import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';

import FaultModel from './FaultModel';
import { flexParentCenter } from '../../utils/styleUtils';
import { InfoTooltip } from '../../components/common/InfoTooltip';
import SimpleBackdrop from '../../components/common/SimpleBackdrop';
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

export interface SolvisResponse {
  solution_id: string;
  location_ids: string;
  radius_km: string;
  rupture_count: number;
  section_count: number;
  ruptures: string;
  locations: string;
}

const FaultModelComponent: React.FC = () => {
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [geoJson, setGeoJson] = useState<SolvisResponse | null>(null);
  const markdown = '## Fault Model\n\nThis is the fault model.';
  const content_type = 'Markdown';
  const data = useLazyLoadQuery<FaultModelPageQuery>(faultModelPageQuery, {});
  const faultSystemBranches =
    data?.nzshm_model?.model?.source_logic_tree_spec?.fault_system_branches &&
    data?.nzshm_model?.model?.source_logic_tree_spec?.fault_system_branches.filter((branch) => branch && branch?.short_name === 'CRU')[0]?.branches;

  const options = faultSystemBranches?.map((branch) => {
    return {
      value: branch?.name,
      label: branch?.long_name,
      value_options: branch?.value_options,
    };
  });
  const logicTreeBranches = data?.nzshm_model?.model?.source_logic_tree?.fault_system_branches?.filter((branch) => branch && branch?.short_name === 'CRU')[0];

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
            <FaultModelControls startTransition={startTransition} isPending={isPending} options={options} logicTreeBranches={logicTreeBranches} setGeoJson={setGeoJson} />
          </React.Suspense>
        </LeafletDrawer>
        <FaultModel geoJson={geoJson && [geoJson.locations, geoJson.ruptures]} setFullscreen={setFullscreen} />
      </Box>
      <FaultModelTableContainer data={geoJson ? geoJson.ruptures : ''} id="faultModelTable" />
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
        source_logic_tree {
          fault_system_branches {
            long_name
            short_name
            branches {
              weight
              inversion_solution_id
              inversion_solution_type
              onfault_nrml_id
              distributed_nrml_id
              values {
                long_name
                json_value
              }
            }
          }
        }
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
