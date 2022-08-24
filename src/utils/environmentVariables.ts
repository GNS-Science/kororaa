export const RESOLUTION: number = parseFloat(process.env.REACT_APP_RESOLUTION || '0.2');
export const HAZARD_MODEL: string = process.env.REACT_APP_HAZARD_MODEL || 'SLT_TAG_FINAL';
export const MAP_COLOR_SCALE: string[] = process.env.REACT_APP_MAP_COLOR_SCALE?.split(',') || ['jet', 'inferno'];
