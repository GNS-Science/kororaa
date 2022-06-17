export interface HazardCurvesSelections {
  location: string;
  vs30: number;
  imts: string[];
  POE: 'None' | '2%' | '10%';
}
