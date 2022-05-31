import * as mathjs from 'mathjs';

import { HazardChartsMockData } from '../../constants/hazardChartsMockData';
import { HazardCurvesSelections } from './hazardCharts.types';

interface XY {
  x: number;
  y: number;
}

interface HazardCurvesOptions {
  vs30: string[];
  spectralPeriod: string[];
}

export const getHazardTableOptions = (hazardChartsData: HazardChartsMockData): HazardCurvesOptions => {
  const rows = hazardChartsData.rows;

  const vs30 = new Set<string>();
  const spectralPeriod = new Set<string>();

  rows?.forEach((row) => {
    if (row) {
      row[0] !== null && vs30.add(row[2]);
      row[2] !== null && spectralPeriod.add(row[3] === '0' ? 'PGA' : `${row[3]}s`);
    }
  });

  return {
    vs30: Array.from(vs30),
    spectralPeriod: Array.from(spectralPeriod),
  };
};

const getCurve = (hazardChartsData: HazardChartsMockData, HazardCurvesSelections: HazardCurvesSelections, spectralPeriod: string): XY[] => {
  const { lat, lon, vs30 } = HazardCurvesSelections;
  const rows = hazardChartsData.rows;
  const spectralPeriodParsed = spectralPeriod === 'PGA' ? '0' : spectralPeriod.split('s')[0];

  const curve: XY[] = [];

  rows.forEach((row) => {
    if (row) {
      row[0] === lat &&
        row[1] === lon &&
        row[2] === vs30 &&
        row[3] === spectralPeriodParsed &&
        curve.push({
          x: parseFloat(row[4]),
          y: parseFloat(row[5]),
        });
    }
  });

  return curve;
};

export const getCurves = (data: HazardChartsMockData, selections: HazardCurvesSelections, spectralPeriods: string[]): Record<string, XY[]> => {
  const curves: Record<string, XY[]> = {};

  spectralPeriods.forEach((spectralPeriod) => {
    curves[spectralPeriod] = getCurve(data, selections, spectralPeriod);
  });

  return curves;
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

export const getCSVdata = (PGAoptions: string[], selections: HazardCurvesSelections, data: HazardChartsMockData): string[][] => {
  const allCurves = getCurves(data, selections, PGAoptions);
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
