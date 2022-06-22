export interface HazardCurvesSelections {
  location: string;
  vs30: number;
  imt: string;
  poe: number | undefined;
}

export interface HazardCurvesQueryVariables {
  hazard_model: string;
  vs30s: number[];
  locs: string[];
  imts: string[];
  aggs: string[];
}
