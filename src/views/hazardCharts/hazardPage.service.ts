import * as mathjs from 'mathjs';
import { colorSet } from './constants/hazardCharts';
import { hazardPageLocations, hazardPageOptions } from './constants/hazardPageOptions';

import { HazardChartsPlotsViewQuery$data } from './__generated__/HazardChartsPlotsViewQuery.graphql';

export interface XY {
  x: number;
  y: number;
}

export interface HazardUncertaintyChart {
  strokeSize?: number;
  strokeOpacity?: number;
  strokeColor?: string;
  strokeStyle?: string;
  data: UncertaintyDatum[];
}

export type HazardUncertaintyChartCurveGroup = Record<string, HazardUncertaintyChart>;

export type HazardUncertaintyChartData = Record<string, HazardUncertaintyChartCurveGroup>;

export type UncertaintyDatum = number[];

export const getAllCurveGroups = (data: HazardChartsPlotsViewQuery$data): HazardUncertaintyChartData => {
  const curveGroups: HazardUncertaintyChartData = {};

  data.hazard_curves?.curves?.forEach((currentCurve) => {
    const imt = currentCurve?.imt;
    const levels = currentCurve?.curve?.levels;
    const values = currentCurve?.curve?.values;
    const agg = currentCurve?.agg;

    if (imt && levels && values && agg) {
      const curveGroupKey = `${currentCurve.vs30}m/s ${currentCurve.loc} ${currentCurve.imt}`;
      const curveName = getAggValue(agg);

      const curve: number[][] = [];

      levels.forEach((level, index) => {
        curve.push([level as number, values[index] as number]);
      });

      if (!curveGroups[curveGroupKey]) {
        curveGroups[curveGroupKey] = { mean: { data: curve } };
      } else {
        curveGroups[curveGroupKey][curveName] = { data: curve };
      }
    }
  });

  return curveGroups;
};

export const getFilteredCurveGroups = (curveGroups: HazardUncertaintyChartData, imts: string[]): HazardUncertaintyChartData => {
  const filteredCurveGroups: HazardUncertaintyChartData = {};

  imts.forEach((imt) => {
    for (const key in curveGroups) {
      if (key.includes(imt)) {
        filteredCurveGroups[key] = curveGroups[key];
      }
    }
  });

  return filteredCurveGroups;
};

