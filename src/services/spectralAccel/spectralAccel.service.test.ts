import { expected as calculateSpectralAccelCurveExpected } from './testCases/calculateSpectralAccelCurveTestCase';
import { addColorsToCurves, getAllOfCurveType, UncertaintyChartData } from './spectralAccel.service';
import { hazardPlotsViewQueryMockData } from './testCases/hazardPlotViewsQueryMockData';

test('getAllOfCurveType function', () => {
  expect(getAllOfCurveType('mean', 400, 'WLG', hazardPlotsViewQueryMockData, 0.02)).toEqual(calculateSpectralAccelCurveExpected);
});

test('addColorsToCurves function adds strokColor property to each curve', () => {
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

  const expected: UncertaintyChartData = {
    testCurveGroup: {
      upper2: {
        strokeColor: '#6baed6',
        data: [[1, 1]],
      },
      upper1: {
        strokeColor: '#6baed6',
        data: [[1, 1]],
      },
      mean: {
        strokeColor: '#08519c',
        data: [[1, 1]],
      },
      lower1: {
        strokeColor: '#6baed6',
        data: [[1, 1]],
      },
      lower2: {
        strokeColor: '#6baed6',
        data: [[1, 1]],
      },
    },
  };
  expect(addColorsToCurves(data)).toEqual(expected);
});
