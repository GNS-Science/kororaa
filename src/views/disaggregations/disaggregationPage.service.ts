import { DisaggregationsPageState } from "./DisaggregationsPageReducer";
import { DisaggregationsPageQuery$data } from "./__generated__/DisaggregationsPageQuery.graphql";

export const getLocationOptions = (data: DisaggregationsPageQuery$data): (string | undefined)[] => {
  return Array.from(
    new Set(
      data?.disaggregation_reports?.reports?.map((report) => {
        if (report && report?.location && report?.location !== undefined) {
          return report.location.name || "";
        }
      }),
    ),
  );
};

export const getPoeOptions = (data: DisaggregationsPageQuery$data): (number | undefined)[] => {
  return Array.from(
    new Set(
      data?.disaggregation_reports?.reports?.map((report) => {
        if (report && report?.poe && report?.poe !== undefined) {
          return report.poe;
        }
      }),
    ),
  );
};

export const getImtOptions = (data: DisaggregationsPageQuery$data): (string | undefined)[] => {
  return Array.from(
    new Set(
      data?.disaggregation_reports?.reports?.map((report) => {
        if (report && report?.imt && report?.imt !== undefined) {
          return report.imt;
        }
      }),
    ),
  );
};

export const getVs30Options = (data: DisaggregationsPageQuery$data): (number | undefined)[] => {
  return Array.from(
    new Set(
      data?.disaggregation_reports?.reports?.map((report) => {
        if (report && report?.vs30 && report?.vs30 !== undefined) {
          return report.vs30;
        }
      }),
    ),
  );
};

export const getReportUrl = (data: DisaggregationsPageQuery$data, state: DisaggregationsPageState): string => {
  return (
    data?.disaggregation_reports?.reports?.filter((report) => {
      return (
        report?.location?.name === state.location &&
        report?.poe === state.poe &&
        report?.imt === state.imt &&
        report?.vs30 === state.vs30
      );
    })[0]?.report_url || ""
  );
};
