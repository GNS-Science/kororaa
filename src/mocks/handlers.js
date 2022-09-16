import { graphql } from 'msw';
import { wellington400Response, wellingtonChristchurchResponse, arbitraryLatLonResponse, initialResponse } from './mockData/HazardChartsPlotsViewMockData';

export const handlers = [
  graphql.query('HazardChartsPlotsViewQuery', (req, res, ctx) => {
    const locations = req.variables.locs;
    const vs30 = req.variables.vs30s;

    if (vs30.includes(250)) {
      return res(ctx.data(initialResponse));
    }

    if (locations.includes('-41.3~174.78') && locations.includes('-43.53~172.63') && vs30.includes(400)) {
      return res(ctx.data(wellingtonChristchurchResponse));
    }

    if (locations.includes('-41.3~174.78') && vs30.includes(400)) {
      return res(ctx.data(wellington400Response));
    }

    if (locations.includes('-42~173') && vs30.includes(400)) {
      return res(ctx.data(arbitraryLatLonResponse));
    }
  }),
  graphql.query('HazardChartsPageQuery', (req, res, ctx) => {
    return res(
      ctx.data({
        textual_content: {
          ok: true,
          content: [
            {
              index: 'curves_help.md',
              content_type: 'Markdown',
              text: '## Hazard Curves and UHS\nView and download hazard curves and spectra (UHS).\nThe bold central curve is the weighted mean hazard from all branches of the model logic tree. Model uncertainty is shown as 80% confidence bounds (filled area) and 99% confidince bounds (thin outer lines).\n\n- Enter a location by either selecting from the dropdown menu of 35 population centres across New Zealand or enter a series of latitude longitude pairs in the format\nlat1, lon1; lat2, lon2; ...\n    - You can combine named locations and coordinates\n    - When latitude and longitude coordinates are used, results will be provided at the nearest location available from the model (the model is currently calculated on a 0.1 degree lat/lon grid, in addition to the 35 population centres).\n- Select one or more Vs30 values for your site condition\n- Select one or more spectral periods\n- To view a Uniform Hazard Spectra (UHS) enter a percent probability of exceedence in the next 50 years (e.g. 10)\n\nThe controls on the individual charts allow you to change the x-scale to log or linear and turn uncertainty on and off. Image files of the charts can also be downloaded here.\n\nSave Data allows you to download the selected locations, and vs30 curves at all spectral periods in csv format.\n\nThe coordinates chosen for the named locations are:\nLocation | latitude | longitude \n--- | --- | ---\nAuckland | -36.87 | 174.77\nBlenheim | -41.51 | 173.95\nChristchurch | -43.53 | 172.63\nDunedin | -45.87 | 170.5\nGisborne | -38.65 | 178.0\nGreymouth | -42.45 | 171.21\nHawera | -39.59 | 174.28\nHamilton | -37.78 | 175.28\nInvercargill | -46.43 | 168.36\nKaikoura | -42.4 | 173.68\nKerikeri | -35.22 | 173.97\nLevin | -40.63 | 175.28\nMount Cook | -43.73 | 170.1\nMasterton | -40.96 | 175.66\nNapier | -39.48 | 176.92\nNew Plymouth | -39.07 | 174.08\nNelson | -41.27 | 173.28\nPalmerston North | -40.35 | 175.62\nTe Anau | -45.41 | 167.72\nTimaru | -44.4 | 171.26\nTokoroa | -38.23 | 175.87\nThames | -37.13 | 175.53\nTauranga | -37.69 | 176.17\nTaupo | -38.68 | 176.08\nRotorua | -38.14 | 176.25\nWhakatane | -37.98 | 177.0\nFranz Josef | -43.35 | 170.17\nWellington | -41.3 | 174.78\nWestport | -41.75 | 171.58\nWhanganui | -39.93 | 175.05\nTurangi | -39.0 | 175.93\nOtira | -42.78 | 171.54\nHaast | -43.88 | 169.06\nHanmer Springs | -42.54 | 172.78\nQueenstown | -45.02 | 168.69',
              created: '2022-09-14T00:00:00',
              author: 'Chris DiCaprio',
              tags: ['help'],
              status: 'Draft',
            },
          ],
        },
      }),
    );
  }),
];
