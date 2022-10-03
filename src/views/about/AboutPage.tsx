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

const TitleContainer = styled('div')({
  justifyContent: 'left',
  textAlign: 'left',
  width: '100%',
  paddingBottom: '1rem',
});

const AboutPage: React.FC = () => {
  return (
    <PageContainer>
      <Grid container columns={{ sm: 6, md: 8, lg: 12 }}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Grid container spacing={2} columns={{ sm: 6, md: 8, lg: 12 }}>
            <Grid item xs={12}>
              <TitleContainer>
                <Typography variant="h2">About The NSHM</Typography>
                <Typography variant="body1">
                  <strong>
                    The National Seismic Hazard Model (NSHM) calculates the likelihood and strength of earthquake shaking that may occur in different parts of Aotearoa New Zealand over specified time
                    periods. The NSHM provides forecasts of ground shaking for the next 100 years.
                  </strong>
                </Typography>
              </TitleContainer>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1">
                GNS Science is the custodian of the <strong>Aotearoa New Zealand National Seismic Hazard Model</strong>, also known as <strong>Te Tauira Matapae Pūmate Rū i Aotearoa.</strong>
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1">
                This web site provides scientists and researchers with access to the NSHM results and data. For background information and educational material please visit the&nbsp;
                <Link color="secondary" target="_blank" rel="noopener" href="https://www.gns.cri.nz/research-projects/national-seismic-hazard-model/">
                  GNS NSHM project
                </Link>
                .
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                Details on model development and implementation can be found in the&nbsp;
                <Link underline="hover" component={RouterLink} color="secondary" to="/Resources/ScienceReports">
                  Science Reports
                </Link>
                &nbsp;page.
              </Typography>
            </Grid>
            <Grid item xs={12}>
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
