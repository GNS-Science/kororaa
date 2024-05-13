import React, { useReducer, useMemo, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { graphql } from "react-relay";
import { useLazyLoadQuery } from "react-relay";

import HazardChartsControls from "./HazardChartsControls";
import HazardChartsPlotsView from "./HazardChartsPlotsView";
import { hazardPageReducer, hazardPageReducerInitialState } from "./hazardPageReducer";
import { InfoTooltip } from "../../components/common/InfoTooltip";
import SimpleBackdrop from "../../components/common/SimpleBackdrop";
import { HazardChartsPageQuery } from "./__generated__/HazardChartsPageQuery.graphql";
import ErrorBoundary from "../../components/common/ErrorBoundary";

const PageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  flexDirection: "column",
  [theme.breakpoints.down("xl")]: {
    margin: "0 2% 0 2%",
  },
}));

const TitleContainer = styled("div")({
  justifyContent: "left",
  textAlign: "left",
  width: "100%",
  paddingBottom: "2rem",
});

const HazardChartsPage: React.FC = () => {
  const [state, dispatch] = useReducer(hazardPageReducer, hazardPageReducerInitialState);
  const data = useLazyLoadQuery<HazardChartsPageQuery>(hazardChartsPageQuery, {});
  const markdown = useMemo(() => data?.textual_content?.content && data?.textual_content?.content[0]?.text, [data]);
  const content_type = useMemo(
    () => data?.textual_content?.content && data?.textual_content?.content[0]?.content_type,
    [data]
  );
  const printTargetRef = useRef<HTMLDivElement>(null);

  return (
    <PageContainer>
      <ErrorBoundary>
        <TitleContainer>
          <Typography variant="h2">
            Hazard Curves and Uniform Hazard Spectra
            <InfoTooltip content={markdown || ""} format={content_type === "Markdown"} />
          </Typography>
        </TitleContainer>
        <HazardChartsControls state={state} dispatch={dispatch} printTargetRef={printTargetRef} />
        <React.Suspense fallback={<SimpleBackdrop />}>
          <HazardChartsPlotsView state={state} dispatch={dispatch} printTargetRef={printTargetRef} />
        </React.Suspense>
      </ErrorBoundary>
    </PageContainer>
  );
};

export default HazardChartsPage;

export const hazardChartsPageQuery = graphql`
  query HazardChartsPageQuery {
    textual_content: KORORAA_textual_content(index: "curves_help.md") {
      ok
      content {
        index
        content_type
        text
        created
        author
        tags
        status
      }
    }
  }
`;
