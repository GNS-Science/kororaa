import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const FooterContainer = styled('footer')(({ theme }) => ({
  width: '100%',
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
  display: 'flex',
  flexDirection: 'column',
  padding: 15,
});

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLinkItems>
        <Link underline="hover" component={RouterLink} color="inherit" to="/TechInfo">
          Technical Info
        </Link>
        <Link underline="hover" component={RouterLink} color="inherit" to="/Contacts">
          Contacts
        </Link>
        <Link underline="hover" component={RouterLink} color="inherit" to="/About">
          About
        </Link>
      </FooterLinkItems>
    </FooterContainer>
  );
};

export default Footer;
