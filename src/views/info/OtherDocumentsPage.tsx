import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Typography, Link, Button } from '@mui/material';

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

const OtherDocumentsPage: React.FC = () => {
  return (
    <PageContainer>
      <Grid container columns={{ sm: 6, md: 8, lg: 12 }}>
        <Grid item xs={2} />
        <Grid spacing={3} item xs={8}>
          <Typography variant="h2">Other Documents</Typography>
          <SectionContainer>
            <Grid container spacing={3} columns={{ sm: 6, md: 8, lg: 12 }}>
              <Grid item xs={12}>
                <StyledCard>
                  <CardContent>
                    <Grid container spacing={1} columns={{ sm: 6, md: 8, lg: 12 }}>
                      <Grid item xs={10}>
                        <Typography variant="h4">NSHM Project Assurance Review</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Link
                          component={Button}
                          target="_blank"
                          rel="noopener"
                          color="primary"
                          href={'https://nshm-static-reports.gns.cri.nz/NSHM/ScienceReports/NSHM%20Project%20Assurance_FINAL%20DRAFT_28Jul22.pdf'}
                        >
                          View report
                        </Link>
                      </Grid>
                    </Grid>
                    <Typography>
                      Led by Hugh Cowan, the purpose of the Assurance and Lessons Review is to support the uptake of the new National Seismic Hazard Model into policy and practice, and to inform how
                      future iterations of the Model and its development may ensure best practice. It provides assurance to decision-makers that the processes followed for development of the revised
                      NSHM facilitated reasonable and legitimate scientific review, and led to best practice science and a rational consensus model.
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            </Grid>
          </SectionContainer>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </PageContainer>
  );
};

export default OtherDocumentsPage;
