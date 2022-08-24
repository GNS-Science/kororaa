export type HazardMapsState = {
  imts: string[];
  aggs: string[];
  vs30s: number[];
  poes: number[];
  color_scale: string;
  color_scale_vmax: number;
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
  imts: ['PGA'],
  aggs: ['mean'],
  vs30s: [400],
  poes: [0.02],
  color_scale: 'inferno',
  color_scale_vmax: 2.5,
  fill_opacity: 0.5,
  stroke_width: 0.2,
  stroke_opacity: 0.5,
};
