import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GroupCurveChartResponsive } from '@gns-science/toshi-nest';

import { HazardChartsPlotsViewQuery$data } from './__generated__/HazardChartsPlotsViewQuery.graphql';
import { getAllCurveGroups, getFilteredCurveGroups, getLocationList, getYScale } from './hazardPage.service';
import { HazardPageState } from './hazardPageReducer';
import { addColorsToCurves, getSpectralAccelUncertaintyCurves } from '../../services/spectralAccel/spectralAccel.service';
import HazardChartsSettings from './HazardChartsSettings';
import {
  HAZARD_GMAX,
  HAZARD_GMAX_LOG,
  HAZARD_GMIN,
  HAZARD_GMIN_LOG,
  HAZARD_POEMAX,
  HAZARD_POEMIN,
  SA_GMAX,
  SA_GMIN,
  SA_PERIODMAX,
  SA_PERIODMAX_LOG,
  SA_PERIODMIN,
  SA_PERIODMIN_LOG,
} from '../../utils/environmentVariables';

interface HazardChartsProps {
  data: HazardChartsPlotsViewQuery$data;
  state: HazardPageState;
  dispatch: React.Dispatch<Partial<HazardPageState>>;
}

const HazardCharts: React.FC<HazardChartsProps> = ({ data, state, dispatch }: HazardChartsProps) => {
  const locationList = useMemo(() => getLocationList(data), [data]);
  const allCurveGroups = useMemo(() => getAllCurveGroups(data), [data]);
  const filteredCurveGroups = useMemo(() => getFilteredCurveGroups(allCurveGroups, state.imts), [allCurveGroups, state.imts]);
  const curveGroupWithColors = useMemo(() => addColorsToCurves(filteredCurveGroups), [filteredCurveGroups]);
  const saCurvesUncertainty = useMemo(() => getSpectralAccelUncertaintyCurves(state.vs30s, locationList, data, state.poe), [locationList, state, data]);
  const saCurvesWithColors = useMemo(() => addColorsToCurves(saCurvesUncertainty), [saCurvesUncertainty]);

  const HazardChartsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    padding: 20,
    width: '100%',
    height: 'calc(50vw * 0.75)',
    border: 'solid black 1px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: 'calc(100vw * 0.75 * 2)',
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
          <HazardChartsSettings spectral={false} state={state} dispatch={dispatch} />
          <div id="hazardChart">
            <GroupCurveChartResponsive
              scaleType={state.hazardXScale}
              yScaleType={'log'}
              xLabel=" Acceleration (g)"
              yLabel="Annual Probability of Exceedance"
              xLimits={state.hazardXScale === 'linear' ? [HAZARD_GMIN, HAZARD_GMAX] : [HAZARD_GMIN_LOG, HAZARD_GMAX_LOG]}
              yLimits={[HAZARD_POEMIN, HAZARD_POEMAX]}
              tooltip={true}
              crosshair={true}
              heading="Hazard Curve"
              subHeading={`${state.imts[0]}`}
              curves={curveGroupWithColors}
              poe={state.poe}
              uncertainty={state.hazardUncertainty}
            />
          </div>
        </ChartContainer>
        {state.poe && (
          <ChartContainer>
            <HazardChartsSettings spectral={true} state={state} dispatch={dispatch} />
            <div id="spectraChart">
              <GroupCurveChartResponsive
                testId="sa-chart"
                spectral={true}
                scaleType={state.spectraXScale}
                yScaleType={'linear'}
                xLabel="Period (s)"
                yLabel="Shaking Intensity (g)"
                xLimits={state.spectraXScale === 'linear' ? [SA_PERIODMIN, SA_PERIODMAX] : [SA_PERIODMIN_LOG, SA_PERIODMAX_LOG]}
                yLimits={SA_GMAX === 'auto' ? getYScale(saCurvesWithColors, SA_GMIN) : [SA_GMIN, SA_GMAX]}
                tooltip={true}
                crosshair={true}
                heading="Universal Hazard Spectra"
                subHeading={`${state.poe * 100}% in 50 years`}
                curves={saCurvesWithColors}
                poe={state.poe}
                uncertainty={state.spectralUncertainty}
              />
            </div>
          </ChartContainer>
        )}
      </HazardChartsContainer>
    </>
  );
};

export default HazardCharts;
