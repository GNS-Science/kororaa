import {
  MAP_IMTS,
  MAP_POES,
  MAP_STATISTICS,
  MAP_VS30S,
  MAP_GRID_STYLE_DEFAULT,
  MAP_GRID_STROKE_WIDTH,
  MAP_GRID_VMAX,
} from "../../utils/environmentVariables";
import { gridStyleOptions } from "./constants/hazardMaps";

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
  color_scale: "inferno",
  color_scale_vmax: MAP_GRID_VMAX,
  fill_opacity: Number(gridStyleOptions[MAP_GRID_STYLE_DEFAULT].opacity),
  stroke_width: MAP_GRID_STROKE_WIDTH,
  stroke_opacity: Number(gridStyleOptions[MAP_GRID_STYLE_DEFAULT].strokeOpacity),
};
