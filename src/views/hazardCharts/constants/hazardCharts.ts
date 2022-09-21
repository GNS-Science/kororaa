import { HAZARD_COLOR_LIMIT } from '../../../utils/environmentVariables';

export const poeInputLabel = 'Probability of Exeedance (50 Yrs)';

export const tooManyCurves = `Maximum of ${HAZARD_COLOR_LIMIT} curves can be shown together. Please select fewer options.`;

export const locationTooltip = 'Select one or more locations from the list.';

export const latLonTooltip = 'Enter coordinates in lat,lon form. For multiple locations use `;` separator.';

export const vs30Tooltip = 'Select one or more site condition Vs30 from the list. See help for more details.';

export const imtTooltip = `Select an intensity measuure type. Types include PGA: Peak Ground Acceleration,
	 and SA(T): Spectral Acceleration values represent acceleration at a given period T.`;

export const poeTooltip = `The probability of experiencing an acceleration (g) or more within the next 50 years.
     Common values are 10% and 2% Probability of Exceedance (PoE) in 50 years. See help for more details.`;
