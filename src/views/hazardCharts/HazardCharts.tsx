import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { HazardCurvesResponsive, SpectralAccelerationChartResponsive } from '@gns-science/toshi-nest';

import { HazardCurvesQueryVariables } from './hazardCharts.types';
import { HazardChartsPlotsViewQuery$data } from './__generated__/HazardChartsPlotsViewQuery.graphql';
import { getAllCurves, getColors, getFilteredCurves, getSpectralAccelerationCurves } from './hazardPage.service';
import { HazardChartsPageState } from './HazardChartsPage';

interface HazardChartsProps {
  data: HazardChartsPlotsViewQuery$data;
  state: HazardChartsPageState;
  queryVariables: HazardCurvesQueryVariables;
}

const HazardCharts: React.FC<HazardChartsProps> = ({ data, state, queryVariables }: HazardChartsProps) => {
  const allCurves = useMemo(() => getAllCurves(data), [data]);
  const filteredCurves = useMemo(() => getFilteredCurves(allCurves, state.imts), [allCurves, state.imts]);
  const colors = useMemo(() => getColors(filteredCurves), [filteredCurves]);
  const SAcurves = useMemo(() => getSpectralAccelerationCurves(allCurves, queryVariables, state.poe), [allCurves, queryVariables, state.poe]);
  const SAcurvesColors = useMemo(() => getColors(SAcurves), [SAcurves]);

  const scalesConfig = {
    x: { type: 'log', domain: [1e-3, 10] },
    y: { type: 'log', domain: [1e-5, 1] },
  };

  const HazardChartsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    padding: 20,
    width: '100%',
    border: 'solid black 1px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  }));

  const ChartContainer = styled(Box)(({ theme }) => ({
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  }));

  return (
    <HazardChartsContainer data-testid="hazardChartsContainer">
      <ChartContainer>
        <HazardCurvesResponsive
          data-testid="hazard-curve"
          curves={filteredCurves}
          scalesConfig={scalesConfig}
          colors={colors}
          heading={'Hazard Curves'}
          subHeading={`${state.imts[0]}`}
          gridNumTicks={10}
          poe={state.poe}
        />
      </ChartContainer>
      {state.poe && (
        <ChartContainer>
          <SpectralAccelerationChartResponsive testId="sa-chart" data={SAcurves} colors={SAcurvesColors} heading={'Spectral Acceleration Chart'} subHeading={`${state.poe * 100}% in 50 years`} />
        </ChartContainer>
      )}
    </HazardChartsContainer>
  );
};

export default HazardCharts;
