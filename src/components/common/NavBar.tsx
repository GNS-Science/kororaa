import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Typography, Container, Toolbar, IconButton, Box, Menu, MenuItem, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.info.main,
  height: 120,
  borderBottom: `10px solid ${theme.palette.primary.main}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
}));

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-around',
});

const NavBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = [
    { name: 'Hazard Curves', path: '/HazardCurves' },
    { name: 'Hazard Maps', path: '/HazardMaps' },
    { name: 'Rupture Sets', path: '/RuptureSets' },
    { name: 'Info & Input Files', path: '/info' },
    { name: 'Help', path: '/help' },
  ];

  return (
    <Box sx={{ flexShrink: 0 }}>
      <StyledAppBar position="static">
        <Container maxWidth="xl">
          <StyledToolbar disableGutters>
            <Link href="/">
              <img src="/NSHM.png" />
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography variant="h5" textAlign="center">
                      <Link href={page.path} underline="none" color="black">
                        {page.name}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography variant="h5">
                    <Link href={page.path} underline="none" color="black">
                      {page.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Box>
            <img src="/GNS.png" />
          </StyledToolbar>
        </Container>
      </StyledAppBar>
    </Box>
  );
};

export default NavBar;
