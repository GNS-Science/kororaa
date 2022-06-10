import { graphql } from 'msw';
import { hazardChartsPlotsViewMockData } from './mockData/HazardChartsPlotsViewMockData';

export const handlers = [
  graphql.query('HazardChartsPlotsViewQuery', (req, res, ctx) => {
    return res(ctx.data(hazardChartsPlotsViewMockData));
  }),
];
