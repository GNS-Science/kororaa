export type FaultModelState = {
  slipRate: string;
  timeDependence: string;
  mfdValue: string;
  momentScaling: string;
  locations: string[];
  radius: number;
  magnitudeRange: number[];
  rateRange: number[];
};

export const faultModelReducer = (state: FaultModelState, newState: Partial<FaultModelState>) => {
  return {
    ...state,
    ...newState,
  };
};

export const initialState: FaultModelState = {
  slipRate: '',
  timeDependence: '',
  mfdValue: '',
  momentScaling: '',
  locations: [],
  radius: 0,
  magnitudeRange: [6, 10],
  rateRange: [-20, 0],
};
