export type ComboRuptureMapPageState = {
  faultSystem: string;
  locationCodes: string[];
  radius: number;
  magnitudeRange: number[];
  rateRange: number[];
  showSurfaces: boolean;
  showAnimation: boolean;
  showMfd: boolean;
  showTraceLegend: boolean;
};

export const comboRuptureMapPageReducerInitialState: ComboRuptureMapPageState = {
  faultSystem: '',
  locationCodes: [],
  radius: 0,
  magnitudeRange: [6, 10],
  rateRange: [10e-20, 0],
  showSurfaces: true,
  showAnimation: true,
  showMfd: true,
  showTraceLegend: true,
};

export const comboRuptureMapPageReducer = (state: ComboRuptureMapPageState, newState: Partial<ComboRuptureMapPageState>) => {
  return {
    ...state,
    ...newState,
  };
};
