import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import MenuCard from './MenuCard';

import { LogoCard } from '../../components/common/PartnersLogos';
import { partnersLogos } from '../../constants/partnersLogos';

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
        <Typography variant="h1">
          <em>Te Tauira Matapae Pūmate Rū i Aotearoa • New Zealand National Seismic Hazard Model</em>
        </Typography>
        <Typography variant="h5">
          <em>a GNS Science led research programme</em>
        </Typography>
      </HomeTitleContainer>

      <Grid container spacing={3} columns={{ sm: 6, md: 8, lg: 12 }} paddingBottom="2rem">
        <MenuCard title="Hazard Curves" text="Hazard and UHS plots." img="/images/SpectralAccelChart.png" url="/Hazardcurves" />
        <MenuCard title="Hazard Maps" text="Hazard levels across NZ." img="/images/HazardMapExample.png" url="/HazardMaps" />
        <MenuCard title="Rupture Sets" text="Ruptures and event rates." img="/images/TUI-ruptures-0.png" url="/Previews" />
        <MenuCard title="Science Reports" text="Model reports and datasets." img="/info.jpg" url="/Resources/ScienceReports" />
        <MenuCard title="Disaggregations" text="Source details at selected sites." img="/images/disagg.png" url="/Disaggs" />
      </Grid>

      <Grid container spacing={3} columns={{ sm: 6, md: 8, lg: 12 }} paddingBottom="1rem">
        <Grid item xs={12}>
          <LogoCard title="E mahi ana me" text="In collaboration with" logos={partnersLogos} url="/Collaborators" />
        </Grid>
      </Grid>
    </HomePageContainer>
  );
};

export default Home;
