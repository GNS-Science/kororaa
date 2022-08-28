export const RESOLUTION: number = parseFloat(process.env.REACT_APP_RESOLUTION || '0.2');
export const HAZARD_MODEL: string = process.env.REACT_APP_HAZARD_MODEL || 'SLT_TAG_FINAL';
export const MAP_IMTS = process.env.REACT_APP_MAP_IMTS?.split(',') || ['PGA'];
export const MAP_VS30S = process.env.REACT_APP_MAP_VS30S?.split(',') || ['250', '300', '350', '400', '450', '750'];
export const MAP_STATISTICS = process.env.REACT_APP_MAP_STATISTICS?.split(',') || ['mean'];
export const MAP_POES = process.env.REACT_APP_MAP_POES?.split(',') || ['10% in 50 years', '2% in 50 years'];
export const MAP_COLOR_SCALE = process.env.REACT_APP_MAP_COLOR_SCALE?.split(',') || ['jet', 'inferno'];
