import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import PartnersLogos from './PartnersLogos';

const FooterContainer = styled('div')(({ theme }) => ({
  padding: 40,
  height: 250,
  position: 'relative',
  bottom: 0,
  width: '100%',
  display: 'flex',
  flexDirect: 'row',
  justifyContent: 'space-between',
}));

const FooterLinkItems = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLinkItems>
        <Typography>Documentation &amp; Help</Typography>
        <Typography>Contact Information</Typography>
        <Typography>About</Typography>
      </FooterLinkItems>
      <PartnersLogos />
    </FooterContainer>
  );
};

export default Footer;
