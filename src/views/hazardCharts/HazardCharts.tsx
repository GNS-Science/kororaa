import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { HazardCurvesResponsive, SpectralAccelerationChartResponsive } from '@gns-science/toshi-nest';

import { HazardCurvesQueryVariables, HazardCurvesViewVariables } from './hazardCharts.types';
import { HazardChartsPlotsViewQuery$data } from './__generated__/HazardChartsPlotsViewQuery.graphql';
import { getAllCurves, getColors, getFilteredCurves, getSpectralAccelerationCurves } from './hazardPage.service';

interface HazardChartsProps {
  data: HazardChartsPlotsViewQuery$data;
  queryVariables: HazardCurvesQueryVariables;
  viewVariables: HazardCurvesViewVariables;
}

const HazardCharts: React.FC<HazardChartsProps> = ({ data, viewVariables, queryVariables }: HazardChartsProps) => {
  const allCurves = useMemo(() => getAllCurves(data), [data]);
  const filteredCurves = useMemo(() => getFilteredCurves(allCurves, viewVariables.imts), [allCurves, viewVariables.imts]);
  const colors = useMemo(() => getColors(filteredCurves), [filteredCurves]);
  const SAcurves = useMemo(() => getSpectralAccelerationCurves(allCurves, queryVariables, viewVariables.poe), [allCurves, queryVariables, viewVariables.poe]);
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
          subHeading={`${viewVariables.imts[0]}`}
          gridNumTicks={10}
          poe={viewVariables.poe}
        />
      </ChartContainer>
      {viewVariables.poe && (
        <ChartContainer>
          <SpectralAccelerationChartResponsive
            testId="sa-chart"
            data={SAcurves}
            colors={SAcurvesColors}
            heading={'Spectral Acceleration Chart'}
            subHeading={`${viewVariables.poe * 100}% in 50 years`}
          />
        </ChartContainer>
      )}
    </HazardChartsContainer>
  );
};

export default HazardCharts;
