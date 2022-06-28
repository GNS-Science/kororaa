export interface HazardCurvesQueryVariables {
  hazard_model: string;
  vs30s: number[];
  locs: string[];
  imts: string[];
  aggs: string[];
}
