import * as mathjs from 'mathjs';

import { hazardPageOptions } from '../../views/hazardCharts/constants/hazardPageOptions';
import { HazardChartsPlotsViewQuery$data } from '../../views/hazardCharts/__generated__/HazardChartsPlotsViewQuery.graphql';
import { getLatLonFromLocationKey, roundLatLon } from '../latLon/latLon.service';
import { getColor } from '../../utils/colorUtils';
import { SA_LOG_PGA_SUBSTITUTE } from '../../utils/environmentVariables';

export interface UncertaintyCurve {
  strokeSize?: number;
  strokeOpacity?: number;
  strokeColor?: string;
  strokeStyle?: string;
  data: UncertaintyDatum[];
}

export type UncertaintyChartCurveGroup = Record<string, UncertaintyCurve>;
export type UncertaintyChartData = Record<string, UncertaintyChartCurveGroup>;
export type UncertaintyDatum = number[];

export type HazardCurves = NonNullable<HazardChartsPlotsViewQuery$data['hazard_curves']>;
export type Curves = NonNullable<HazardCurves['curves']>;

const curveTypes = ['upper2', 'upper1', 'mean', 'lower1', 'lower2'];

export const getSpectralAccelUncertaintyCurves = (vs30s: number[], locs: string[], data: HazardChartsPlotsViewQuery$data, poe: number | undefined, scaleType: string): UncertaintyChartData => {
  const saCurveGroups: UncertaintyChartData = {};
  poe &&
    vs30s.forEach((vs30) => {
      locs.forEach((loc) => {
        const location = data.hazard_curves?.locations?.filter((location) => location?.code === loc);
        const key = `${vs30}m/s ${location && location[0]?.key ? location[0]?.key : roundLatLon(loc)}`;
        if (!saCurveGroups[key]) {
          saCurveGroups[key] = {};
        }
        curveTypes.forEach((curveType) => {
          const saCurve = getSpectralAccelCurve(curveType, vs30, loc, data, poe, scaleType);
          if (saCurve) {
            saCurveGroups[key][curveType] = { data: saCurve };
          }
        });
      });
    });
  return saCurveGroups;
};

export const getSpectralAccelCurve = (curveType: string, vs30: number, loc: string, data: HazardChartsPlotsViewQuery$data, poe: number, scaleType: string) => {
  if (data.hazard_curves?.curves?.length) {
    const curves: Curves = data.hazard_curves?.curves?.filter((curve) => curve !== null && curve?.vs30 === vs30 && curve?.loc === loc && convertAgg(curve?.agg as string) === curveType);
    const saCurve = calculateSpectralAccelCurve(curves, poe, scaleType);
    const sortedCurve = saCurve.sort((a, b) => a[0] - b[0]);
    return sortedCurve;
  }
};

//TODO: add this function as utility method in toshi-nest as it is shared between Kororaa and TUI
export const calculateSpectralAccelCurve = (curves: Curves, poe: number, scaleType: string): number[][] => {
  const data: number[][] = [];
  const yValue: number = -Math.log(1 - poe) / 50;

  curves.forEach((currentCurve) => {
    if (currentCurve) {
      const imt = hazardPageOptions.imts.find((imt) => currentCurve.imt === imt);
      try {
        let p1: number[] = [];
        let p2: number[] = [];
        const p3 = [Math.log(2e-3), Math.log(yValue)];
        const p4 = [Math.log(10), Math.log(yValue)];

        const xArray = currentCurve?.curve?.levels ?? [];
        const yArray = currentCurve?.curve?.values ?? [];

        xArray.length &&
          yArray.length &&
          yArray.find((pointY, i) => {
            if ((pointY as number) <= yValue) {
              p1 = [Math.log(xArray[i] as number), Math.log(pointY as number)];
              p2 = [Math.log(xArray[i - 1] as number), Math.log(yArray[i - 1] as number)];
              return true;
            }
          });
        const point = mathjs.intersect(p1, p2, p3, p4);
        const result = [Math.exp(point[0] as number), mathjs.exp(mathjs.exp(point[1] as number))];
        data.push([imt === 'PGA' && scaleType === 'log' ? SA_LOG_PGA_SUBSTITUTE : parseFloat(getImtValue(imt as string, scaleType === 'linear')), result[0]]);
      } catch {
        data.push([imt === 'PGA' && scaleType === 'log' ? SA_LOG_PGA_SUBSTITUTE : parseFloat(getImtValue(imt as string, scaleType === 'linear')), 0]);
      }
    }
  });

  return data;
};

export const addColorsToCurves = (curveGroups: UncertaintyChartData): UncertaintyChartData => {
  const curveGroupLength = Object.keys(curveGroups).length;

  Object.keys(curveGroups).forEach((key, index) => {
    Object.keys(curveGroups[key]).forEach((curveType) => {
      if (curveType === 'mean') {
        curveGroups[key][curveType]['strokeColor'] = getColor(curveGroupLength, index);
      } else {
        curveGroups[key][curveType]['strokeColor'] = getColor(curveGroupLength, index);
        curveGroups[key][curveType]['strokeOpacity'] = 0.5;
      }
    });
  });

  return curveGroups;
};

export const tryParseLatLon = (loc: string): string[] => {
  if (loc.split(',').length === 1) {
    return getLatLonFromLocationKey(loc).split(',');
  } else return loc.split(',');
};

export const getSpectralCSVData = (curves: UncertaintyChartData, poe: number | undefined): string[][] => {
  const saHeaderArray = [
    'lat',
    'lon',
    'vs30',
    'PoE (% in 50 years)',
    'statistic',
    'PGA',
    'SA(0.1)',
    'SA(0.2)',
    'SA(0.3)',
    'SA(0.4)',
    'SA(0.5)',
    'SA(0.7)',
    'SA(1.0)',
    'SA(1.5)',
    'SA(2.0)',
    'SA(3.0)',
    'SA(4.0)',
    'SA(5.0)',
  ];
  const csvData: string[][] = [];
  Object.fromEntries(
    Object.entries(curves).map((curve) => {
      const vs30 = curve[0].split(' ')[0].replace('m/s', '');
      const location = curve[0].split(' ').length === 3 ? curve[0].split(' ')[1] + curve[0].split(' ')[2] : curve[0].split(' ')[1];
      const latLon = tryParseLatLon(location);
      Object.entries(curve[1])?.forEach((value) => {
        const curveCSVData = [latLon[0], latLon[1], vs30, (poe && poe * 100)?.toString() || ''];
        curveCSVData.push(convertAgg(value[0]));
        if (value) {
          value[1].data.forEach((point) => {
            curveCSVData.push(point[1].toFixed(2).toString());
          });
        }
        csvData.push(curveCSVData);
      });
      return csvData;
    }),
  );
  csvData.unshift(saHeaderArray);
  return csvData;
};

interface Map {
  [key: string]: string;
}

export const convertAgg = (agg: string): string => {
  const aggDict: Map = {
    mean: 'mean',
    lower2: '0.005',
    lower1: '0.1',
    upper1: '0.9',
    upper2: '0.995',
    '0.005': 'lower2',
    '0.1': 'lower1',
    '0.9': 'upper1',
    '0.995': 'upper2',
  };
  return aggDict[agg];
};

const getImtValue = (imt: string, linear: boolean): string => {
  if (imt === 'PGA') {
    return linear ? '0' : SA_LOG_PGA_SUBSTITUTE.toString();
  }
  return imt.replace('SA(', '').replace(')', '');
};
