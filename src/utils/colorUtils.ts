import colormap from 'colormap';
import { HAZARD_COLOR_LIMIT, HAZARD_COLOR_MAP } from './environmentVariables';

export const colors = colormap({
  colormap: HAZARD_COLOR_MAP,
  nshades: HAZARD_COLOR_LIMIT,
  format: 'hex',
  alpha: 1,
});
