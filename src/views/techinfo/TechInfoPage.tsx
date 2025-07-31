import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ReactMarkdown from "react-markdown";
import { graphql } from "react-relay";
import { useLazyLoadQuery } from "react-relay";
import { TechInfoPageQuery } from "./__generated__/TechInfoPageQuery.graphql";
import SimpleBackdrop from "../../components/common/SimpleBackdrop";
import { Typography } from "@mui/material";

const PageContainer = styled("div")({
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  marginBottom: "2rem",
});

const TitleContainer = styled("div")({
  justifyContent: "left",
  textAlign: "left",
  width: "100%",
  paddingBottom: "1rem",
});

const StyledReactMarkdownContainer = styled("div")({
  "& table": {
    borderSpacing: 0,
    borderCollapse: "collapse",
    display: "block",
    marginTop: 0,
    marginBottom: "16px",
    width: "50vw",
    maxWidth: "100%",
    overflow: "auto",
  },
  "& tr": {
    padding: "6px 13px",
    backgroundColor: "#ffffff",
    borderTop: "1px solid hsla(210, 18%, 87%, 1)",
  },
  "& tr:nth-of-type(2n)": {
    backgroundColor: "#f6f8fa",
  },
  "&td, th": {
    padding: "6px 13px",
    border: "1px solid #ffffff",
  },
});

const TechInfoComponent: React.FC = () => {
  const data = useLazyLoadQuery<TechInfoPageQuery>(techInfoPageQuery, {});
  const markdown = data?.KORORAA_textual_content?.content && data?.KORORAA_textual_content?.content[0]?.text;

  return (
    <PageContainer>
      <Grid container columns={{ sm: 6, md: 8, lg: 12 }}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Grid container spacing={2} columns={{ sm: 6, md: 8, lg: 12 }}>
            <Grid item xs={12}>
              <TitleContainer>
                <Typography variant="h2">Tech Info</Typography>
              </TitleContainer>
            </Grid>
            <Grid item xs={12}>
              <StyledReactMarkdownContainer>
                <ReactMarkdown>{markdown as string}</ReactMarkdown>
              </StyledReactMarkdownContainer>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </PageContainer>
  );
};

const TechInfoPage: React.FC = () => {
  return (
    <React.Suspense fallback={<SimpleBackdrop />}>
      <TechInfoComponent />
    </React.Suspense>
  );
};

export const techInfoPageQuery = graphql`
  query TechInfoPageQuery {
    KORORAA_textual_content(index: "tech_info.md") {
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
export default TechInfoPage;
