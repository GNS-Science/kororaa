export type ComboRuptureMapPageState = {
  faultSystem: string;
  locationCodes: string[];
  radius: number;
  magnitudeRange: number[];
  rateRange: number[];
  showSurfaces: boolean;
  showAnimation: boolean;
  showMfd: boolean;
  showTraceLegend: boolean;
  sortby: SortBy;
};

type SortBy =
  | ({
      attribute: string;
      ascending: boolean;
    } | null)[]
  | null
  | undefined;

export const comboRuptureMapPageReducerInitialState: ComboRuptureMapPageState = {
  faultSystem: '',
  locationCodes: [],
  radius: 0,
  magnitudeRange: [6, 10],
  rateRange: [10e-20, 0],
  showSurfaces: true,
  showAnimation: true,
  showMfd: true,
  showTraceLegend: true,
  sortby: [],
};

export const comboRuptureMapPageReducer = (state: ComboRuptureMapPageState, newState: Partial<ComboRuptureMapPageState>) => {
  return {
    ...state,
    ...newState,
  };
};
