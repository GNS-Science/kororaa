import { getHazardCSVData } from "../hazardPage.service";
import { hazardPlotsViewQueryMockData } from "../../../services/spectralAccel/testCases/hazardPlotViewsQueryMockData";

const LICENCE_ROW = [
  "licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)",
  "© Earth Sciences New Zealand",
];

describe("getHazardCSVData", () => {
  it("starts with the date-time/version row, then the licence row, then the column headings", () => {
    const csv = getHazardCSVData(hazardPlotsViewQueryMockData);
    expect(csv[0][0]).toMatch(/^date-time: /);
    expect(csv[0][1]).toMatch(/^NSHM model version: /);
    expect(csv[1]).toEqual(LICENCE_ROW);
    expect(csv[2].slice(0, 5)).toEqual(["lat", "lon", "vs30", "period", "statistic"]);
  });
});
