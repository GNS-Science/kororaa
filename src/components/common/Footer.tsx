import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const FooterContainer = styled('footer')(({ theme }) => ({
  // flexShrink: 0,
  // padding: 0,
  // height: 50,
  width: '100%',
  // display: 'flex',
  // flexDirect: 'row',
  justifyContent: 'space-between',
  borderTop: `5px solid ${theme.palette.navbar.accent}`,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
  },
}));

const FooterLinkItems = styled('div')({
  // display: 'flex',
  // flexDirection: 'column',
  padding: 15,
});

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLinkItems>
        <Typography>Documentation &amp; Help</Typography>
        <Typography>Contact Information</Typography>
        <Typography>About</Typography>
      </FooterLinkItems>
    </FooterContainer>
  );
};

export default Footer;
