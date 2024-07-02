import { roundLatLon } from "../../services/latLon/latLon.service";
import { HAZARD_COLOR_LIMIT, HAZARD_MODEL } from "../../utils/environmentVariables";

import { tooManyCurves, noLocations, noImts, noVs30s, tooManyImts } from "./constants/hazardCharts";
import { hazardPageLocations } from "./constants/hazardPageOptions";
import { LocationData } from "./hazardPageReducer";
import { convertAgg } from "../../services/spectralAccel/spectralAccel.service";

import { HazardChartsPlotsViewQuery$data } from "./__generated__/HazardChartsPlotsViewQuery.graphql";

import { getColor } from "../../utils/colorUtils";
export interface XY {
  x: number;
  y: number;
}

export interface HazardUncertaintyChart {
  strokeSize?: number;
  strokeOpacity?: number;
  strokeColor?: string;
  strokeStyle?: string;
  strokeDashArray?: string;
  data: UncertaintyDatum[];
}

export interface HazardCurve {
  readonly hazard_model: string | null;
  readonly imt: string | null;
  readonly loc: string | null;
  readonly agg: string | null;
  readonly vs30: number | null;
  readonly curve: {
    readonly levels: ReadonlyArray<number | null> | null;
    readonly values: ReadonlyArray<number | null> | null;
  } | null;
}

export type HazardUncertaintyChartCurveGroup = Record<string, HazardUncertaintyChart>;

export type HazardUncertaintyChartData = Record<string, HazardUncertaintyChartCurveGroup>;

export type UncertaintyDatum = number[];

export interface CurveKeyObject {
  key: string;
  vs30: string;
  imt: string;
  location: string;
}

export const getAllCurveGroups = (data: HazardChartsPlotsViewQuery$data): HazardUncertaintyChartData => {
  const curveGroups: HazardUncertaintyChartData = {};

  data.hazard_curves?.curves?.forEach((currentCurve) => {
    const imt = currentCurve?.imt;
    const levels = currentCurve?.curve?.levels;
    const values = currentCurve?.curve?.values;
    const agg = currentCurve?.agg;
    const location = data.hazard_curves?.locations?.filter((location) => location?.code === currentCurve?.loc);

    if (imt && levels && values && agg) {
      const curveGroupKey = `${currentCurve.vs30}m/s ${currentCurve.imt} ${
        location && location[0]?.key ? location[0]?.name : roundLatLon(currentCurve?.loc || "")
      } `;
      const curveName = convertAgg(agg);

      const curve: number[][] = [];

      levels.forEach((level, index) => {
        curve.push([level as number, values[index] as number]);
      });

      if (!curveGroups[curveGroupKey]) {
        curveGroups[curveGroupKey] = {};
        curveGroups[curveGroupKey][curveName] = { data: curve };
      } else {
        curveGroups[curveGroupKey][curveName] = { data: curve };
      }
    }
  });

  return curveGroups;
};

