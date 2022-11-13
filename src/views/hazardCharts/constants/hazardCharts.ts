import { HAZARD_COLOR_LIMIT } from '../../../utils/environmentVariables';

export const poeInputLabel = 'Probability of Exeedance (50 Yrs)';

export const tooManyCurves = `Maximum of ${HAZARD_COLOR_LIMIT} curves can be shown together. Please select fewer options.`;

export const locationTooltip = 'Standard model locations are provided for larger population centres.';

export const latLonTooltip = `Coordinates in lat,lon form. For multiple locations use the \`;\` separator.
     Values will be rounded to the nearest location on the NSHM model grid.`;

export const noLocations = 'Please enter atleast one location';

export const noVs30s = 'Please select atleast one VS30';

export const noImts = 'Please select atleast one spectral period';
