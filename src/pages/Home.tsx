import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import CardButton from '../components/CardButton';

const HomeContainer = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const InfoContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
  padding: '4rem',
});

const CardButtonsContainer = styled('div')({
  width: '100%',
  maxWidth: 1300,
  height: '100vh',
  padding: 10,
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-around',
});

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <InfoContainer>
        <Typography variant="h1">New Zealand National Seismic Hazard Model</Typography>
        <Typography>Welcome to the New Zealand NSHM . This is the 2022 revision to the model. Here’s a link back to the explaination and background info on the model</Typography>
      </InfoContainer>
      <CardButtonsContainer>
        <CardButton title="Hazard Curves" text="Hazard Curves to view" img="/hazardCurves.png" />
        <CardButton title="Hazard Maps" text="Hazard Maps to view" img="/hazardMaps.png" />
        <CardButton title="Rupture Sets" text="Rupture Sets to view" img="/ruptureSets.png" />
        <CardButton title="Model Information, Reports, and Input Files" text="More Information" img="/info.jpg" />
      </CardButtonsContainer>
    </HomeContainer>
  );
};

export default Home;
