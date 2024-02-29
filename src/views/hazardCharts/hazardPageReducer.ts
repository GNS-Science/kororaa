import { getLocationDataFromName } from "../../services/latLon/latLon.service";
import { hazardPageLocations } from "./constants/hazardPageOptions";

export type HazardPageState = {
  locationData: LocationData[];
  vs30s: number[];
  imts: string[];
  poe: number | undefined;
  hazardUncertainty: boolean;
  spectralUncertainty: boolean;
  hazardXScale: "log" | "linear";
  spectraXScale: "log" | "linear";
  timePeriod: number;
};

export const hazardPageReducerInitialState: HazardPageState = {
  locationData: [getLocationDataFromName(hazardPageLocations[0].name)],
  vs30s: [400],
  imts: ["PGA"],
  poe: 0.1,
  hazardUncertainty: true,
  spectralUncertainty: true,
  hazardXScale: "log",
  spectraXScale: "log",
  timePeriod: 50,
};
export interface LocationData {
  name: string | null;
  lat: number;
  lon: number;
}

export const hazardPageReducer = (state: HazardPageState, newState: Partial<HazardPageState>) => {
  return {
    ...state,
    ...newState,
  };
};
