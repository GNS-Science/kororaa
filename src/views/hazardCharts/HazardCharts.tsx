import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { HazardCurvesResponsive, SpectralAccelerationChartResponsive } from '@gns-science/toshi-nest';

import { HazardCurvesViewVariables } from './hazardCharts.types';
import { HazardChartsPlotsViewQuery$data } from './__generated__/HazardChartsPlotsViewQuery.graphql';
import { getAllCurves, getColor, getCurve, getSpectralAccelerationData } from './hazardPage.service';
import { hazardPageOptions } from './hazardPageOptions';

interface HazardChartsProps {
  data: HazardChartsPlotsViewQuery$data;
  viewVariables: HazardCurvesViewVariables;
}

const HazardCharts: React.FC<HazardChartsProps> = ({ data, viewVariables }: HazardChartsProps) => {
  const allCurves = useMemo(() => getAllCurves(data), [data]);
  const curve = useMemo(() => getCurve(allCurves, viewVariables.imts[0]), [allCurves, viewVariables.imts]);
  const color = useMemo(() => getColor(curve), [curve]);
  const SAdata = useMemo(() => getSpectralAccelerationData(hazardPageOptions.imts, viewVariables.poe, allCurves), [viewVariables.poe, allCurves]);

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
          curves={curve}
          scalesConfig={scalesConfig}
          colors={color}
          heading={'Hazard Curves'}
          subHeading={`${viewVariables.imts[0]}`}
          gridNumTicks={10}
          poe={viewVariables.poe}
        />
      </ChartContainer>
      {viewVariables.poe && (
        <ChartContainer>
          <SpectralAccelerationChartResponsive testId="sa-chart" data={SAdata} heading={'Spectral Acceleration Chart'} subHeading={`${viewVariables.poe * 100}% in 50 years`} />
        </ChartContainer>
      )}
    </HazardChartsContainer>
  );
};

export default HazardCharts;
