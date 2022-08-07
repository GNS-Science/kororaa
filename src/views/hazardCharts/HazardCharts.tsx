import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GroupCurveChartResponsive } from '@gns-science/toshi-nest';

import { HazardChartsPlotsViewQuery$data } from './__generated__/HazardChartsPlotsViewQuery.graphql';
import { getAllCurveGroups, getFilteredCurveGroups } from './hazardPage.service';
import { HazardPageState } from './hazardPageReducer';
import { addColorsToCurves, getSpectralAccelUncertaintyCurves } from '../../services/spectralAccel/spectralAccel.service';

interface HazardChartsProps {
  data: HazardChartsPlotsViewQuery$data;
  state: HazardPageState;
}

const HazardCharts: React.FC<HazardChartsProps> = ({ data, state }: HazardChartsProps) => {
  const allCurveGroups = useMemo(() => getAllCurveGroups(data), [data]);
  const filteredCurveGroups = useMemo(() => getFilteredCurveGroups(allCurveGroups, state.imts), [allCurveGroups, state.imts]);
  const curveGroupWithColors = useMemo(() => addColorsToCurves(filteredCurveGroups), [filteredCurveGroups]);
  const saCurvesUncertainty = useMemo(() => getSpectralAccelUncertaintyCurves(state.vs30s, state.locs, data, state.poe), [state, data]);
  const saCurvesWithColors = useMemo(() => addColorsToCurves(saCurvesUncertainty), [saCurvesUncertainty]);

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
          <GroupCurveChartResponsive
            scaleType={state.xScale}
            ySacleType={'log'}
            xLimits={[0.01, 10]}
            yLimits={[0.000001, 1]}
            tooltip={true}
            crosshair={true}
            heading="Hazard Uncertainty"
            subHeading={`${state.imts[0]}`}
            curves={curveGroupWithColors}
            poe={state.poe}
            uncertainty={state.showUncertainty}
          />
        </ChartContainer>
        {state.poe && (
          <ChartContainer>
            <GroupCurveChartResponsive
              testId="sa-chart"
              spectral={true}
              scaleType={'linear'}
              yScaleType={'linear'}
              xLimits={[0.1, 6]}
              yLimits={[0.1, 4]}
              tooltip={true}
              crosshair={true}
              heading="Spectral Acceleration Chart"
              subHeading={`${state.poe * 100}% in 50 years`}
              curves={saCurvesWithColors}
              poe={state.poe}
              uncertainty={state.showUncertainty}
            />
          </ChartContainer>
        )}
      </HazardChartsContainer>
    </>
  );
};

export default HazardCharts;
