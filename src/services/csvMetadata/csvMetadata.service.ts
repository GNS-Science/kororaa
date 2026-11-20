import { HAZARD_MODEL } from "../../utils/environmentVariables";
import { CC_BY_SHORT_NAME, CC_BY_URL, LICENSOR } from "../../constants/licence";

/**
 * Metadata rows placed at the top of every CSV the app generates:
 *   1. download date-time (UTC) and NSHM model version
 *   2. licence and licensor
 */
export const getCsvMetadataRows = (now: Date = new Date()): string[][] => [
  [`date-time: ${now.toLocaleString("en-GB", { timeZone: "UTC" })}, (UTC)`, `NSHM model version: ${HAZARD_MODEL}`],
  [`licence: ${CC_BY_SHORT_NAME} (${CC_BY_URL})`, `© ${LICENSOR}`],
];
