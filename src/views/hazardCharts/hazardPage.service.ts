import { roundLatLon } from '../../services/latLon/latLon.service';
import { colorSet } from './constants/hazardCharts';
import { hazardPageLocations } from './constants/hazardPageOptions';
import { LocationData } from './hazardPageReducer';

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
    const location = data.hazard_curves?.locations?.filter((location) => location?.code === currentCurve?.loc);

    if (imt && levels && values && agg) {
      const curveGroupKey = `${location && location[0]?.key ? location[0]?.key : roundLatLon(currentCurve?.loc)} ${currentCurve.imt} ${currentCurve.vs30}m/s `;
      const curveName = getAggValue(agg);

      const curve: number[][] = [];

      levels.forEach((level, index) => {
        curve.push([level as number, values[index] as number]);
      });

      if (!curveGroups[curveGroupKey]) {
        curveGroups[curveGroupKey] = { curveName: { data: curve } };
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

//TODO: CSV data feature will be reindated in a future feature
// export const getCSVdata = (PGAoptions: string[], data: HazardChartsPlotsViewQuery$data): string[][] => {
//   const allCurves = getAllCurves(data);
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

// const getCSVheadings = (PGAoptions: string[]): string[] => {
//   const headings: string[] = [];
//   headings[0] = 'acceleration';
//   PGAoptions.map((item) => {
//     headings.push(`PoE(${item})`);
//   });

//   return headings;
// };

export const convertLocationsToIDs = (locations: string[]): string[] => {
  const locationIDs: string[] = [];

  locations.forEach((currentLocation) => {
    const locationObject = hazardPageLocations.find((location) => currentLocation === location.name);
    locationObject?.id && locationIDs.push(locationObject.id);
  });

  return locationIDs;
};

export const filterLocationNames = (locations: LocationData[]): string[] => {
  const namedLocations = locations.filter((location) => location.name);
  const locationNames: string[] = [];
  namedLocations.forEach((location) => {
    location.name && locationNames.push(location.name);
  });
  return locationNames;
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

export const getLocationList = (data: HazardChartsPlotsViewQuery$data): string[] => {
  const locationList = new Set<string>();
  data.hazard_curves?.curves?.forEach((curve) => {
    curve?.loc && locationList.add(curve.loc);
  });

  return Array.from(locationList);
};
