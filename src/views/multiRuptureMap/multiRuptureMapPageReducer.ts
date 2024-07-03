export type MultiRuptureMapPageState = {
  faultSystem: string;
  locationCodes: string[];
  radius: number;
  magnitudeRange: number[];
  rateRange: number[];
};

export const multiRuptureMapPageReducerInitialState: MultiRuptureMapPageState = {
  faultSystem: "",
  locationCodes: [],
  radius: 0,
  magnitudeRange: [6, 10],
  rateRange: [10e-20, 0],
};

export const multiRuptureMapPageReducer = (
  state: MultiRuptureMapPageState,
  newState: Partial<MultiRuptureMapPageState>,
) => {
  return {
    ...state,
    ...newState,
  };
};
