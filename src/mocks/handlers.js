import { graphql } from 'msw';

export const handlers = [
  graphql.query('*', (req, res, ctx) => {
    console.log('handler called', req);
    throw 'SOMETHING WENT WRONG';
    return res(
      ctx.data({
        hazare_curves: null,
      }),
    );
  }),
];
