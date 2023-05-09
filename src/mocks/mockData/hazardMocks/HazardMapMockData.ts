export const hazardMapMockData = {
  gridded_hazard: {
    ok: true,
    gridded_hazard: [
      {
        grid_id: 'NZ_0_1_NB_1_1',
        hazard_model: 'SLT_v8_gmm_v2_FINAL',
        imt: 'PGA',
        agg: 'mean',
        hazard_map: {
          geojson:
          colour_scale: {
            levels: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            hexrgbs: ['#000000', '#000004', '#490b6a', '#982766', '#ce4347', '#ec6726', '#f98e09', '#fcb216', '#f7d340', '#f1ed71', '#fcffa4'],
          },
        },
      },
    ],
  },
  textual_content: {
    ok: true,
    content: [
      {
        index: 'hazmap_help.md',
        content_type: 'Markdown',
        text: '## Hazard Maps\nMaps of shaking level at varous probabilities of exceedence. You can specify spectral period and site condition (Vs30).\n\nThe statistic option allows you to select from the weighted mean hazard, various quantiles calculated from the weighted model logic tree, or the Coefficient of Variation (CoV) of the uncertainty. In this way, you can explore uncertainty in the model for the whole of New Zealand.',
        created: '2022-09-14T00:00:00',
        author: 'Chris DiCaprio',
        tags: ['help'],
        status: 'Draft',
      },
    ],
  },
};