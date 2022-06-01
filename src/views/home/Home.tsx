import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { useLazyLoadQuery } from 'react-relay';
import { HomeQuery } from './__generated__/HomeQuery.graphql';
import { graphql } from 'babel-plugin-relay/macro';

import MenuCard from './MenuCard';

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

const CardButtonsContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 1300,
  height: 1100,
  padding: 10,
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-around',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <InfoContainer>
        <Typography variant="h1">New Zealand National Seismic Hazard Model</Typography>
        <Typography>Welcome to the New Zealand NSHM . This is the 2022 revision to the model. Here’s a link back to the explaination and background info on the model</Typography>
      </InfoContainer>
      <CardButtonsContainer>
        <MenuCard title="Hazard Curves" text="Hazard Curves to view" img="/hazardCurves.png" />
        <MenuCard title="Hazard Maps" text="Hazard Maps to view" img="/hazardMaps.png" />
        <MenuCard title="Rupture Sets" text="Rupture Sets to view" img="/ruptureSets.png" />
        <MenuCard title="Model Information, Reports, and Input Files" text="More Information" img="/info.jpg" />
      </CardButtonsContainer>
    </HomeContainer>
  );
};

export default Home;
