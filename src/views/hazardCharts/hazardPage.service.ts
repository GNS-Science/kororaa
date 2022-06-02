import * as mathjs from 'mathjs';

import { HazardChartsPlotsViewQuery$data } from './__generated__/HazardChartsPlotsViewQuery.graphql';

interface XY {
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

export const getCurve = (curve: Record<string, XY[]>, imt: string): Record<string, XY[]> => {
  const newCurve: Record<string, XY[]> = {};
  newCurve[imt] = curve[imt];
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
      dataSet.push({ x: value === 'PGA' ? 0.01 : parseFloat(value), y: result[0] });
    } catch {
      dataSet.push({ x: value === 'PGA' ? 0.01 : parseFloat(value), y: 0 });
    }
  });

  return dataSet;
};

// export const getCSVdata = (PGAoptions: string[], selections: HazardCurvesSelections, data: HazardChartsMockData): string[][] => {
//   const allCurves = getCurves(data, selections, PGAoptions);
//   const CSVdata: string[][] = [];
//   CSVdata[0] = getCSVheadings(PGAoptions);

//   allCurves.PGA.map((xy) => {
//     const row: string[] = [];
//     row.push(xy.x.toExponential());

//     for (const key in allCurves) {
//       const position = CSVdata[0].findIndex((acceleration) => acceleration.includes(key));
//       const currentPoint = allCurves[key].find((curve) => curve.x === xy.x);
//       row.splice(position, 0, (currentPoint?.y as number).toExponential());
//     }

//     CSVdata.push(row);
//   });

//   return CSVdata;
// };

const getCSVheadings = (PGAoptions: string[]): string[] => {
  const headings: string[] = [];
  headings[0] = 'acceleration';
  PGAoptions.map((item) => {
    headings.push(`PoE(${item})`);
  });

  return headings;
};
