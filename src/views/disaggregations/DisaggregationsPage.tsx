import React, { useMemo, useReducer } from 'react';
import { styled } from '@mui/material/styles';
import { graphql } from 'babel-plugin-relay/macro';
import { Box, Alert, Typography, CircularProgress } from '@mui/material';
import { useLazyLoadQuery } from 'react-relay';
import { DisaggregationsPageQuery } from './__generated__/DisaggregationsPageQuery.graphql';
import { disaggregationsPageReducer, disaggregationsPageReducerInitialState } from './DisaggregationsPageReducer';
import DisaggregationsControls from './DisaggregationsControls';
import { getReportUrl } from './disaggregationPage.service';
import { InfoTooltip } from '../../components/common/InfoTooltip';

const PageContainer = styled('div')(() => ({
  padding: '2rem',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}));

const DisaggregationsContainer = styled(Box)(() => ({
  display: 'grid',
  height: '100%',
  width: '100%',
  gridTemplateColumns: 'auto 1fr',
  '& > iframe': {
    width: '100%',
    height: '100vh',
  },
}));

const ControlsContainer = styled(Box)(() => ({
  position: 'sticky',
  top: 0,
  height: '100vh',
  overflowY: 'auto',
  padding: '1rem',
}));

const TitleContainer = styled('div')({
  justifyContent: 'left',
  textAlign: 'left',
  width: '100%',
  paddingBottom: '2rem',
});

const WarningContainer = styled(Box)(() => ({
  padding: '2rem',
}));

export const DisaggregationsComponent: React.FC = () => {
  const data = useLazyLoadQuery<DisaggregationsPageQuery>(disaggregationsPageQuery, {});
  const [state, dispatch] = useReducer(disaggregationsPageReducer, disaggregationsPageReducerInitialState);
  const reportUrl = useMemo(() => getReportUrl(data, state), [data, state]);
  const markdown = useMemo(() => data?.textual_content?.content && data?.textual_content?.content[0]?.text, [data]);
  const content_type = useMemo(() => data?.textual_content?.content && data?.textual_content?.content[0]?.content_type, [data]);

  return (
    <PageContainer>
      <TitleContainer>
        <Typography variant="h2">
          Disaggregations
          <InfoTooltip content={markdown || ''} format={content_type === 'Markdown'} />
        </Typography>
      </TitleContainer>
      <DisaggregationsContainer>
        <ControlsContainer>
          <DisaggregationsControls data={data} state={state} dispatch={dispatch} />
        </ControlsContainer>
        {reportUrl !== '' ? (
          <iframe src={`http://${reportUrl}`}></iframe>
        ) : (
          <WarningContainer>
            <Alert severity="error">No report available for this selection.</Alert>
          </WarningContainer>
        )}
      </DisaggregationsContainer>
    </PageContainer>
  );
};

const DisaggregationsPage = () => {
  return (
    <React.Suspense fallback={<CircularProgress />}>
      <DisaggregationsComponent />
    </React.Suspense>
  );
};

export const disaggregationsPageQuery = graphql`
  query DisaggregationsPageQuery {
    disaggregation_reports {
      reports {
        location {
          name
          key
          code
          lat
          lon
        }
        vs30
        inv_time
        poe
        imt
        report_url
      }
    }
    textual_content(index: "disagg_help.md") {
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

export default DisaggregationsPage;
