import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { graphql } from "react-relay";
import { useLazyLoadQuery } from "react-relay/hooks";
import { Card, CardContent, Typography, Link, Button } from "@mui/material";
import SimpleBackdrop from "../../components/common/SimpleBackdrop";
import { ScienceReportsPageQuery, ReportStatusEnum } from "./__generated__/ScienceReportsPageQuery.graphql";

const StyledCard = styled(Card)(() => ({
  justifyContent: "center",
  alignItems: "center",
}));

const PageContainer = styled("div")({
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
});

const SectionContainer = styled("div")({
  justifyContent: "left",
  textAlign: "left",
  width: "100%",
  paddingTop: "2rem",
  paddingBottom: "1rem",
});

interface IPerson {
  readonly name?: string | null;
}

interface IScienceReport {
  title?: string | null;
  filename?: string | null;
  status?: ReportStatusEnum | null;
  readonly lead_author?: IPerson | null;
  publication_date?: string | null;
  bibliographic_ref?: string | null;
}

interface IScienceReportCardProps {
  report: IScienceReport;
  key: number;
}

const ScienceReportCard: React.FC<IScienceReportCardProps> = ({ report }: IScienceReportCardProps) => {
  const file_url = "https://nshm-static-reports.gns.cri.nz/NSHM/ScienceReports/" + report.filename;
  return (
    <Grid item xs={12}>
      <StyledCard>
        <CardContent>
          <Grid container spacing={1} columns={{ sm: 6, md: 8, lg: 12 }}>
            <Grid item xs={10}>
              <Typography variant="h4">{report.title}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Button component={Link} target="_blank" rel="noopener" color="primary" href={file_url}>
                View report
              </Button>
            </Grid>
          </Grid>
          <Typography>
            <strong>Lead author:</strong>&nbsp;{report.lead_author && report.lead_author.name}&nbsp; &nbsp; &nbsp;
          </Typography>
          {report.bibliographic_ref && (
            <Typography>
              <strong>Bibliographic Reference:</strong>&nbsp;{report.bibliographic_ref}
            </Typography>
          )}
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

const ScienceReportsComponent: React.FC = () => {
  const data = useLazyLoadQuery<ScienceReportsPageQuery>(scienceReportsPageQuery, {});
  const published = data?.science_reports?.reports?.filter(
    (report) => report?.status === "Published" && report?.filename,
  );
  // const reviewing = data?.science_reports?.reports?.filter((report) => report?.status === 'Review');

  return (
    <PageContainer>
      <Grid container columns={{ sm: 6, md: 8, lg: 12 }}>
        <Grid item xs={2} />
        <Grid spacing={3} item xs={8}>
          <Typography variant="h2">Science Reports</Typography>
          <SectionContainer>
            <Grid container spacing={3} columns={{ sm: 6, md: 8, lg: 12 }}>
              {published?.map((report, i) => report && <ScienceReportCard report={report as IScienceReport} key={i} />)}
            </Grid>
          </SectionContainer>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </PageContainer>
  );
};

const ScienceReportsPage = () => {
  return (
    <React.Suspense fallback={<SimpleBackdrop />}>
      <ScienceReportsComponent />
    </React.Suspense>
  );
};

export default ScienceReportsPage;

export const scienceReportsPageQuery = graphql`
  query ScienceReportsPageQuery {
    science_reports: KORORAA_science_reports {
      ok
      reports {
        filename
        title
        status
        notes
        report_number
        lead_author {
          name
        }
        publication_date
        bibliographic_ref
      }
    }
  }
`;