export const getFilteredCurveGroups = (
  curveGroups: HazardUncertaintyChartData,
  imts: string[],
): HazardUncertaintyChartData => {
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

export const getHazardCSVData = (data: HazardChartsPlotsViewQuery$data): string[][] => {
  const regExp = /\(([^)]+)\)/g;
  const hazardCurves: HazardCurve[] = [];
  //create mutable copy of hazard curves
  data.hazard_curves?.curves &&
    data.hazard_curves?.curves.forEach((val) => {
      if (val?.hazard_model) {
        hazardCurves.push(Object.assign({}, val) as HazardCurve);
      }
    });
  //separate hazard curves by location
  const hazardCurvesByLoc: HazardCurve[][] = [];
  hazardCurves.forEach((curve) => {
    const latLon = curve?.loc;
    if (latLon) {
      const index = hazardCurvesByLoc.findIndex((curve) => curve[0]?.loc === latLon);
      if (index === -1) {
        hazardCurvesByLoc.push([curve]);
      } else {
        hazardCurvesByLoc[index].push(curve);
      }
    }
  });
  //sort hazard curves by imt, parsing imts number value to sort the 10.0 properly
  const sortedHazardCurves: HazardCurve[] = hazardCurvesByLoc
    .map((a) =>
      a.sort((a, b) => {
        if (a?.imt && b?.imt) {
          const aMatch = a?.imt.match(regExp);
          const bMatch = b?.imt.match(regExp);
          if (aMatch && bMatch) {
            const aMatchNumber = parseFloat(aMatch[0].replace(/[()]/g, ""));
            const bMatchNumber = parseFloat(bMatch[0].replace(/[()]/g, ""));
            if (aMatchNumber && bMatchNumber) {
              return aMatchNumber - bMatchNumber;
            }
          }
        }
        return 0;
      }),
    )
    .flat();

  const datetimeAndVersion = [
    `date-time: ${new Date().toLocaleString("en-GB", { timeZone: "UTC" })}, (UTC)`,
    `NSHM model version: ${HAZARD_MODEL}`,
  ];
  const CSVData = sortedHazardCurves.map((curve) => {
    const latLonArray = curve?.loc?.split("~");
    if (latLonArray && curve?.curve?.values && curve?.vs30) {
      const curveCSVData = [latLonArray[0], latLonArray[1], curve?.vs30.toString(), curve?.imt, curve?.agg];
      curve?.curve?.values.forEach((value) => {
        if (value) {
          curveCSVData.push(value.toFixed(6).toString());
        }
      });
      return curveCSVData;
    }
  });
  if (CSVData) {
    const headings = ["lat", "lon", "vs30", "period", "statistic"];
    if (data && data?.hazard_curves && data?.hazard_curves?.curves && data?.hazard_curves?.curves[0]?.curve?.levels) {
      data?.hazard_curves?.curves[0]?.curve?.levels.forEach((level) => {
        if (level) {
          headings.push(`annual poe - ${level?.toString()} g`);
        }
      });
    }
    CSVData.unshift(headings);
    CSVData.unshift(datetimeAndVersion);
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
  return poe ? `${poe * 100}` : " ";
};

export const validatePoeValue = (poe: string, setPoeError: React.Dispatch<React.SetStateAction<boolean>>) => {
  if (poe.length === 0 || poe === " ") {
    return;
  }

  const percentage = Number(poe);

  if (percentage >= 100 || percentage <= 0) {
    throw "Out of range 0-100";
  } else if (!percentage) {
    throw "Not a number";
  } else {
    setPoeError(false);
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

export const validateCurveGroupLength = (locationData: LocationData[], vs30s: number[], imts: string[]) => {
  const length = locationData.length * vs30s.length * imts.length;
  if (length > HAZARD_COLOR_LIMIT) {
    throw tooManyCurves;
  }
};

export const getYScale = (data: HazardUncertaintyChartData, min: number): number[] => {
  const largestY: number[] = [];

  Object.keys(data).forEach((key) => {
    Object.keys(data[key]).forEach((curveType) => {
      const yArray = Array.from(data[key][curveType].data, (x) => x[1]);
      largestY.push(Math.max(...yArray));
    });
  });
  const yMax = 1.2 * Math.max(...largestY);
  return [min, yMax];
};

export const sortCurveGroups = (curveGroups: HazardUncertaintyChartData): HazardUncertaintyChartData => {
  const sortedCurves: HazardUncertaintyChartData = {};

  const curveKeyObjects = Object.keys(curveGroups).map((key) => {
    const keyArray = key.split(" ");
    const keyObject = {
      key: key,
      vs30: keyArray[0],
      imt: keyArray[1],
      location: keyArray.length === 3 ? keyArray[2] : `${keyArray[2]} ${keyArray[3]}`,
    };
    return keyObject;
  });

  const sortedCurveKeys = curveKeyObjects.sort((a, b) => {
    return a.location.localeCompare(b.location) || a.vs30.localeCompare(b.vs30) || a.imt.localeCompare(b.imt);
  });

  const sortedCurveKeyStrings = sortedCurveKeys.map((key) => key.key);

  sortedCurveKeyStrings.forEach(function (key) {
    sortedCurves[key] = curveGroups[key];
  });

  return sortedCurves;
};

export const getCurveKeyObjects = (data: HazardUncertaintyChartData): CurveKeyObject[] => {
  return Object.keys(data).map((key) => {
    const keyArray = key.split(" ");
    const keyObject = {
      key: key,
      vs30: keyArray[0],
      imt: keyArray[1],
      location: keyArray.length === 3 ? keyArray[2] : `${keyArray[2]} ${keyArray[3]}`,
    };
    return keyObject;
  });
};

export const groupByLocationAndVs30 = (objects: CurveKeyObject[]): Record<string, CurveKeyObject[]> => {
  return objects.reduce(
    (acc, obj) => {
      const key = `${obj.location} ${obj.vs30}`;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    },
    {} as Record<string, CurveKeyObject[]>,
  );
};

export const addColorsToCurves = (data: HazardUncertaintyChartData): HazardUncertaintyChartData => {
  const curveKeyObjects = getCurveKeyObjects(data);
  const groupedData = groupByLocationAndVs30(curveKeyObjects);
  const numberOfColours = Object.keys(groupedData).length;

  groupedData &&
    Object.keys(groupedData).forEach((groupKey, i) => {
      groupedData[groupKey].map((curveKey) => {
        if (data[curveKey.key]) {
          Object.keys(data[curveKey.key]).forEach((curveType) => {
            if (curveType === "mean") {
              data[curveKey.key][curveType]["strokeColor"] = getColor(numberOfColours, i);
            } else {
              data[curveKey.key][curveType]["strokeColor"] = getColor(numberOfColours, i);
              data[curveKey.key][curveType]["strokeOpacity"] = 0.5;
            }
          });
        }
      });
    });

  return data;
};

export const addDashArrayToCurves = (data: HazardUncertaintyChartData): HazardUncertaintyChartData => {
  const dashedCurves: HazardUncertaintyChartData = {};
  const strokeDashArrayValues = ["0", "4,5", "1,3"];
  const curveKeyObjects = getCurveKeyObjects(data);
  const groupedData = groupByLocationAndVs30(curveKeyObjects);

  groupedData &&
    Object.keys(groupedData).forEach((key) => {
      const curveGroup = groupedData[key];
      curveGroup.forEach((curve, i) => {
        dashedCurves[curve.key] = {
          ...data[curve.key],
        };
        dashedCurves[curve.key]["mean"].strokeDashArray = strokeDashArrayValues[i];
      });
    });
  return dashedCurves;
};

export const validateLocationData = (
  locationData: LocationData[],
  setLocationError: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (locationData.length === 0) {
    throw noLocations;
  } else {
    setLocationError(false);
  }
};

export const validateVs30s = (vs30s: number[], setVs30Error: React.Dispatch<React.SetStateAction<boolean>>) => {
  if (vs30s.length === 0) {
    throw noVs30s;
  } else {
    setVs30Error(false);
  }
};

export const validateImts = (imts: string[], setImtError: React.Dispatch<React.SetStateAction<boolean>>) => {
  if (imts.length === 0) {
    throw noImts;
  } else if (imts.length > 3) {
    throw tooManyImts;
  } else {
    setImtError(false);
  }
};

export const readableTimePeriod = (timePeriod: number): string => {
  return `${timePeriod} years`;
};

export const readableTimePeriodArray = (timePeriods: number[]): string[] => {
  return timePeriods.map((timePeriods) => readableTimePeriod(timePeriods));
};

export const parseTimePeriodString = (timePeriod: string): number => {
  const timePeriodArray = timePeriod.split(" ");
  return Number(timePeriodArray[0]);
};
