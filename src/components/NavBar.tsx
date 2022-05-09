import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const NavBarContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.info.main,
  height: 120,
  borderBottom: `10px solid ${theme.palette.primary.main}`,
  alignItems: 'center',
  justifyContent: 'space-around',
}));

const LinkItems = styled('div')({
  height: '85%',
  width: '60%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'flex-end',
});

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <img src="/GNS.png" />
      <LinkItems>
        <Typography variant="h5">Hazard Curves</Typography>
        <Typography variant="h5">Hazard Maps</Typography>
        <Typography variant="h5">Rupture Sets</Typography>
        <Typography variant="h5">Info &amp; Input Files</Typography>
        <Typography variant="h5">Help</Typography>
      </LinkItems>
      <img src="/NSHM.png" />
    </NavBarContainer>
  );
};

export default NavBar;
