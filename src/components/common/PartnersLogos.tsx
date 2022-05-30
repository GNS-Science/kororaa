import React from 'react';
import { styled } from '@mui/material/styles';

import { partnersLogos } from '../../constants/partnersLogos';
import { Typography } from '@mui/material';

const PartnersLogosContainer = styled('div')(({ theme }) => ({
  width: '50%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: 15,
  },
}));

const Logo = styled('img')(({ theme }) => ({
  width: 'auto',
  maxWidth: 80,
  height: 'auto',
  maxHeight: 50,
  objectFit: 'contain',
  margin: 5,
  [theme.breakpoints.down('md')]: {
    madWidth: 40,
    maxHeight: 20,
  },
}));

const PartnersLogos: React.FC = () => {
  return (
    <PartnersLogosContainer>
      <Typography sx={{ fontStyle: 'italic' }}>
        E mahi ana me
        <br />
        <strong>In collaboration with</strong>
      </Typography>
      {partnersLogos.map((logo) => (
        <Logo key={logo.name} src={`/partners/${logo.path}`} />
      ))}
    </PartnersLogosContainer>
  );
};

export default PartnersLogos;
