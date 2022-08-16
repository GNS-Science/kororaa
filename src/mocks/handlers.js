import { graphql } from 'msw';
import { wellington400Response, wellingtonChristchurchResponse, arbitraryLatLonResponse, initialResponse } from './mockData/HazardChartsPlotsViewMockData';

export const handlers = [
  graphql.query('HazardChartsPlotsViewQuery', (req, res, ctx) => {
    const locations = req.variables.locs;
    const vs30 = req.variables.vs30s;

    if (vs30.includes('250')) {
      return res(ctx.data({ initialResponse }));
    }

    if (locations.includes('-41.3~174.78') && locations.includes('-43.53~172.63') && vs30.includes(400)) {
      return res(ctx.data(wellingtonChristchurchResponse));
    }

    if (locations.includes('-41.3~174.78') && vs30.includes(400)) {
      return res(ctx.data(wellington400Response));
    }

    if (locations.includes('-42.000~173.000') && vs30.includes(400)) {
      return res(ctx.data(arbitraryLatLonResponse));
    }
  }),
];
