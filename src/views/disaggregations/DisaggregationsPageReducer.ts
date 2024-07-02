export type DisaggregationsPageState = {
  location: string;
  imt: string;
  vs30: number;
  poe: number;
  reportUrl: string;
};

export const disaggregationsPageReducerInitialState: DisaggregationsPageState = {
  location: "Auckland",
  imt: "PGA",
  vs30: 400,
  poe: 0.1,
  reportUrl: "",
};

export const disaggregationsPageReducer = (
  state: DisaggregationsPageState,
  newState: Partial<DisaggregationsPageState>,
) => {
  return {
    ...state,
    ...newState,
  };
};
