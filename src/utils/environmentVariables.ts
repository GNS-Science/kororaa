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
export const HAZARD_GMAX: number = Number(process.env.REACT_APP_HAZARD_GMAX) || 10;
export const HAZARD_GMIN: number = Number(process.env.REACT_APP_HAZARD_GMIN) || 0;
export const HAZARD_GMAX_LOG: number = Number(process.env.REACT_APP_HAZARD_GMAX_LOG) || 10;
export const HAZARD_GMIN_LOG: number = Number(process.env.REACT_APP_HAZARD_GMIN_LOG) || 0.01;
export const HAZARD_POEMAX: number = Number(process.env.REACT_APP_HAZARD_POEMAX) || 6;
export const HAZARD_POEMIN: number = Number(process.env.REACT_APP_HAZARD_POEMIN) || 0.000001;

export const SA_PERIODMAX: number = Number(process.env.REACT_APP_SA_PERIODMAX) || 6;
export const SA_PERIODMIN: number = Number(process.env.REACT_APP_SA_PERIODMIN) || 0;
export const SA_PERIODMAX_LOG: number = Number(process.env.REACT_APP_SA_PERIODMAX_LOG) || 6;
export const SA_PERIODMIN_LOG: number = Number(process.env.REACT_APP_SA_PERIODMIN_LOG) || 0.1;
export const SA_GMAX: number | string = process.env.REACT_APP_SA_GMAX === 'auto' ? 'auto' : Number(process.env.REACT_APP_SA_GMAX);
export const SA_GMIN: number = Number(process.env.REACT_APP_SA_GMIN) || 0.1;

export const SA_MIN_VALUE_LOG: number = Number(process.env.REACT_APP_SA_MIN_VALUE_LOG) || 0.0001;
