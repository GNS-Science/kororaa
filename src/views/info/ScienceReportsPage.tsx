import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';

import { Card, CardContent, Typography } from '@mui/material';
import InfoTooltip from '../../components/common/InfoTooltip';
import SimpleBackdrop from '../../components/common/SimpleBackdrop';
import { infoMarkdown } from '../../utils/markdownUtils';
import { ScienceReportsPageQuery, ProjectAreaEnum, ReportStatusEnum } from './__generated__/ScienceReportsPageQuery.graphql';

const StyledCard = styled(Card)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
}));

const PageContainer = styled('div')({
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
});

const SectionContainer = styled('div')({
  justifyContent: 'left',
  textAlign: 'left',
  width: '100%',
  paddingTop: '2rem',
  paddingBottom: '1rem',
});

interface IPerson {
  readonly name?: string | null;
}

interface IScienceReport {
  topic?: string | null;
  title?: string | null;
  status?: ReportStatusEnum | null;
  area?: ProjectAreaEnum | null;
  readonly lead_author?: IPerson | null;
  readonly reviewers?: ReadonlyArray<IPerson> | null;
  publication_date?: string | null;
  bibliographic_ref?: string | null;
}

interface IScienceReportCardProps {
  report: IScienceReport;
  key: number;
}

const ScienceReportCard: React.FC<IScienceReportCardProps> = ({ report }: IScienceReportCardProps) => {
  return (
    <Grid item xs={9}>
      <StyledCard>
        <CardContent>
          <Typography variant="h4">{report.title}</Typography>
          <Typography>
            {report.area && (
              <>
                <strong>Area:</strong>&nbsp;{report.area} &nbsp; &nbsp; &nbsp;
              </>
            )}
            <strong>Topic:</strong>&nbsp;{report.topic}
          </Typography>
          <Typography>
            <strong>Lead author:</strong>&nbsp;{report.lead_author && report.lead_author.name}&nbsp; &nbsp; &nbsp;
            <strong>Reviewers:</strong>&nbsp;{report.reviewers && report.reviewers.map((reviewer) => reviewer.name + ', ')}
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
  const published = data?.science_reports?.reports?.filter((report) => report?.status === 'Published');
  const reviewing = data?.science_reports?.reports?.filter((report) => report?.status === 'Review');

  return (
    <PageContainer>
      <Typography variant="h2">
        Science Reports
        <InfoTooltip content={infoMarkdown} format={true} />
      </Typography>
      <SectionContainer>
        <Typography variant="h3">Status: Published</Typography>
      </SectionContainer>
      <Grid container spacing={6} columns={{ sm: 6, md: 8, lg: 12 }}>
        {published?.map((report, i) => report && <ScienceReportCard report={report as IScienceReport} key={i} />)}
      </Grid>
      <SectionContainer>
        <Typography variant="h3">Status: In Review</Typography>
      </SectionContainer>
      <Grid container spacing={6} columns={{ sm: 6, md: 8, lg: 12 }}>
        {reviewing?.map((report, i) => report && <ScienceReportCard report={report as IScienceReport} key={i} />)}
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
    science_reports {
      ok
      reports {
        topic
        area
        title
        status
        notes
        report_number
        lead_author {
          name
        }
        reviewers {
          name
        }
        publication_date
        bibliographic_ref
      }
    }
  }
`;
