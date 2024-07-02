export type RuptureAnimationPageState = {
  faultSystem: string;
  locationCodes: string[];
  radius: number;
  magnitudeRange: number[];
  rateRange: number[];
  sortby: SortBy;
};

type SortBy =
  | ({
      attribute: string;
      ascending: boolean;
    } | null)[]
  | null
  | undefined;

export const ruptureAnimationPageReducerInitialState: RuptureAnimationPageState = {
  faultSystem: "",
  locationCodes: [],
  radius: 0,
  magnitudeRange: [6, 10],
  rateRange: [10e-20, 0],
  sortby: [],
};

export const ruptureAnimationPageReducer = (
  state: RuptureAnimationPageState,
  newState: Partial<RuptureAnimationPageState>,
) => {
  return {
    ...state,
    ...newState,
  };
};
