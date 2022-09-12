import React, { useMemo, useReducer } from 'react';
import { styled } from '@mui/material/styles';
import { graphql } from 'babel-plugin-relay/macro';
import { Box, Alert, Typography, CircularProgress } from '@mui/material';
import { useLazyLoadQuery } from 'react-relay';
import { DisaggregationsPageQuery } from './__generated__/DisaggregationsPageQuery.graphql';
import { disaggregationsPageReducer, disaggregationsPageReducerInitialState } from './DisaggregationsPageReducer';
import DisaggregationsControls from './DisaggregationsControls';
import { getReportUrl } from './disaggregationPage.service';
import { flexParentCenter } from '../../utils/styleUtils';
import { InfoTooltip } from '../../components/common/InfoTooltip';

const PageContainer = styled(Box)(({ theme }) => ({
  ...flexParentCenter,
  margin: '0 5% 0 5%',
  flexDirection: 'column',
  [theme.breakpoints.down('xl')]: {
    margin: '0 2% 0 2%',
  },
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

const WarningContainer = styled(Box)(() => ({
  padding: '2rem',
}));

export const DisaggregationsComponent: React.FC = () => {
  const data = useLazyLoadQuery<DisaggregationsPageQuery>(disaggregationsPageQuery, {});
  const [state, dispatch] = useReducer(disaggregationsPageReducer, disaggregationsPageReducerInitialState);
  const reportUrl = useMemo(() => getReportUrl(data, state), [data, state]);

  return (
    <PageContainer>
      <Box sx={{ ...flexParentCenter, width: '100%' }}>
        <Typography variant="h1" sx={{ padding: 2, width: '100%' }}>
          Disaggregations
          <InfoTooltip markdown={'lorem ipsum'} />
        </Typography>
      </Box>
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
  }
`;

export default DisaggregationsPage;
