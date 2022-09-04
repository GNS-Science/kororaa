import colormap from 'colormap';
import { HAZARD_COLOR_MAP } from './environmentVariables';

const colors = colormap({
  colormap: HAZARD_COLOR_MAP,
  nshades: 100,
  format: 'hex',
  alpha: 1,
});

export const getColor = (length: number, index: number): string => {
  const step = Math.round(100 / length);
  return colors[index * step];
};
