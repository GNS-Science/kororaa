export type HazardMapsState = {
  spectralPeriod: string[];
  statistic: string[];
  vs30: number[];
  poe: string[];
  color_scale: string;
  vmax: number;
  fill_opacity: number;
  stroke_width: number;
  stroke_opacity: number;
};

export const hazardMapsReducer = (state: HazardMapsState, newState: Partial<HazardMapsState>) => {
  return {
    ...state,
    ...newState,
  };
};

export const initialState: HazardMapsState = {
  spectralPeriod: ['PGA'],
  statistic: ['mean'],
  vs30: [400],
  poe: ['10% in 50 years'],
  color_scale: 'inferno',
  vmax: 0,
  fill_opacity: 0.5,
  stroke_width: 0.2,
  stroke_opacity: 0.5,
};
