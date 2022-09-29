import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Grid } from '@mui/material';
import { List, ListItem, ListItemButton, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { TypeSpecimen } from '@mui/icons-material';

// const StyledCard = styled(Card)(() => ({
//   justifyContent: 'center',
//   alignItems: 'center',
// }));

const PageContainer = styled('div')({
  // width: '80%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  // textMargin: '1rem',
});

// const AboutContainer = styled('div')({
//   // display: 'flex',
//   // flexDirection: 'column',
//   justifyContent: 'left',
//   textAlign: 'left',
//   width: '100%',
//   // padding: '4rem',
// });

const AboutPage: React.FC = () => {
  return (
    <PageContainer>
      <Grid container spacing={3} columns={{ sm: 6, md: 8, lg: 12 }}>
        <Grid item xs={9}>
          <Typography variant="h2">About The NZ-NSHM</Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="body1">
            <strong>
              The National Seismic Hazard Model calculates the likelihood and strength of earthquake shaking that may occur in different parts of Aotearoa New Zealand over specified time periods.
            </strong>
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="body1">GNS Science is the custodian of the Aotearoa New Zealand National Seismic Hazard Model (NSHM).</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">
            General information can be found&nbsp;
            <Link color="secondary" target="_blank" rel="noopener" href="https://www.gns.cri.nz/research-projects/national-seismic-hazard-model/">
              Here
            </Link>
            .
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1">
            This site provides only seismic hazard results and is not to be used for engineering design. Please see MBIE for information related to engineering design and the NSHM.
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1">The NZ NSHM provides forecasts of ground shaking for the next 100 years in New Zealand.</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1">
            Details on model development and implementation can be found in the&nbsp;
            <Link underline="hover" component={RouterLink} color="secondary" to="/Resources/ScienceReports">
              Science Reports
            </Link>
            &nbsp;page.
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1">
            Planned features for the site can be found in the&nbsp;
            <Link underline="hover" component={RouterLink} color="secondary" to="/Previews">
              Coming Features
            </Link>
            &nbsp;page.
          </Typography>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default AboutPage;