export const addCurveGroupColors = (curveGroups: HazardUncertaintyChartData) => {
  Object.keys(curveGroups).forEach((key, index) => {
    Object.keys(curveGroups[key]).forEach((curveName) => {
      if (curveName === 'mean') {
        curveGroups[key][curveName]['strokeColor'] = colorSet[index][0];
      } else {
        curveGroups[key][curveName]['strokeColor'] = colorSet[index][0];
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

export const getSpectralAccelerationCurvesUncertainty = (curveGroups: HazardUncertaintyChartData, vs30s: number[], locations: string[], poe: number | undefined): Record<string, XY[]> => {
  const meanCurves: Record<string, XY[]> = {};

  Object.keys(curveGroups).forEach((key) => {
    const curve: XY[] = [];
    curveGroups[key]['mean'].data.forEach((point) => {
      curve.push({ x: point[0], y: point[1] });
    });
    meanCurves[key] = curve;
  });

  const saCurves = getSpectralAccelerationCurves(meanCurves, vs30s, locations, poe);

  return saCurves;
};

export const getSpectralAccelerationCurves = (allCurves: Record<string, XY[]>, vs30s: number[], locations: string[], poe: number | undefined): Record<string, XY[]> => {
  const curves: Record<string, XY[]> = {};

  poe &&
    vs30s.forEach((vs30) => {
      locations.forEach((location) => {
        const curvesArray: Record<string, XY[]> = {};

        for (const key in allCurves) {
          if (key.includes(vs30.toString()) && key.includes(location)) {
            curvesArray[key] = allCurves[key];
          }
        }

        const curve = getSpectralAccelerationData(hazardPageOptions.imts, poe, curvesArray);
        curves[`${vs30}m/s ${location}`] = curve;
      });
    });

  return curves;
};

export const getSpectralAccelerationData = (imtValues: string[], poe: number | undefined, filteredCurves: Record<string, XY[]>): XY[] => {
  const dataSet: XY[] = [];
  if (poe) {
    const xValue: number = -Math.log(1 - poe) / 50;

    for (const key in filteredCurves) {
      const imt = imtValues.find((imt) => key.includes(imt));

      try {
        let p1: number[] = [];
        let p2: number[] = [];
        const p3 = [Math.log(2e-3), Math.log(xValue)];
        const p4 = [Math.log(10), Math.log(xValue)];

        filteredCurves[key].find((xy, i) => {
          if (xy.y <= xValue) {
            p1 = [Math.log(xy.x), Math.log(xy.y)];
            p2 = [Math.log(filteredCurves[key][i - 1].x), Math.log(filteredCurves[key][i - 1].y)];
            return true;
          }
        });
        const point = mathjs.intersect(p1, p2, p3, p4);
        const result = [Math.exp(point[0] as number), mathjs.exp(mathjs.exp(point[1] as number))];
        dataSet.push({ x: imt === 'PGA' ? 0.01 : parseFloat(getImtValue(imt as string)), y: result[0] });
      } catch {
        dataSet.push({ x: imt === 'PGA' ? 0.01 : parseFloat(getImtValue(imt as string)), y: 0 });
      }
    }
  }
  return dataSet;
};

export const getCSVdata = (PGAoptions: string[], data: HazardChartsPlotsViewQuery$data): string[][] => {
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

export const convertLocationsToIDs = (locations: string[]): string[] => {
  const locationIDs: string[] = [];

  locations.forEach((currentLocation) => {
    const locationObject = hazardPageLocations.find((location) => currentLocation === location.name);
    locationObject?.id && locationIDs.push(locationObject.id);
  });

  return locationIDs;
};

export const convertIDsToLocations = (IDs: string[]): string[] => {
  const locationNames: string[] = [];

  IDs.forEach((currentID) => {
    const locationObject = hazardPageLocations.find((location) => currentID === location.id);
    locationObject?.name && locationNames.push(locationObject.name);
  });

  return locationNames;
};

export const getPoeInputDisplay = (poe: number | undefined): string => {
  return poe ? `${poe * 100}` : ' ';
};

export const validatePoeValue = (poe: string) => {
  if (poe.length === 0 || poe === ' ') {
    return;
  }

  const percentage = Number(poe);

  if (percentage >= 100 || percentage <= 0) {
    throw 'Out of range 0-100';
  } else if (!percentage) {
    throw 'Not a number';
  }
};

export const numbersToStrings = (values: number[]) => {
  return values.map((value) => value.toString());
};

export const stringsToNumbers = (values: string[]) => {
  return values.map((value) => Number(value));
};

// For Hazard Charts without uncertainty
export const getAllCurves = (data: HazardChartsPlotsViewQuery$data): Record<string, XY[]> => {
  const curves: Record<string, XY[]> = {};

  data.hazard_curves?.curves?.forEach((currentCurve) => {
    const imt = currentCurve?.imt;
    const levels = currentCurve?.curve?.levels;
    const values = currentCurve?.curve?.values;

    if (imt && levels && values) {
      const curveName = `${currentCurve.vs30}m/s ${currentCurve.loc} ${currentCurve.imt} ${currentCurve.agg}`;
      const curve: XY[] = [];

      levels.forEach((level, index) => {
        curve.push({ x: level as number, y: values[index] as number });
      });

      curves[curveName] = curve;
    }
  });

  return curves;
};

export const getFilteredCurves = (curves: Record<string, XY[]>, imts: string[]): Record<string, XY[]> => {
  const newCurves: Record<string, XY[]> = {};

  imts.forEach((imt) => {
    for (const key in curves) {
      if (key.includes(imt)) {
        newCurves[key] = curves[key];
      }
    }
  });

  return newCurves;
};

export const getColors = (curve: Record<string, XY[]>): Record<string, string> => {
  const colors: Record<string, string> = {};
  for (const key in curve) {
    colors[key] = '#000000';
  }

  return colors;
};
