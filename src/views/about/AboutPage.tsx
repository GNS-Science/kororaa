import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Grid } from '@mui/material';
import { List, ListItem, ListItemButton, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

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
          <Typography variant="h2">About NSHM</Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="body1">
            <strong>
              The National Seismic Hazard Model calculates the likelihood and strength of earthquake shaking that may occur in different parts of Aotearoa New Zealand over specified time periods.
            </strong>
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="h4">Overview</Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="body1">
            GNS Science is the custodian of the Aotearoa New Zealand National Seismic Hazard Model (NSHM). Key users of the model include MBIE, EQC, local and regional authorities, Waka Kotahi NZTA,
            structural and geotechnical engineers, land-use planners, seismic hazard consultants, risk modelling consultants, and the insurance sector.
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">
            For general information about seismic hazard models, in general, and the New Zealand National Seismic Hazard Model, specifically, fact sheets and regional information can be found on the
            &nbsp;
            <Link color="secondary" target="_blank" rel="noopener" href="https://www.gns.cri.nz/research-projects/national-seismic-hazard-model/">
              GNS NSHM project page.
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1">
            This site provides only seismic hazard results and is not to be used for engineering design. Please see MBIE for information related to engineering design and the NSHM.
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1">The NZ NSHM 2022 provides forecasts of ground shaking for the next 100 years in New Zealand.</Typography>
        </Grid>
        <Grid item xs={9}>
          <List disablePadding>
            <ListItem>
              All results are presented in&nbsp;
              <Link underline="hover" target="_blank" rel="noopener" color="secondary" href="https://openseespydoc.readthedocs.io/en/latest/src/exampleRotDSpectra.html">
                RotD50
              </Link>
              &nbsp;orientation
            </ListItem>
            <ListItem>
              Details on model development and implementation can be found in the&nbsp;
              <Link underline="hover" component={RouterLink} color="secondary" to="/Resources/ScienceReports">
                Science Reports
              </Link>
              &nbsp;page.
            </ListItem>
            <ListItem>
              Planned features for the site can be found in the&nbsp;
              <Link underline="hover" component={RouterLink} color="secondary" to="/Previews">
                Coming Features
              </Link>
              &nbsp;page.
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="h4">Glossary, fact sheets and helpful information</Typography>
        </Grid>
        <Grid item xs={6}>
          <List disablePadding>
            <ListItem disablePadding>
              <ListItemButton component="a" target="_blank" rel="noopener" href="https://www.gns.cri.nz/assets/Research-projects/NSHM/Glossary-of-terms.pdf">
                Glossary of Terms (PDF, 196 KB)
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" target="_blank" rel="noopener" href="https://www.gns.cri.nz/assets/Research-projects/NSHM/Earthquake-fact-sheet.pdf">
                A bit about earthquakes (PDF, 199 KB)
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" target="_blank" rel="noopener" href="https://www.gns.cri.nz/assets/Research-projects/NSHM/Understanding-probability.pdf">
                Understanding probability (PDF, 207 KB)
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" target="_blank" rel="noopener" href="https://www.gns.cri.nz/assets/Research-projects/NSHM/Understanding-ground-shaking.pdf">
                Understanding ground shaking (PDF, 205 KB)
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" target="_blank" rel="noopener" href="https://www.gns.cri.nz/assets/Research-projects/NSHM/Understanding-hazard-impact-and-risk.pdf">
                Understanding hazard, impact, and risk (PDF, 176 KB)
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default AboutPage;
