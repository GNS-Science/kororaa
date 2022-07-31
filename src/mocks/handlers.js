import { graphql } from 'msw';
import { hazardUncertaintyMockDataWlg250 } from './mockData/hazardUncertaintyMockDataWlg250';
import { hazardUncertaintyMockDataWlgChc250 } from './mockData/hazardUncertaintyMockDataWlgChc250';

export const handlers = [
  graphql.query('HazardChartsPlotsViewQuery', (req, res, ctx) => {
    const locations = req.variables.locs;
    const vs30 = req.variables.vs30s;

    if (locations.includes('WLG') && locations.includes('CHC') && vs30.includes(250)) {
      return res(ctx.data(hazardUncertaintyMockDataWlgChc250));
    }

    if (locations.includes('WLG') && vs30.includes(250)) {
      return res(ctx.data(hazardUncertaintyMockDataWlg250));
    }
  }),
];
