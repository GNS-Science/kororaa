import React from "react";
import { graphql } from "react-relay";
import { useLazyLoadQuery } from "react-relay";
import { Alert, Box, GlobalStyles } from "@mui/material";

import { HazardChartsPlotsViewQuery } from "./__generated__/HazardChartsPlotsViewQuery.graphql";
import { hazardPageOptions } from "./constants/hazardPageOptions";
import HazardCharts from "./HazardCharts";
import { HazardPageState } from "./hazardPageReducer";
import { getLatLonArray } from "../../services/latLon/latLon.service";
import { RESOLUTION, HAZARD_MODEL, MEAN, UPPER1, UPPER2, LOWER1, LOWER2 } from "../../utils/environmentVariables";

interface HazardChartsPlotsViewProps {
  state: HazardPageState;
  dispatch: React.Dispatch<Partial<HazardPageState>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  printTargetRef: React.RefObject<any>;
}

const HazardChartsPlotsView: React.FC<HazardChartsPlotsViewProps> = ({
  state,
  dispatch,
  printTargetRef,
}: HazardChartsPlotsViewProps) => {
  const data = useLazyLoadQuery<HazardChartsPlotsViewQuery>(hazardChartsPlotsViewQuery, {
    hazard_model: HAZARD_MODEL,
    locs: getLatLonArray(state.locationData),
    vs30s: state.vs30s,
    imts: hazardPageOptions.imts,
    aggs: [MEAN, LOWER2, UPPER2, LOWER1, UPPER1],
    resolution: RESOLUTION,
  });

  const missingCurves = data.hazard_curves?.locations?.filter((location) => {
    if (data.hazard_curves?.curves?.some((curve) => curve && curve.loc === location?.code)) {
      return null;
    } else {
      return location;
    }
  });

  const missingCurvesWarning = missingCurves?.map((loc) => loc?.lat + ", " + loc?.lon).join("; ");
  return (
    <Box role="plotsView" sx={{ width: "100%" }}>
      <Box sx={{ padding: "10px", marginBottom: "10px" }}>
        {missingCurves && missingCurves.length > 0 && (
          <Alert severity="warning">
            Location{missingCurves.length > 1 && "s"} not in data: {missingCurvesWarning}
          </Alert>
        )}
      </Box>
      <div ref={printTargetRef}>
        <GlobalStyles styles={{ ".visx-legend-shape svg g line": { strokeWidth: 4 } }} />
        <HazardCharts data={data} state={state} dispatch={dispatch} />
      </div>
    </Box>
  );
};

export default HazardChartsPlotsView;

const hazardChartsPlotsViewQuery = graphql`
  query HazardChartsPlotsViewQuery(
    $hazard_model: String
    $vs30s: [Int]
    $imts: [String]
    $locs: [String]
    $aggs: [String]
    $resolution: Float
  ) {
    hazard_curves: HAZARD_hazard_curves(
      hazard_model: $hazard_model
      vs30s: $vs30s
      imts: $imts
      locs: $locs
      aggs: $aggs
      resolution: $resolution
    ) {
      ok
      locations {
        lat
        lon
        resolution
        code
        name
        key
      }
      curves {
        hazard_model
        imt
        loc
        agg
        vs30
        curve {
          levels
          values
        }
      }
    }
  }
`;
