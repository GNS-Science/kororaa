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
  const [geoJson, setGeoJson] = useState<string[] | null>(null);
  const data = useLazyLoadQuery<FaultModelPageQuery>(faultModelPageQuery, {});
  const markdown = data?.textual_content?.content && data.textual_content?.content[0]?.text;
  const content_type = data?.textual_content?.content && data.textual_content?.content[0]?.content_type;

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
        <LeafletDrawer drawerHeight={'80vh'} headerHeight={`${100 - scrollHeight}px`} width={'700px'} fullscreen={fullscreen}>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            Inversion Fault Model
            <InfoTooltip content={markdown || ''} format={content_type === 'Markdown'} />
          </Typography>
          <FaultModelControls startTransition={startTransition} isPending={isPending} setGeoJson={setGeoJson} />
        </LeafletDrawer>
        <FaultModel geoJson={geoJson} setFullscreen={setFullscreen} />
      </Box>
      <FaultModelTableContainer data={geoJson ? geoJson[0] : ''} id="faultModelTable" />
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
    textual_content(index: "ifm_analysis_help.md") {
      ok
      content {
        index
        content_type
        text
        created
        author
        tags
        status
      }
    }
  }
`;
