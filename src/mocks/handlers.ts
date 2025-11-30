import { graphql, GraphQLHandler, HttpResponse } from "msw";
import {
  wellington400Response,
  wellingtonChristchurchResponse,
  arbitraryLatLonResponse,
  initialResponse,
  missingLocationResponse,
} from "./mockData/hazardMocks/HazardChartsPlotsViewMockData";
import { hazardMapMockData } from "./mockData/hazardMocks/HazardMapMockData";
import { ruptureAnimationMock1 } from "./mockData/ruptureAnimationMockPagination/ruptureAnimationMock1";
import { ruptureAnimationMock2 } from "./mockData/ruptureAnimationMockPagination/ruptureAnimationMock2";
import { ruptureAnimationMock3 } from "./mockData/ruptureAnimationMockPagination/ruptureAnimationMock3";
import { ruptureAnimationMock4 } from "./mockData/ruptureAnimationMockPagination/ruptureAnimationMock4";
import { ruptureAnimationMock5 } from "./mockData/ruptureAnimationMockPagination/ruptureAnimationMock5";
import { solvisControlsMock } from "./mockData/solvisControlsMock";
import { multiRupturePageInitialResponse } from "./mockData/multiRupturePageMocks/multiRupturePageInitialResponse";
import { multiRupturePageCrustalAllLocations } from "./mockData/multiRupturePageMocks/multiRupturePageCrustalAllLocations";
import { multiRupturePageCrustalGYM100km } from "./mockData/multiRupturePageMocks/multiRupturePageCrustalGYM100km";
import { multiRupturePageCrustalGYMCHC100km } from "./mockData/multiRupturePageMocks/multiRupturePageCrustalGYMCHC100km";
import { multiRupturePageLocationsNoRuptures } from "./mockData/multiRupturePageMocks/multiRupturePageLocationsNoRuptures";
import { textual_content_tech_info, textual_content_science_reports } from "./mockData/textMocks";
import { disaggregation_reports } from "./mockData/disaggregationMocks/disaggregationQuery";
import { hazardMapMockData } from "./mockData/hazardMocks/HazardMapMockData";

