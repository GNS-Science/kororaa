import colormap from 'colormap';
import { COLOR_LIMIT, COLOR_MAP } from './environmentVariables';

export const colors = colormap({
  colormap: COLOR_MAP,
  nshades: COLOR_LIMIT,
  format: 'hex',
  alpha: 1,
});
