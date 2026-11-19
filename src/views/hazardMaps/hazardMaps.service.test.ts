import { getHazardMapCSVData } from "./hazardMaps.service";

const LICENCE_ROW = [
  "licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)",
  "© Earth Sciences New Zealand",
];

const geoJson = JSON.stringify({
  type: "FeatureCollection",
  features: [{ type: "Feature", properties: { loc: [174.78, -41.3], value: 0.456 }, geometry: null }],
});

describe("getHazardMapCSVData", () => {
  it("starts with the date-time/version row and licence row, followed by the map parameters, headings and data", () => {
    const csv = getHazardMapCSVData([geoJson], 400, "PGA", "10% in 50 years", "mean");
    expect(csv[0][0]).toMatch(/^date-time: /);
    expect(csv[1]).toEqual(LICENCE_ROW);
    expect(csv.slice(2)).toEqual([
      ["vs30=400", "spectral period=PGA", "Poe=10% in 50 years", "Statistic=mean"],
      ["lon", "lat", "shaking intensity(g)"],
      [174.78, -41.3, "0.46"],
    ]);
  });
});
