export type FaultModelPageState = {
  solutionId: string;
  locationCodes: string[];
  radius: number;
  magnitudeRange: number[];
  rateRange: number[];
};

export const faultModelPageReducerInitialState: FaultModelPageState = {
  solutionId: '',
  locationCodes: [],
  radius: 0,
  magnitudeRange: [6, 10],
  rateRange: [-20, 0],
};

export const faultModelPageReducer = (state: FaultModelPageState, newState: Partial<FaultModelPageState>) => {
  return {
    ...state,
    ...newState,
  };
};
