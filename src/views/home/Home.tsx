import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

import MenuCard from './MenuCard';

const HomePageContainer = styled('div')({
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
});

const HomeTitleContainer = styled('div')({
  justifyContent: 'left',
  textAlign: 'left',
  width: '100%',
  paddingBottom: '2rem',
});

const Home: React.FC = () => {
  return (
    <HomePageContainer>
      <HomeTitleContainer>
        <Typography variant="h1">New Zealand National Seismic Hazard Model</Typography>
        <Typography>Welcome to the 2022 revision of the NSHM model. Here’s a link back to the explanation and background info on the model.</Typography>
      </HomeTitleContainer>
      <Grid container spacing={3} columns={{ sm: 6, md: 8, lg: 12 }}>
        <MenuCard title="Hazard Curves" text="Hazard and Spectral acceleration plots." img="/images/SpectralAccelChart.png" url="/Hazardcurves" />
        <MenuCard title="Hazard Maps" text="Showing gridded hazard levels across NZ." img="/images/HazardMapExample.png" url="/HazardMaps" />
        <MenuCard title="Rupture Sets" text="Ruptures and seismic event rates." img="/images/TUI-ruptures-0.png" url="/Previews" />
        <MenuCard title="Science Reports" text="Model information, reports, and datasets." img="/info.jpg" url="/Resources/ScienceReports" />
        <MenuCard title="Disaggregations" text="Disaggregation plots for selected sites." img="/images/disagg.png" url="/Disaggs" />
      </Grid>
    </HomePageContainer>
  );
};

export default Home;
