export type HazardPageState = {
  locs: string[];
  vs30s: number[];
  imts: string[];
  poe: number | undefined;
};

export const hazardPageReducer = (state: HazardPageState, newState: Partial<HazardPageState>) => {
  return {
    ...state,
    ...newState,
  };
};
