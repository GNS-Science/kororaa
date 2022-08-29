import { RegionGrid } from '../views/hazardMaps/__generated__/HazardMapsQuery.graphql';

export const RESOLUTION: number = parseFloat(process.env.REACT_APP_RESOLUTION || '0.2');
export const HAZARD_MODEL: string = process.env.REACT_APP_HAZARD_MODEL || 'SLT_TAG_FINAL';
export const GRID_ID: RegionGrid | null | undefined = (process.env.GRID_ID as RegionGrid) || ('NZ_0_2_NB_1_1' as RegionGrid);

export const MAP_IMTS = process.env.REACT_APP_MAP_IMTS?.split(',') || ['PGA'];
export const MAP_VS30S = process.env.REACT_APP_MAP_VS30S?.split(',') || ['250', '300', '350', '400', '450', '750'];
export const MAP_STATISTICS = process.env.REACT_APP_MAP_STATISTICS?.split(',') || ['mean'];
export const MAP_POES = process.env.REACT_APP_MAP_POES?.split(',') || ['10% in 50 years', '2% in 50 years'];
export const MAP_COLOR_SCALE = process.env.REACT_APP_MAP_COLOR_SCALE?.split(',') || ['jet', 'inferno'];

export const COLOR_MAP = process.env.REACT_APP_COLOR_MAP || 'jet';
export const COLOR_LIMIT = process.env.REACT_APP_COLOR_LIMIT || 30;
export const COLOR_UNCERTAINTY_OPACITY = process.env.REACT_APP_COLOR_UNCERTAINTY_OPACITY || 0.5;
