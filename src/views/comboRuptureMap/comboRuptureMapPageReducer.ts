import MapViewControlsState from './MapViewControls';

export type ComboRuptureMapPageState = {
  faultSystem: string;
  locationCodes: string[];
  radius: number;
  magnitudeRange: number[];
  rateRange: number[];
  // mapViewControlsState: typeof MapViewControlsState;
};

export const comboRuptureMapPageReducerInitialState: ComboRuptureMapPageState = {
  faultSystem: '',
  locationCodes: [],
  radius: 0,
  magnitudeRange: [6, 10],
  rateRange: [10e-20, 0],
  // mapViewControlsState: { showSurfaces: true, showAnimation: true },
};

export const comboRuptureMapPageReducer = (state: ComboRuptureMapPageState, newState: Partial<ComboRuptureMapPageState>) => {
  return {
    ...state,
    ...newState,
  };
};
