import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Typography, Container, Toolbar, IconButton, Box, Menu, MenuItem, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.info.main,
  height: 100,
  borderBottom: `5px solid ${theme.palette.secondary.main}`,
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
    { name: 'Coming Features', path: '/Previews' },
    { name: 'Resources', path: '/Resources' },
    { name: 'Help', path: '/Help' },
  ];

  return (
    <Box sx={{ flexShrink: 0 }}>
      <StyledAppBar position="static">
        <Container maxWidth="xl">
          <StyledToolbar disableGutters>
            <Link href="/">
              <img src="/images/NSHM_logo_black_cropped_blue.png" height="40" alt="NSHM logo" />
              {/*<img src="/images/NSHM_logo_black.png" height="70" alt="NSHM logo" />*/}
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
                  <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} href={page.path}>
                    <Typography variant="h5" textAlign="center">
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} href={page.path}>
                  <Typography variant="h5" textAlign="center">
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Box>
            {/*<CardMedia component="img" height="100" image="/images/2GNS_logo_HORZ.png" alt="GNS logo" />*/}
            <img src="/images/2GNS_logo_HORZ.png" height="80" alt="GNS logo" />
          </StyledToolbar>
        </Container>
      </StyledAppBar>
    </Box>
  );
};

export default NavBar;
