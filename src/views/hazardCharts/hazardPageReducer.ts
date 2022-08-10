export type HazardPageState = {
  locationData: LocationData[];
  vs30s: number[];
  imts: string[];
  poe: number | undefined;
  showUncertainty: boolean;
  xScale: 'log' | 'linear';
};

export interface LocationData {
  name: string | null;
  lat: number;
  lon: number;
}

export const hazardPageReducer = (state: HazardPageState, newState: Partial<HazardPageState>) => {
  return {
    ...state,
    ...newState,
  };
};
