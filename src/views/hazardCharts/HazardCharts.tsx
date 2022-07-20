import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { HazardChartResponsive, SpectralAccelChartResponsive, HazardUncertaintyChartResponsive } from '@gns-science/toshi-nest';

import { HazardChartsPlotsViewQuery$data } from './__generated__/HazardChartsPlotsViewQuery.graphql';
import { getAllCurves, getAllCurveGroups, addCurveGroupColors, getColors, getFilteredCurves, getSpectralAccelerationCurves, getFilteredCurveGroups } from './hazardPage.service';
import { HazardPageState } from './hazardPageReducer';

interface HazardChartsProps {
  data: HazardChartsPlotsViewQuery$data;
  state: HazardPageState;
}

const HazardCharts: React.FC<HazardChartsProps> = ({ data, state }: HazardChartsProps) => {
  const allCurves = useMemo(() => getAllCurves(data), [data]);
  const allCurveGroups = useMemo(() => getAllCurveGroups(data), [data]);
  const filteredCurves = useMemo(() => getFilteredCurves(allCurves, state.imts), [allCurves, state.imts]);
  const filteredCurveGroups = useMemo(() => getFilteredCurveGroups(allCurveGroups, state.imts), [allCurveGroups, state.imts]);
  const curveGroupWithColors = useMemo(() => addCurveGroupColors(filteredCurveGroups), [filteredCurveGroups]);
  const colors = useMemo(() => getColors(filteredCurves), [filteredCurves]);
  const SAcurves = useMemo(() => getSpectralAccelerationCurves(allCurves, state.vs30s, state.locs, state.poe), [allCurves, state]);
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
    <>
      <HazardChartsContainer data-testid="hazardChartsContainer">
        <ChartContainer>
          <HazardUncertaintyChartResponsive
            scaleType="log"
            xLimits={[0.01, 10]}
            yLimits={[0.000001, 1]}
            tooltip={true}
            crosshair={true}
            heading="Hazard Uncertainty"
            subHeading={`${state.imts[0]}`}
            curves={curveGroupWithColors}
            poe={state.poe}
          />
          {/* <HazardChartResponsive
            data-testid="hazard-curve"
            curves={filteredCurves}
            scalesConfig={scalesConfig}
            colors={colors}
            heading={'Hazard Curves'}
            subHeading={`${state.imts[0]}`}
            gridNumTicks={10}
            poe={state.poe}
          /> */}
        </ChartContainer>
        {state.poe && (
          <ChartContainer>
            <SpectralAccelChartResponsive testId="sa-chart" data={SAcurves} colors={SAcurvesColors} heading={'Spectral Acceleration Chart'} subHeading={`${state.poe * 100}% in 50 years`} />
          </ChartContainer>
        )}
      </HazardChartsContainer>
      <div></div>
    </>
  );
};

export default HazardCharts;
