import { getLocationDataFromName } from '../../services/latLon/latLon.service';
import { hazardPageLocations, hazardPageOptions } from './constants/hazardPageOptions';

export type HazardPageState = {
  locationData: LocationData[];
  vs30s: number[];
  imts: string[];
  poe: number | undefined;
  hazardUncertainty: boolean;
  spectralUncertainty: boolean;
  hazardXScale: 'log' | 'linear';
  spectraXScale: 'log' | 'linear';
};

export const hazardPageReducerInitialState: HazardPageState = {
  locationData: [getLocationDataFromName(hazardPageLocations[0].name)],
  vs30s: [hazardPageOptions.vs30s[0]],
  imts: [hazardPageOptions.imts[0]],
  poe: undefined,
  hazardUncertainty: true,
  spectralUncertainty: true,
  hazardXScale: 'log',
  spectraXScale: 'linear',
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
