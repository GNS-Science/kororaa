import { getCsvMetadataRows } from "./csvMetadata.service";
import { HAZARD_MODEL } from "../../utils/environmentVariables";

describe("getCsvMetadataRows", () => {
  it("returns the date-time/version row followed by the licence row", () => {
    const rows = getCsvMetadataRows(new Date(Date.UTC(2026, 10, 20, 8, 30, 0)));
    expect(rows).toEqual([
      ["date-time: 20/11/2026, 08:30:00, (UTC)", `NSHM model version: ${HAZARD_MODEL}`],
      ["licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)", "© Earth Sciences New Zealand"],
    ]);
  });
});
