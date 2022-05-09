import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const InfoContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
  padding: '4rem',
});

const CardButtonsContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
});

const Home: React.FC = () => {
  return (
    <>
      <InfoContainer>
        <Typography variant="h1">New Zealand National Seismic Hazard Model</Typography>
        <Typography>Welcome to the New Zealand NSHM . This is the 2022 revision to the model. Here’s a link back to the explaination and background info on the model</Typography>
      </InfoContainer>
      <CardButtonsContainer></CardButtonsContainer>
    </>
  );
};

export default Home;
