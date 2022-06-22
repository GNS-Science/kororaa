export interface HazardCurvesQueryVariables {
  hazard_model: string;
  vs30s: number[];
  locs: string[];
  imts: string[];
  aggs: string[];
}

export interface HazardCurvesViewVariables {
  imts: string[];
  poe: number | undefined;
}
