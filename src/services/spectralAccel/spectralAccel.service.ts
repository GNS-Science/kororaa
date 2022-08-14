import * as mathjs from 'mathjs';

import { colorSet } from '../../views/hazardCharts/constants/hazardCharts';
import { hazardPageOptions } from '../../views/hazardCharts/constants/hazardPageOptions';
import { LocationData } from '../../views/hazardCharts/hazardPageReducer';
import { HazardChartsPlotsViewQuery$data } from '../../views/hazardCharts/__generated__/HazardChartsPlotsViewQuery.graphql';
import { getLatlonObject } from '../latLon/latLon.service';

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

export const getSpectralAccelUncertaintyCurves = (vs30s: number[], locs: string[], data: HazardChartsPlotsViewQuery$data, poe: number | undefined): UncertaintyChartData => {
  const saCurveGroups: UncertaintyChartData = {};

  poe &&
    vs30s.forEach((vs30) => {
      locs.forEach((locs) => {
        const key = `${vs30}m/s ${locs}`;
        if (!saCurveGroups[key]) {
          saCurveGroups[key] = {};
        }
        curveTypes.forEach((curveType) => {
          const saCurve = getSpectralAccelCurve(curveType, vs30, locs, data, poe);
          if (saCurve) {
            saCurveGroups[key][curveType] = { data: saCurve };
          }
        });
      });
    });
  return saCurveGroups;
};

export const getSpectralAccelCurve = (curveType: string, vs30: number, loc: string, data: HazardChartsPlotsViewQuery$data, poe: number) => {
  if (data.hazard_curves?.curves?.length) {
    const curves: Curves = data.hazard_curves?.curves?.filter(
      (curve) => curve !== null && curve?.vs30 === vs30 && getLatlonObject(curve?.loc) === getLatlonObject(loc) && getAggValue(curve?.agg as string) === curveType,
    );
    const saCurve = calculateSpectralAccelCurve(curves, poe);

    return saCurve;
  }
};

//TODO: add this function as utility method in toshi-nest as it is shared between Kororaa and TUI
export const calculateSpectralAccelCurve = (curves: Curves, poe: number): number[][] => {
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
        data.push([imt === 'PGA' ? 0.01 : parseFloat(getImtValue(imt as string)), result[0]]);
      } catch {
        data.push([imt === 'PGA' ? 0.01 : parseFloat(getImtValue(imt as string)), 0]);
      }
    }
  });

  return data;
};

export const addColorsToCurves = (curveGroups: UncertaintyChartData): UncertaintyChartData => {
  Object.keys(curveGroups).forEach((key, index) => {
    Object.keys(curveGroups[key]).forEach((curveType) => {
      if (curveType === 'mean') {
        curveGroups[key][curveType]['strokeColor'] = colorSet[index][0];
      } else {
        curveGroups[key][curveType]['strokeColor'] = colorSet[index][1];
      }
    });
  });

  return curveGroups;
};

const getAggValue = (agg: string): string => {
  switch (agg) {
    case 'mean':
      return 'mean';
    case '0.005':
      return 'lower2';
    case '0.1':
      return 'lower1';
    case '0.9':
      return 'upper1';
    case '0.995':
      return 'upper2';
    default:
      return '';
  }
};

const getImtValue = (imt: string): string => {
  switch (imt) {
    case 'PGA':
      return '0.01';
    case 'SA(0.1)':
      return '0.1';
    case 'SA(0.2)':
      return '0.2';
    case 'SA(0.3)':
      return '0.3';
    case 'SA(0.4)':
      return '0.4';
    case 'SA(0.5)':
      return '0.5';
    case 'SA(0.7)':
      return '0.7';
    case 'SA(1.0)':
      return '1.0';
    case 'SA(1.5)':
      return '1.5';
    case 'SA(2.0)':
      return '2.0';
    case 'SA(3.0)':
      return '3.0';
    case 'SA(4.0)':
      return '4.0';
    case 'SA(5.0)':
      return '5.0';
    case 'SA(1)':
      return '1';
    default:
      return '0.01';
  }
};
