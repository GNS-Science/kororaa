import { RegionGrid } from '../views/hazardMaps/__generated__/HazardMapsPageQuery.graphql';

export const RESOLUTION: number = parseFloat(process.env.REACT_APP_RESOLUTION || '0.2');
export const HAZARD_MODEL: string = process.env.REACT_APP_HAZARD_MODEL || 'SLT_TAG_FINAL';
export const GRID_ID: RegionGrid | null | undefined = (process.env.REACT_APP_GRID_ID as RegionGrid) || ('NZ_0_2_NB_1_1' as RegionGrid);

export const MAP_IMTS = process.env.REACT_APP_MAP_IMTS?.split(',') || ['PGA'];
export const MAP_VS30S = process.env.REACT_APP_MAP_VS30S?.split(',') || ['250', '300', '350', '400', '450', '500', '750', '900', '1000', '1500'];
export const MAP_STATISTICS = process.env.REACT_APP_MAP_STATISTICS?.split(',') || ['mean'];
export const MAP_POES: number[] = process.env.REACT_APP_MAP_POES?.split(',').map((poe) => Number(poe)) || [0.1, 0.02];
export const MAP_ZOOM_MIN = Number(process.env.REACT_APP_MAP_ZOOM_MIN) || 2;
export const MAP_ZOOM_MAX = Number(process.env.REACT_APP_MAP_ZOOM_MAX) || 12;
export const MAP_ZOOM_SNAP = Number(process.env.REACT_APP_MAP_ZOOM_SNAP) || 0.5;
export const MAP_ZOOM_DELTA = Number(process.env.REACT_APP_MAP_ZOOM_DELTA) || 0.5;
export const MAP_GRID_STYLE_DEFAULT = process.env.REACT_APP_MAP_GRID_STYLE_DEFAULT || 'Filled';
export const MAP_GRID_STROKE_WIDTH = Number(process.env.REACT_APP_MAP_STROKE_WIDTH) || 5;
export const MAP_GRID_VMAX = Number(process.env.REACT_APP_MAP_GRID_VMAX) || 0;

export const HAZARD_IMTS = process.env.REACT_APP_HAZARD_IMTS?.split(',') || [
  'PGA',
  'SA(0.1)',
  'SA(0.2)',
  'SA(0.3)',
  'SA(0.4)',
  'SA(0.5)',
  'SA(0.7)',
  'SA(1.0)',
  'SA(1.5)',
  'SA(2.0)',
  'SA(3.0)',
  'SA(4.0)',
  'SA(5.0)',
  'SA(6.0)',
  'SA(7.5)',
  'SA(10.0)',
];
export const HAZARD_COLOR_MAP = process.env.REACT_APP_HAZARD_COLOR_MAP || 'jet';
export const HAZARD_COLOR_LIMIT: number = Number(process.env.REACT_APP_HAZARD_COLOR_LIMIT) || 30;
export const HAZARD_COLOR_UNCERTAINTY_OPACITY = process.env.REACT_APP_HAZARD_COLOR_UNCERTAINTY_OPACITY || 0.5;
export const HAZARD_GMAX: number = Number(process.env.REACT_APP_HAZARD_GMAX) || 10;
export const HAZARD_GMIN: number = Number(process.env.REACT_APP_HAZARD_GMIN) || 0;
export const HAZARD_GMAX_LOG: number = Number(process.env.REACT_APP_HAZARD_GMAX_LOG) || 10;
export const HAZARD_GMIN_LOG: number = Number(process.env.REACT_APP_HAZARD_GMIN_LOG) || 0.01;
export const HAZARD_POEMAX: number = Number(process.env.REACT_APP_HAZARD_POEMAX) || 6;
export const HAZARD_POEMIN: number = Number(process.env.REACT_APP_HAZARD_POEMIN) || 0.000001;

export const SA_PERIODMAX: number = Number(process.env.REACT_APP_SA_PERIODMAX) || 10;
export const SA_PERIODMIN: number = Number(process.env.REACT_APP_SA_PERIODMIN) || 0;
export const SA_PERIODMAX_LOG: number = Number(process.env.REACT_APP_SA_PERIODMAX_LOG) || 10;
export const SA_PERIODMIN_LOG: number = Number(process.env.REACT_APP_SA_PERIODMIN_LOG) || 0.001;
export const SA_GMAX: number | string = process.env.REACT_APP_SA_GMAX === 'auto' ? 'auto' : Number(process.env.REACT_APP_SA_GMAX);
export const SA_GMIN: number = Number(process.env.REACT_APP_SA_GMIN) || 0;

export const SA_LOG_PGA_SUBSTITUTE: number = Number(process.env.REACT_APP_SA_LOG_PGA_SUBSTITUTE) || 0.001;

export const MEAN: string = process.env.REACT_APP_MEAN || 'mean';
export const UPPER1: string = process.env.REACT_APP_UPPER1 || '0.9';
export const UPPER2: string = process.env.REACT_APP_UPPER2 || '0.95';
export const LOWER1: string = process.env.REACT_APP_LOWER1 || '0.1';
export const LOWER2: string = process.env.REACT_APP_LOWER2 || '0.05';

export const GA_ID: string | undefined = process.env.REACT_APP_GA_ID;
