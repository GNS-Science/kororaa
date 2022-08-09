export type HazardPageState = {
  locs: string[];
  vs30s: number[];
  imts: string[];
  poe: number | undefined;
  showUncertainty: boolean;
  xScale: 'log' | 'linear';
};

export const hazardPageReducer = (state: HazardPageState, newState: Partial<HazardPageState>) => {
  return {
    ...state,
    ...newState,
  };
};
