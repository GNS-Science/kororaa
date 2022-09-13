import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Container, Toolbar, IconButton, Box, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.navbar.main,
  height: 100,
  borderBottom: `5px solid ${theme.palette.navbar.accent}`,
  // display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
}));

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-around',
});

interface MenuPageItem {
  name: string;
  path?: string;
  submenu?: MenuPageItem[];
}

interface MenuProps {
  pages: MenuPageItem[];
}

interface SubMenuProps {
  pages: MenuPageItem[];
  anchorElNav: HTMLElement | null;
  setAnchorElNav: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  open: boolean;
}

interface FluidMenuProps {
  page: MenuPageItem;
}

const SubMenu: React.FC<SubMenuProps> = ({ pages, anchorElNav, setAnchorElNav, open }: SubMenuProps) => {
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
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
      open={open}
      onClose={handleCloseNavMenu}
    >
      {pages.map((page) => (
        <MenuItem key={page.name} component={Link} to={page.path || ''}>
          <Typography onClick={handleCloseNavMenu} variant="h5" textAlign="center">
            {page.name}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

const HamburgerMenu: React.FC<MenuProps> = ({ pages }: MenuProps) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <>
      <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
        <MenuIcon />
      </IconButton>
      <SubMenu open={Boolean(anchorElNav)} pages={pages} anchorElNav={anchorElNav} setAnchorElNav={setAnchorElNav} />
    </>
  );
};

const FluidMenuItem: React.FC<FluidMenuProps> = ({ page }: FluidMenuProps) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  if (page.path) {
    return (
      <MenuItem key={page.name} component={Link} to={page.path}>
        <Typography variant="h5" textAlign="center">
          {page.name}
        </Typography>
      </MenuItem>
    );
  }
  return (
    <>
      <MenuItem sx={{ textTransform: 'none' }} key={page.name} onClick={handleOpenNavMenu} component={Button}>
        <Typography variant="h5" textAlign="center">
          {page.name}
        </Typography>
      </MenuItem>
      {page.submenu && <SubMenu open={Boolean(anchorElNav)} pages={page.submenu} anchorElNav={anchorElNav} setAnchorElNav={setAnchorElNav} />}
    </>
  );
};

const MainMenu: React.FC<MenuProps> = ({ pages }: MenuProps) => {
  return (
    <>
      {pages.map((page) => (
        <FluidMenuItem key={page.name} page={page} />
      ))}
    </>
  );
};

const NavBar: React.FC = () => {
  const pages = [
    {
      name: 'Site Hazard',
      submenu: [
        { name: 'Curves and Spectra', path: '/HazardCurves' },
        { name: 'Disaggregations', path: '/Disaggs' },
      ],
    },
    { name: 'Hazard Maps', path: '/HazardMaps' },
    { name: 'Coming Features', path: '/Previews' },
    {
      name: 'Resources',
      submenu: [{ name: 'Science reports', path: '/Resources/ScienceReports' }],
    },
    {
      name: 'Help',
      submenu: [
        { name: 'Help', path: '/Help' },
        { name: 'About', path: '/About' },
        { name: 'Contacts', path: '/Contacts' },
      ],
    },
  ];

  const hamburgerPages = [
    { name: 'Curves and Spectra', path: '/HazardCurves' },
    { name: 'Disaggregations', path: '/Disaggs' },
    { name: 'Hazard Maps', path: '/HazardMaps' },
    { name: 'Coming Features', path: '/Previews' },
    { name: 'Science Reports', path: '/Resources/ScienceReports' },
    { name: 'Help', path: '/Help' },
    { name: 'About', path: '/About' },
    { name: 'Contacts', path: '/Contacts' },
  ];

  return (
    <React.StrictMode>
      <StyledAppBar position="static">
        <Container maxWidth={false}>
          <StyledToolbar disableGutters>
            <Link to="/">
              <img src="/images/NSHM_logo_black_cropped_blue.png" height="40" alt="NSHM logo" />
              {/*<img src="/images/NSHM_logo_black.png" height="70" alt="NSHM logo" />*/}
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <HamburgerMenu pages={hamburgerPages} />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <MainMenu pages={pages} />
            </Box>
            {/*<CardMedia component="img" height="100" image="/images/2GNS_logo_HORZ.png" alt="GNS logo" />*/}
            <img src="/images/2GNS_logo_HORZ.png" height="80" alt="GNS logo" />
          </StyledToolbar>
        </Container>
      </StyledAppBar>
    </React.StrictMode>
  );
};

export default NavBar;
