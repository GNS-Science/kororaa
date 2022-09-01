import { RegionGrid } from '../views/hazardMaps/__generated__/HazardMapsPageQuery.graphql';

export const RESOLUTION: number = parseFloat(process.env.REACT_APP_RESOLUTION || '0.2');
export const HAZARD_MODEL: string = process.env.REACT_APP_HAZARD_MODEL || 'SLT_TAG_FINAL';
export const GRID_ID: RegionGrid | null | undefined = (process.env.GRID_ID as RegionGrid) || ('NZ_0_2_NB_1_1' as RegionGrid);

export const MAP_IMTS = process.env.REACT_APP_MAP_IMTS?.split(',') || ['PGA'];
export const MAP_VS30S = process.env.REACT_APP_MAP_VS30S?.split(',') || ['250', '300', '350', '400', '450', '750'];
export const MAP_STATISTICS = process.env.REACT_APP_MAP_STATISTICS?.split(',') || ['mean'];
export const MAP_POES: number[] = process.env.REACT_APP_MAP_POES?.split(',').map((poe) => Number(poe)) || [0.1, 0.02];
export const MAP_COLOR_SCALE = process.env.REACT_APP_MAP_COLOR_SCALE?.split(',') || ['jet', 'inferno'];

export const HAZARD_COLOR_MAP = process.env.REACT_APP_HAZARD_COLOR_MAP || 'jet';
export const HAZARD_COLOR_LIMIT: number = Number(process.env.REACT_APP_HAZARD_COLOR_LIMIT) || 30;
export const HAZARD_COLOR_UNCERTAINTY_OPACITY = process.env.REACT_APP_HAZARD_COLOR_UNCERTAINTY_OPACITY || 0.5;
