import { hazardPageLocations, hazardPageOptions } from './constants/hazardPageOptions';

export type HazardPageState = {
  locs: string[];
  vs30s: number[];
  imts: string[];
  poe: number | undefined;
  showUncertainty: boolean;
  xScale: 'log' | 'linear';
};

export const hazardPageReducerInitialState: HazardPageState = {
  locs: [hazardPageLocations[0].id],
  vs30s: [hazardPageOptions.vs30s[0]],
  imts: [hazardPageOptions.imts[0]],
  poe: undefined,
  showUncertainty: true,
  xScale: 'log',
};

export const hazardPageReducer = (state: HazardPageState, newState: Partial<HazardPageState>) => {
  return {
    ...state,
    ...newState,
  };
};