export const handlers = [
  graphql.query("HazardChartsPlotsViewQuery", ({ variables }) => {
    const locations = variables.locs;
    const vs30 = variables.vs30s;

    if (vs30.includes(250)) {
      return HttpResponse.json({ data: initialResponse });
    }
    if (locations.includes("-40~180")) {
      return HttpResponse.json({ data: missingLocationResponse });
    }

    if (locations.includes("-41.3~174.78") && locations.includes("-43.53~172.63") && vs30.includes(400)) {
      return HttpResponse.json({ data: wellingtonChristchurchResponse });
    }

    if (locations.includes("-41.3~174.78") && vs30.includes(400)) {
      return HttpResponse.json({ data: wellington400Response });
    }

    if (locations.includes("-42~173") && vs30.includes(400)) {
      return HttpResponse.json({ data: arbitraryLatLonResponse });
    }
  }),
  graphql.query("HazardChartsPageQuery", () => {
    return HttpResponse.json({
      data: {
        textual_content: {
          ok: true,
          content: [
            {
              index: "curves_help.md",
              content_type: "Markdown",
              text: "## Hazard Curves and UHS\nView and download hazard curves and spectra (UHS).\nThe bold central curve is the weighted mean hazard from all branches of the model logic tree. Model uncertainty is shown as 80% confidence bounds (filled area) and 99% confidince bounds (thin outer lines).\n\n- Enter a location by either selecting from the dropdown menu of 35 population centres across New Zealand or enter a series of latitude longitude pairs in the format\nlat1, lon1; lat2, lon2; ...\n    - You can combine named locations and coordinates\n    - When latitude and longitude coordinates are used, results will be provided at the nearest location available from the model (the model is currently calculated on a 0.1 degree lat/lon grid, in addition to the 35 population centres).\n- Select one or more Vs30 values for your site condition\n- Select one or more spectral periods\n- To view a Uniform Hazard Spectra (UHS) enter a percent probability of exceedence in the next 50 years (e.g. 10)\n\nThe controls on the individual charts allow you to change the x-scale to log or linear and turn uncertainty on and off. Image files of the charts can also be downloaded here.\n\nSave Data allows you to download the selected locations, and vs30 curves at all spectral periods in csv format.\n\nThe coordinates chosen for the named locations are:\nLocation | latitude | longitude \n--- | --- | ---\nAuckland | -36.87 | 174.77\nBlenheim | -41.51 | 173.95\nChristchurch | -43.53 | 172.63\nDunedin | -45.87 | 170.5\nGisborne | -38.65 | 178.0\nGreymouth | -42.45 | 171.21\nHawera | -39.59 | 174.28\nHamilton | -37.78 | 175.28\nInvercargill | -46.43 | 168.36\nKaikoura | -42.4 | 173.68\nKerikeri | -35.22 | 173.97\nLevin | -40.63 | 175.28\nMount Cook | -43.73 | 170.1\nMasterton | -40.96 | 175.66\nNapier | -39.48 | 176.92\nNew Plymouth | -39.07 | 174.08\nNelson | -41.27 | 173.28\nPalmerston North | -40.35 | 175.62\nTe Anau | -45.41 | 167.72\nTimaru | -44.4 | 171.26\nTokoroa | -38.23 | 175.87\nThames | -37.13 | 175.53\nTauranga | -37.69 | 176.17\nTaupo | -38.68 | 176.08\nRotorua | -38.14 | 176.25\nWhakatane | -37.98 | 177.0\nFranz Josef | -43.35 | 170.17\nWellington | -41.3 | 174.78\nWestport | -41.75 | 171.58\nWhanganui | -39.93 | 175.05\nTurangi | -39.0 | 175.93\nOtira | -42.78 | 171.54\nHaast | -43.88 | 169.06\nHanmer Springs | -42.54 | 172.78\nQueenstown | -45.02 | 168.69",
              created: "2022-09-14T00:00:00",
              author: "Chris DiCaprio",
              tags: ["help"],
              status: "Draft",
            },
          ],
        },
      },
    });
  }),
  graphql.query("HazardMapsPageQuery", () => {
    return HttpResponse.json({ data: hazardMapMockData });
  }),
  graphql.query("ComboRuptureMapPageQuery", ({ variables }) => {
    const after = variables.after;
    const faultSystem = variables.fault_system;
    const locationIds = variables.location_ids;
    const radiusKm = variables.radius_km;
    const sortBy = variables.sortby;

    if (faultSystem === "") {
      return HttpResponse.json({ data: multiRupturePageInitialResponse });
    }
    if (faultSystem === "CRU" && locationIds.length === 0) {
      return HttpResponse.json({ data: multiRupturePageCrustalAllLocations });
    }
    if (faultSystem === "CRU" && locationIds[0] === "GMN" && locationIds.length === 1) {
      return HttpResponse.json({ data: multiRupturePageCrustalGYM100km });
    }
    if (faultSystem === "CRU" && locationIds.length === 2) {
      return HttpResponse.json({ data: multiRupturePageCrustalGYMCHC100km });
    }
    if (faultSystem === "HIK" && locationIds.length === 2) {
      return HttpResponse.json({ data: multiRupturePageLocationsNoRuptures });
    }
    if (faultSystem === "PUY" && locationIds[0] === "ZQN" && radiusKm === 100 && sortBy === null) {
      if (after === null) {
        return HttpResponse.json({ data: ruptureAnimationMock1 });
      }
    }
  }),
  // graphql.operation only allows the return of null data, even if the documentation says otherwise
  // This GraphQLHandler is what graphql.operation would have returned.
  new GraphQLHandler("all", new RegExp(".*"), "*", ({ variables }) => {
    const after = variables.after;
    if (after === "UnVwdHVyZURldGFpbENvbm5lY3Rpb25DdXJzb3I6OQ==") {
      return HttpResponse.json({ data: ruptureAnimationMock2 });
    }
    if (after === "UnVwdHVyZURldGFpbENvbm5lY3Rpb25DdXJzb3I6MTQ=") {
      return HttpResponse.json({ data: ruptureAnimationMock3 });
    }
    if (after === "UnVwdHVyZURldGFpbENvbm5lY3Rpb25DdXJzb3I6MTk=") {
      return HttpResponse.json({ data: ruptureAnimationMock4 });
    }
    if (after === "UnVwdHVyZURldGFpbENvbm5lY3Rpb25DdXJzb3I6MjQ=") {
      return HttpResponse.json({ data: ruptureAnimationMock5 });
    }
  }),
  graphql.query("ComboRuptureMapPageControlsQuery", () => {
    return HttpResponse.json({ data: solvisControlsMock });
  }),
  graphql.query("MultiRuptureMapPageControlsQuery", () => {
    return HttpResponse.json({ data: solvisControlsMock });
  }),
  graphql.query("TechInfoPageQuery", (_req, res, ctx) => {
    return res(ctx.data(textual_content_tech_info));
  }),
  graphql.query("ScienceReportsPageQuery", (_req, res, ctx) => {
    return res(ctx.data(textual_content_science_reports));
  }),
  graphql.query("DisaggregationsPageQuery", (_req, res, ctx) => {
    return res(ctx.data(disaggregation_reports));
  }),
  graphql.query("HazardMapsPageQuery", (_req, res, ctx) => {
    return res(ctx.data(hazardMapMockData));
  }),
  graphql.query("TechInfoPageQuery", (_req, res, ctx) => {
    return res(ctx.data(textual_content_tech_info));
  }),
  graphql.query("ScienceReportsPageQuery", (_req, res, ctx) => {
    return res(ctx.data(textual_content_science_reports));
  }),
  graphql.query("DisaggregationsPageQuery", (_req, res, ctx) => {
    return res(ctx.data(disaggregation_reports));
  }),
  graphql.query("HazardMapsPageQuery", (_req, res, ctx) => {
    return res(ctx.data(hazardMapMockData));
  }),
];
