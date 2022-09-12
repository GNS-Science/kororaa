export type DisaggregationsPageState = {
  location: string;
  imt: string;
  vs30: number;
  poe: number;
  invTime: number;
  reportUrl: string;
};

export interface Location {
  name: string | null;
  key: string | null;
  code: string | null;
  lat: number | null;
  lon: number | null;
}

export const disaggregationsPageReducerInitialState: DisaggregationsPageState = {
  location: '',
  imt: '',
  vs30: 0,
  poe: 0,
  invTime: 0,
  reportUrl: '',
};

export const disaggregationsPageReducer = (state: DisaggregationsPageState, newState: Partial<DisaggregationsPageState>) => {
  return {
    ...state,
    ...newState,
  };
};
