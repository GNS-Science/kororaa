export type DisaggregationsPageState = {
  location: string;
  imt: string;
  vs30: number;
  poe: number;
  reportUrl: string;
  iml: number;
  meanSource: { distance: number; magnitude: number; epsilon: number };
};

export const disaggregationsPageReducerInitialState: DisaggregationsPageState = {
  location: 'Auckland',
  imt: 'PGA',
  vs30: 400,
  poe: 0.1,
  reportUrl: '',
  iml: 0,
  meanSource: { distance: 0, magnitude: 0, epsilon: 0 },
};

export const disaggregationsPageReducer = (state: DisaggregationsPageState, newState: Partial<DisaggregationsPageState>) => {
  return {
    ...state,
    ...newState,
  };
};
