import { roundLatLon } from '../../services/latLon/latLon.service';
import { HAZARD_COLOR_LIMIT } from '../../utils/environmentVariables';
import { tooManyCurves } from './constants/hazardCharts';
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

export const getCSVData = (data: HazardChartsPlotsViewQuery$data): string[][] => {
  const CSVData = data.hazard_curves?.curves?.map((curve) => {
    const latLonArray = curve?.loc?.split('~');
    if (latLonArray && curve?.curve?.values && curve?.vs30) {
      const curveCSVData = [latLonArray[0], latLonArray[1], curve?.vs30.toString(), curve?.imt, curve?.agg];
      curve?.curve?.values.forEach((value) => {
        if (value) {
          curveCSVData.push(value.toString());
        }
      });
      return curveCSVData;
    }
  });
  if (CSVData) {
    const headings = ['lat', 'lon', 'vs30', 'period', 'statistic'];
    if (data && data?.hazard_curves && data?.hazard_curves?.curves && data?.hazard_curves?.curves[0]?.curve?.levels) {
      data?.hazard_curves?.curves[0]?.curve?.levels.forEach((level) => {
        if (level) {
          headings.push(level?.toString());
        }
      });
    }
    CSVData.unshift(headings);
  }
  return CSVData as string[][];
};

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

export const validateCurveGroupLength = (locations: string[], locationData: LocationData[], vs30s: number[], imts: string[]) => {
  const length = (locations.length + locationData.length) * vs30s.length * imts.length;
  if (length > HAZARD_COLOR_LIMIT) {
    throw tooManyCurves;
  }
};
