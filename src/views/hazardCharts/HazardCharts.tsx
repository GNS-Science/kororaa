import React, { useMemo } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { GroupCurveChartResponsive } from "@gns-science/toshi-nest";

import { HazardChartsPlotsViewQuery$data } from "./__generated__/HazardChartsPlotsViewQuery.graphql";
import {
  addDashArrayToCurves,
  getAllCurveGroups,
  getFilteredCurveGroups,
  getLocationList,
  getYScale,
  sortCurveGroups,
  addColorsToCurves,
} from "./hazardPage.service";
import { HazardPageState } from "./hazardPageReducer";
import {
  addColorsToUHSCurves,
  getSpectralAccelUncertaintyCurves,
  sortSACurveGroups,
} from "../../services/spectralAccel/spectralAccel.service";
import HazardChartsSettings from "./HazardChartsSettings";
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
} from "../../utils/environmentVariables";

interface HazardChartsProps {
  data: HazardChartsPlotsViewQuery$data;
  state: HazardPageState;
  dispatch: React.Dispatch<Partial<HazardPageState>>;
}

const HazardCharts: React.FC<HazardChartsProps> = ({ data, state, dispatch }: HazardChartsProps) => {
  const locationList = useMemo(() => getLocationList(data), [data]);
  const allCurveGroups = useMemo(() => getAllCurveGroups(data), [data]);
  const filteredCurveGroups = useMemo(
    () => getFilteredCurveGroups(allCurveGroups, state.imts),
    [allCurveGroups, state.imts],
  );
  const curveGroupWithColors = useMemo(() => addColorsToCurves(filteredCurveGroups), [filteredCurveGroups]);
  const sortedCurveGroup = useMemo(() => sortCurveGroups(curveGroupWithColors), [curveGroupWithColors]);
  const saCurvesUncertainty = useMemo(
    () =>
      getSpectralAccelUncertaintyCurves(
        state.vs30s,
        locationList,
        data,
        state.poe,
        state.spectraXScale,
        state.timePeriod,
      ),
    [locationList, state, data],
  );
  const saCurvesWithColors = useMemo(
    () => addColorsToUHSCurves(saCurvesUncertainty, curveGroupWithColors),
    [saCurvesUncertainty, curveGroupWithColors],
  );

  addDashArrayToCurves(sortedCurveGroup);

  const sortedSaCurves = useMemo(() => sortSACurveGroups(saCurvesWithColors), [saCurvesWithColors]);

  const spectralYLimits = useMemo(() => {
    if (SA_GMAX === "auto") {
      const yScale = getYScale(saCurvesWithColors, SA_GMIN);
      if (isNaN(yScale[1])) return [SA_GMIN, 0.1];
      return yScale;
    } else {
      return [SA_GMIN, SA_GMAX];
    }
  }, [saCurvesWithColors]);

  const HazardChartsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: 20,
    width: "100%",
    height: "calc(50vw * 0.75)",
    border: "solid black 1px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      height: "calc(100vw * 0.75 * 2)",
    },
  }));

  const ChartContainer = styled(Box)(({ theme }) => ({
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }));

  return (
    <>
      <HazardChartsContainer data-testid="hazardChartsContainer">
        <ChartContainer>
          <HazardChartsSettings data={data} spectral={false} state={state} dispatch={dispatch} />
          <div id="hazardChart">
            <GroupCurveChartResponsive
              scaleType={state.hazardXScale}
              yScaleType={"log"}
              xLabel="Acceleration (g)"
              yLabel="Annual Probability of Exceedance"
              xLimits={
                state.hazardXScale === "linear" ? [HAZARD_GMIN, HAZARD_GMAX] : [HAZARD_GMIN_LOG, HAZARD_GMAX_LOG]
              }
              yLimits={[HAZARD_POEMIN, HAZARD_POEMAX]}
              tooltip={true}
              crosshair={true}
              heading="Hazard Curve"
              curves={sortedCurveGroup}
              poe={state.poe}
              uncertainty={state.hazardUncertainty}
              timePeriod={state.timePeriod}
            />
          </div>
        </ChartContainer>
        {state.poe && (
          <ChartContainer>
            <HazardChartsSettings data={data} spectral={true} state={state} dispatch={dispatch} />
            <div id="spectraChart">
              <GroupCurveChartResponsive
                testId="sa-chart"
                spectral={true}
                scaleType={state.spectraXScale}
                yScaleType={"linear"}
                xLabel="Period (s)"
                yLabel="Acceleration (g)"
                xLimits={
                  state.spectraXScale === "linear" ? [SA_PERIODMIN, SA_PERIODMAX] : [SA_PERIODMIN_LOG, SA_PERIODMAX_LOG]
                }
                yLimits={spectralYLimits}
                tooltip={true}
                crosshair={true}
                heading="Uniform Hazard Spectrum"
                subHeading={`${(state.poe * 100).toFixed(1)}% in ${state.timePeriod} years`}
                curves={sortedSaCurves}
                poe={state.poe}
                uncertainty={state.spectralUncertainty}
                timePeriod={state.timePeriod}
              />
            </div>
          </ChartContainer>
        )}
      </HazardChartsContainer>
    </>
  );
};

export default HazardCharts;
