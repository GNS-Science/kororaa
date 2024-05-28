import colormap from "colormap";

import { expected as calculateSpectralAccelCurveExpected } from "./testCases/calculateSpectralAccelCurveTestCase";
import { getSpectralAccelCurve, UncertaintyChartData } from "./spectralAccel.service";
import { hazardPlotsViewQueryMockData } from "./testCases/hazardPlotViewsQueryMockData";
import { addColorsToCurves } from "../../views/hazardCharts/hazardPage.service";
import { HAZARD_COLOR_MAP } from "../../utils/environmentVariables";

test("getAllOfCurveType function", () => {
  expect(getSpectralAccelCurve("mean", 400, "WLG", hazardPlotsViewQueryMockData, 0.02, "log", 50)).toEqual(
    calculateSpectralAccelCurveExpected
  );
});

test("addColorsToCurves function adds strokColor property to each curve", () => {
  const data: UncertaintyChartData = {
    testCurveGroup: {
      upper2: {
        data: [[1, 1]],
      },
      upper1: {
        data: [[1, 1]],
      },
      mean: {
        data: [[1, 1]],
      },
      lower1: {
        data: [[1, 1]],
      },
      lower2: {
        data: [[1, 1]],
      },
    },
  };

  const colors = colormap({
    colormap: HAZARD_COLOR_MAP,
    nshades: 6,
    format: "hex",
    alpha: 1,
  });

  const expected: UncertaintyChartData = {
    testCurveGroup: {
      upper2: {
        strokeColor: colors[0],
        strokeOpacity: 0.5,
        data: [[1, 1]],
      },
      upper1: {
        strokeColor: colors[0],
        strokeOpacity: 0.5,
        data: [[1, 1]],
      },
      mean: {
        strokeColor: colors[0],
        data: [[1, 1]],
      },
      lower1: {
        strokeColor: colors[0],
        strokeOpacity: 0.5,
        data: [[1, 1]],
      },
      lower2: {
        strokeColor: colors[0],
        strokeOpacity: 0.5,
        data: [[1, 1]],
      },
    },
  };
  expect(addColorsToCurves(data)).toEqual(expected);
});
