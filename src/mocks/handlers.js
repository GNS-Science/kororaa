import { graphql } from 'msw';
import { hazardChartsPlotsViewMockDataWLG } from './mockData/HazardChartsPlotsViewMockDataWLG';
import { hazardChartsPlotsViewMockDataWLGCHC } from './mockData/HazardChartsPlotsViewMockDataWLGCHC';
import { hazardChartsPlotsViewMockDataWLGCHCVS30 } from './mockData/HazardChartsPlotsViewMockDataWLGCHCVS30';

export const handlers = [
  graphql.query('HazardChartsPlotsViewQuery', (req, res, ctx) => {
    const locations = req.variables.locs;
    const vs30 = req.variables.vs30s;
    if (locations.includes('WLG') && locations.includes('CHC')) {
      if (vs30.includes(250) && vs30.includes(350)) {
        return res(ctx.data(hazardChartsPlotsViewMockDataWLGCHCVS30));
      }
      if (vs30.includes(250)) {
        return res(ctx.data(hazardChartsPlotsViewMockDataWLGCHC));
      }
    }
    if (locations.includes('WLG')) {
      return res(ctx.data(hazardChartsPlotsViewMockDataWLG));
    }
  }),
];
