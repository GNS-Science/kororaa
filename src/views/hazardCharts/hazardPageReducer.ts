import { getLocationDataFromName } from '../../services/latLon/latLon.service';
import { hazardPageLocations, hazardPageOptions } from './constants/hazardPageOptions';

export type HazardPageState = {
  locationData: LocationData[];
  vs30s: number[];
  imts: string[];
  poe: number | undefined;
  showUncertainty: boolean;
  xScale: 'log' | 'linear';
};

export const hazardPageReducerInitialState: HazardPageState = {
  locationData: [getLocationDataFromName(hazardPageLocations[0].name)],
  vs30s: [hazardPageOptions.vs30s[0]],
  imts: [hazardPageOptions.imts[0]],
  poe: undefined,
  showUncertainty: true,
  xScale: 'log',
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
