import * as mathjs from 'mathjs';
import { HazardCurvesSelections } from './hazardCharts.types';

import { HazardChartsPlotsViewQuery$data } from './__generated__/HazardChartsPlotsViewQuery.graphql';

export interface XY {
  x: number;
  y: number;
}

export const getAllCurves = (data: HazardChartsPlotsViewQuery$data): Record<string, XY[]> => {
  const curves: Record<string, XY[]> = {};

  data.hazard_curves?.curves?.forEach((currentCurve) => {
    const imt = currentCurve?.imt;
    const levels = currentCurve?.curve?.levels;
    const values = currentCurve?.curve?.values;

    if (imt && levels && values) {
      const curveName = currentCurve.imt;
      const curve: XY[] = [];

      levels.forEach((level, index) => {
        curve.push({ x: level as number, y: values[index] as number });
      });

      curves[curveName] = curve;
    }
  });

  return curves;
};

export const getCurves = (curve: Record<string, XY[]>, imts: string[]): Record<string, XY[]> => {
  const newCurve: Record<string, XY[]> = {};

  imts.forEach((imt) => {
    newCurve[imt] = curve[imt];
  });

  return newCurve;
};

export const getColor = (curve: Record<string, XY[]>): Record<string, string> => {
  const color: Record<string, string> = {};
  for (const key in curve) {
    color[key] = '#000000';
  }

  return color;
};

export const getSpectralAccelerationData = (pgaValues: string[], POE: string, filteredCurves: Record<string, XY[]>): XY[] => {
  const xValue: number = POE !== 'None' && POE === '2%' ? -Math.log(1 - 0.02) / 50 : -Math.log(1 - 0.1) / 50;
  const dataSet: XY[] = [];

  pgaValues.forEach((value) => {
    try {
      let p1: number[] = [];
      let p2: number[] = [];
      const p3 = [Math.log(2e-3), Math.log(xValue)];
      const p4 = [Math.log(10), Math.log(xValue)];

      filteredCurves[value].find((xy, i) => {
        if (xy.y <= xValue) {
          p1 = [Math.log(xy.x), Math.log(xy.y)];
          p2 = [Math.log(filteredCurves[value][i - 1].x), Math.log(filteredCurves[value][i - 1].y)];
          return true;
        }
      });
      const point = mathjs.intersect(p1, p2, p3, p4);
      const result = [Math.exp(point[0] as number), mathjs.exp(mathjs.exp(point[1] as number))];
      dataSet.push({ x: value === 'PGA' ? 0.01 : parseFloat(getImtValue(value)), y: result[0] });
    } catch {
      dataSet.push({ x: value === 'PGA' ? 0.01 : parseFloat(getImtValue(value)), y: 0 });
    }
  });

  return dataSet;
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

export const getCSVdata = (PGAoptions: string[], selections: HazardCurvesSelections, data: HazardChartsPlotsViewQuery$data): string[][] => {
  const allCurves = getAllCurves(data);
  const CSVdata: string[][] = [];
  CSVdata[0] = getCSVheadings(PGAoptions);

  allCurves.PGA.map((xy) => {
    const row: string[] = [];
    row.push(xy.x.toExponential());

    for (const key in allCurves) {
      const position = CSVdata[0].findIndex((acceleration) => acceleration.includes(key));
      const currentPoint = allCurves[key].find((curve) => curve.x === xy.x);
      row.splice(position, 0, (currentPoint?.y as number).toExponential());
    }

    CSVdata.push(row);
  });

  return CSVdata;
};

const getCSVheadings = (PGAoptions: string[]): string[] => {
  const headings: string[] = [];
  headings[0] = 'acceleration';
  PGAoptions.map((item) => {
    headings.push(`PoE(${item})`);
  });

  return headings;
};
