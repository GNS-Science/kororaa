import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Grid } from '@mui/material';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const PageContainer = styled('div')({
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  marginBottom: '2rem',
});

const AboutPage: React.FC = () => {
  return (
    <PageContainer>
      <Grid container columns={{ sm: 6, md: 8, lg: 12 }}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Typography variant="h2">About The NZ-NSHM</Typography>
          <Grid container rowSpacing={1.5} direction="column">
            <Grid item>
              <Typography variant="body1">
                <strong>
                  The National Seismic Hazard Model calculates the likelihood and strength of earthquake shaking that may occur in different parts of Aotearoa New Zealand over specified time periods.
                </strong>
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="body1">GNS Science is the custodian of the Aotearoa New Zealand National Seismic Hazard Model (NSHM).</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Background information on the NSHM Project as well as educational material can be found on the&nbsp;
                <Link color="secondary" target="_blank" rel="noopener" href="https://www.gns.cri.nz/research-projects/national-seismic-hazard-model/">
                  GNS Page
                </Link>
                . Looking for NSHM Results and Data? You&apos;re in the right place.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">The NZ NSHM provides forecasts of ground shaking for the next 100 years in New Zealand.</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Details on model development and implementation can be found in the&nbsp;
                <Link underline="hover" component={RouterLink} color="secondary" to="/Resources/ScienceReports">
                  Science Reports
                </Link>
                &nbsp;page.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Planned features for the site can be found in the&nbsp;
                <Link underline="hover" component={RouterLink} color="secondary" to="/Previews">
                  Coming Features
                </Link>
                &nbsp;page.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </PageContainer>
  );
};

export default AboutPage;
