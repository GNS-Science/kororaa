import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const FooterContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.info.main,
  padding: 40,
  height: 250,
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  display: 'flex',
  flexDirect: 'row',
  justifyContent: 'space-between',
}));

const FooterLinkItems = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLinkItems>
        <Typography>Documentation &amp; Help</Typography>
        <Typography>Contact Information</Typography>
        <Typography>About</Typography>
      </FooterLinkItems>
      <img src="/partners.png" />
    </FooterContainer>
  );
};

export default Footer;
