export type HazardMapsState = {
  imts: string[];
  aggs: string[];
  vs30s: number[];
  poes: number[];
};

export const hazardMapsReducer = (state: HazardMapsState, newState: Partial<HazardMapsState>) => {
  return {
    ...state,
    ...newState,
  };
};

export const initialState: HazardMapsState = {
  imts: ['PGA'],
  aggs: ['mean'],
  vs30s: [400],
  poes: [0.02],
};
