export type DisaggregationsPageState = {
  location: string;
  imt: string;
  vs30: number;
  poe: number;
  reportUrl: string;
};

export const disaggregationsPageReducerInitialState: DisaggregationsPageState = {
  location: '',
  imt: '',
  vs30: 0,
  poe: 0,
  reportUrl: '',
};

export const disaggregationsPageReducer = (state: DisaggregationsPageState, newState: Partial<DisaggregationsPageState>) => {
  return {
    ...state,
    ...newState,
  };
};
