import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ResponsiveHazardCurves, SpectralAccelerationChartResponsive } from '@gns-science/toshi-nest';

import { getHazardTableOptions, getColor, getCurves, getSpectralAccelerationData } from './hazardPage.service';
import { HazardCurvesSelections } from './hazardCharts.types';
import { HazardChartsMockData } from '../../constants/hazardChartsMockData';

interface HazardChartsProps {
  data: HazardChartsMockData;
  selections: HazardCurvesSelections;
}

const HazardCharts: React.FC<HazardChartsProps> = ({ data, selections }: HazardChartsProps) => {
  const hazardPageOption = getHazardTableOptions(data);

  const curve = getCurves(data, selections, [selections.spectralPeriod]);
  const color = getColor(curve);

  const allCurves = getCurves(data, selections, hazardPageOption.spectralPeriod);

  const SAdata = getSpectralAccelerationData(hazardPageOption.spectralPeriod, selections.POE, allCurves);

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

  const ChartContainer = styled('div')(({ theme }) => ({
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  }));

  return (
    <HazardChartsContainer>
      <ChartContainer>
        <ResponsiveHazardCurves curves={curve} scalesConfig={scalesConfig} colors={color} heading={'Responsive Hazard Curves'} subHeading={'subHeading'} gridNumTicks={10} POE={selections.POE} />
      </ChartContainer>
      {selections.POE !== 'None' && (
        <ChartContainer>
          <SpectralAccelerationChartResponsive data={SAdata} heading={'Spectral Acceleration Chart Responsive'} subHeading={'subHeading'} />
        </ChartContainer>
      )}
    </HazardChartsContainer>
  );
};

export default HazardCharts;
