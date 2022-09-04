import React from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

import PartnersLogos from './PartnersLogos';

const FooterContainer = styled('footer')(({ theme }) => ({
  flexShrink: 0,
  padding: 40,
  height: 50,
  width: '100%',
  display: 'flex',
  flexDirect: 'row',
  justifyContent: 'space-between',
  borderTop: `5px solid ${theme.palette.secondary.main}`,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
  },
}));

const FooterLinkItems = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: 15,
});

const Footer: React.FC = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <FooterContainer>
      <FooterLinkItems>
        <Typography>Documentation &amp; Help</Typography>
        <Typography>Contact Information</Typography>
        <Typography>About</Typography>
      </FooterLinkItems>
      {(location.pathname === '/' || location.pathname === '/Resources') && <PartnersLogos />}
    </FooterContainer>
  );
};

export default Footer;
