import React, { useMemo, useReducer } from 'react';
import { styled } from '@mui/material/styles';
import { graphql } from 'babel-plugin-relay/macro';
import { Box } from '@mui/material';
import { useLazyLoadQuery } from 'react-relay';
import { DisaggregationsPageQuery } from './__generated__/DisaggregationsPageQuery.graphql';
import { disaggregationsPageReducer, disaggregationsPageReducerInitialState } from './DisaggregationsPageReducer';
import DisaggregationsControls from './DisaggregationsControls';
import { getReportUrl } from './disaggregationPage.service';

const PageContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  '& > iframe': {
    width: '80%',
    height: '100%',
  },
}));

export const DisaggregationsPage: React.FC = () => {
  const data = useLazyLoadQuery<DisaggregationsPageQuery>(disaggregationsPageQuery, {});
  const [state, dispatch] = useReducer(disaggregationsPageReducer, disaggregationsPageReducerInitialState);
  const reportUrl = useMemo(() => getReportUrl(data, state), [data, state]);
  return (
    <PageContainer>
      <DisaggregationsControls data={data} state={state} dispatch={dispatch} />
      <iframe src={reportUrl}></iframe>
    </PageContainer>
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
  }
`;

export default DisaggregationsPage;
