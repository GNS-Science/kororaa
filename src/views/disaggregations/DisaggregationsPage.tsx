import React, { useMemo, useReducer, useState } from 'react';
import { styled } from '@mui/material/styles';
import { DisaggregationBarChart, DisaggregationBarChartLegend, SelectControl } from '@gns-science/toshi-nest';
import { graphql } from 'babel-plugin-relay/macro';
import { Box, Typography } from '@mui/material';
import { ParentSize } from '@visx/responsive';
import { useLazyLoadQuery } from 'react-relay';
import { DisaggregationsPageQuery } from './__generated__/DisaggregationsPageQuery.graphql';
import { disaggregationsPageReducer, disaggregationsPageReducerInitialState } from './DisaggregationsPageReducer';
import DisaggregationsControls from './DisaggregationsControls';
import { getReportUrl } from './disaggregationPage.service';
import { InfoTooltip } from '../../components/common/InfoTooltip';
import SimpleBackdrop from '../../components/common/SimpleBackdrop';
import { DisaggregationsFilter } from './DisaggregationsFilter';
import { sampleData } from '../../mocks/mockData/sample_data_1dbar';

const PageContainer = styled('div')(() => ({
  padding: '2rem',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}));

const DisaggregationsContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  width: '100%',
  alignItems: 'center',
}));

const ControlsContainer = styled(Box)(() => ({
  padding: '1rem',
}));

const TitleContainer = styled('div')({
  justifyContent: 'left',
  textAlign: 'left',
  width: '100%',
  paddingBottom: '2rem',
});

const DropDownContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  '> div': {
    margin: '10px',
  },
});

export const DisaggregationsComponent: React.FC = () => {
  const data = useLazyLoadQuery<DisaggregationsPageQuery>(disaggregationsPageQuery, {});
  const [state, dispatch] = useReducer(disaggregationsPageReducer, disaggregationsPageReducerInitialState);
  const [xAxis, setXAxis] = useState<string>('Magnitude');
  const [colourBy, setColourBy] = useState<string>('Distance');
  const reportUrl = useMemo(() => getReportUrl(data, state), [data, state]);
  const markdown = useMemo(() => data?.textual_content?.content && data?.textual_content?.content[0]?.text, [data]);
  const content_type = useMemo(() => data?.textual_content?.content && data?.textual_content?.content[0]?.content_type, [data]);
  const dropDownOptions = ['Tectonic Region Type', 'Distance', 'Magnitude', 'Epsilon'];
  const colourArray = ['grey', 'blue'];
  return (
    <PageContainer>
      <TitleContainer>
        <Typography variant="h2">
          Disaggregations
          <InfoTooltip content={markdown || ''} format={content_type === 'Markdown'} />
        </Typography>
      </TitleContainer>
      <ControlsContainer>
        <DisaggregationsControls data={data} state={state} dispatch={dispatch} />
      </ControlsContainer>
      <DisaggregationsContainer>
        <DisaggregationsFilter tectonicRegionTypeOptions={['Tectonic Region Type', 'Distance', 'Magnitude', 'Epsilon']} />
        <div style={{ height: '50vh', width: '50vw', padding: '10px' }}>
          <ParentSize>
            {({ width, height }) => (
              <DisaggregationBarChart
                colourArray={colourArray}
                barData={sampleData}
                width={width}
                height={height}
                verticalMargin={80}
                xLabel={xAxis}
                yLabel={'Contribution to hazard (%)'}
                xNumTicks={20}
                leftMargin={80}
              />
            )}
          </ParentSize>
        </div>
        <DropDownContainer>
          <SelectControl name={'x axis'} options={dropDownOptions} selection={xAxis} setSelection={setXAxis} />
          <SelectControl name={'colour by'} options={dropDownOptions} selection={colourBy} setSelection={setColourBy} />
          <DisaggregationBarChartLegend colourArray={colourArray} legendGlyphSize={20} domain={['All (100%)', '7.5-8.5 (68%)']} legendTitle={colourBy} />
        </DropDownContainer>
      </DisaggregationsContainer>
    </PageContainer>
  );
};

const DisaggregationsPage = () => {
  return (
    <React.Suspense fallback={<SimpleBackdrop />}>
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
