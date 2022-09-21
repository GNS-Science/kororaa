import { MAP_COLOR_SCALE, MAP_IMTS, MAP_POES, MAP_STATISTICS, MAP_VS30S } from '../../utils/environmentVariables';

export type HazardMapsState = {
  spectralPeriod: string;
  statistic: string;
  vs30: number;
  poe: number;
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
  spectralPeriod: MAP_IMTS[0],
  statistic: MAP_STATISTICS[0],
  vs30: Number(MAP_VS30S[0]),
  poe: Number(MAP_POES[0]),
  color_scale: MAP_COLOR_SCALE[0],
  color_scale_vmax: 0,
  fill_opacity: 0.5,
  stroke_width: 0.2,
  stroke_opacity: 0.5,
};
