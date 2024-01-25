import { RegionGrid } from "../views/hazardMaps/__generated__/HazardMapsPageQuery.graphql";

export const RESOLUTION: number = parseFloat(import.meta.env.VITE_RESOLUTION || "0.2");
export const HAZARD_MODEL: string = import.meta.env.VITE_HAZARD_MODEL || "env.VITE_HAZARD_MODEL is undefined";
export const GRID_ID: RegionGrid | null | undefined =
  (import.meta.env.VITE_GRID_ID as RegionGrid) || ("NZ_0_2_NB_1_1" as RegionGrid);

export const MAP_IMTS = import.meta.env.VITE_MAP_IMTS?.split(",") || ["PGA"];
export const MAP_VS30S = import.meta.env.VITE_MAP_VS30S?.split(",") || [
  "250",
  "300",
  "350",
  "400",
  "450",
  "500",
  "750",
  "900",
  "1000",
  "1500",
];
export const MAP_STATISTICS = import.meta.env.VITE_MAP_STATISTICS?.split(",") || ["mean"];
export const MAP_POES: number[] = import.meta.env.VITE_MAP_POES?.split(",").map((poe: string) => Number(poe)) || [
  0.1, 0.02,
];
export const MAP_ZOOM_MIN = Number(import.meta.env.VITE_MAP_ZOOM_MIN) || 2;
export const MAP_ZOOM_MAX = Number(import.meta.env.VITE_MAP_ZOOM_MAX) || 12;
export const MAP_ZOOM_SNAP = Number(import.meta.env.VITE_MAP_ZOOM_SNAP) || 0.5;
export const MAP_ZOOM_DELTA = Number(import.meta.env.VITE_MAP_ZOOM_DELTA) || 0.5;
export const MAP_GRID_STYLE_DEFAULT = import.meta.env.VITE_MAP_GRID_STYLE_DEFAULT || "Filled";
export const MAP_GRID_STROKE_WIDTH = Number(import.meta.env.VITE_MAP_STROKE_WIDTH) || 5;
export const MAP_GRID_VMAX = Number(import.meta.env.VITE_MAP_GRID_VMAX) || 0;

export const HAZARD_IMTS = import.meta.env.VITE_HAZARD_IMTS?.split(",") || [
  "PGA",
  "SA(0.1)",
  "SA(0.2)",
  "SA(0.3)",
  "SA(0.4)",
  "SA(0.5)",
  "SA(0.7)",
  "SA(1.0)",
  "SA(1.5)",
  "SA(2.0)",
  "SA(3.0)",
  "SA(4.0)",
  "SA(5.0)",
  "SA(6.0)",
  "SA(7.5)",
  "SA(10.0)",
];

export const TIME_PERIODS = import.meta.env.VITE_TIME_PERIODS?.split(",").map((num: string) => Number(num)) || [
  50, 100,
];

export const HAZARD_COLOR_MAP = import.meta.env.VITE_HAZARD_COLOR_MAP || "jet";
export const HAZARD_COLOR_LIMIT: number = Number(import.meta.env.VITE_HAZARD_COLOR_LIMIT) || 30;
export const HAZARD_COLOR_UNCERTAINTY_OPACITY = import.meta.env.VITE_HAZARD_COLOR_UNCERTAINTY_OPACITY || 0.5;
export const HAZARD_GMAX: number = Number(import.meta.env.VITE_HAZARD_GMAX) || 10;
export const HAZARD_GMIN: number = Number(import.meta.env.VITE_HAZARD_GMIN) || 0;
export const HAZARD_GMAX_LOG: number = Number(import.meta.env.VITE_HAZARD_GMAX_LOG) || 10;
export const HAZARD_GMIN_LOG: number = Number(import.meta.env.VITE_HAZARD_GMIN_LOG) || 0.01;
export const HAZARD_POEMAX: number = Number(import.meta.env.VITE_HAZARD_POEMAX) || 6;
export const HAZARD_POEMIN: number = Number(import.meta.env.VITE_HAZARD_POEMIN) || 0.000001;

export const SA_PERIODMAX: number = Number(import.meta.env.VITE_SA_PERIODMAX) || 10;
export const SA_PERIODMIN: number = Number(import.meta.env.VITE_SA_PERIODMIN) || 0;
export const SA_PERIODMAX_LOG: number = Number(import.meta.env.VITE_SA_PERIODMAX_LOG) || 10;
export const SA_PERIODMIN_LOG: number = Number(import.meta.env.VITE_SA_PERIODMIN_LOG) || 0.001;
export const SA_GMAX: number | string =
  import.meta.env.VITE_SA_GMAX === "auto" ? "auto" : Number(import.meta.env.VITE_SA_GMAX);
export const SA_GMIN: number = Number(import.meta.env.VITE_SA_GMIN) || 0;

export const SA_LOG_PGA_SUBSTITUTE: number = Number(import.meta.env.VITE_SA_LOG_PGA_SUBSTITUTE) || 0.001;

export const MEAN: string = import.meta.env.VITE_MEAN || "mean";
export const UPPER1: string = import.meta.env.VITE_UPPER1 || "0.9";
export const UPPER2: string = import.meta.env.VITE_UPPER2 || "0.95";
export const LOWER1: string = import.meta.env.VITE_LOWER1 || "0.1";
export const LOWER2: string = import.meta.env.VITE_LOWER2 || "0.05";

export const GA_ID: string | undefined = import.meta.env.VITE_GA_ID;
export const GA_DEBUG_MODE: boolean = import.meta.env.VITE_GA_DEBUG_MODE === "true";

export const SOLVIS_LOCATION_LIST: string = import.meta.env.VITE_ANALYSIS_LOC_LIST_ID || "NZ";
export const SOLVIS_RADII_ID: number = Number(import.meta.env.VITE_RADII_ID) || 6;

export const IFM_FAULT_COLOUR = import.meta.env.VITE_IFM_FAULT_COLOUR || "red";
export const IFM_LOCATION_COLOUR = import.meta.env.VITE_IFM_LOCATION_COLOUR || "grey";
