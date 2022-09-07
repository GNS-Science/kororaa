import React from 'react';
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
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
  '.Mui-selected': {
    backgroundColor: 'yellow !important',
  },
});

interface MenuPageItem {
  name: string;
  path?: string;
  submenu?: MenuPageItem[];
}

interface MenuProps {
  pages: MenuPageItem[];
}

interface MainMenuProps {
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
  const location = useLocation();
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
        <MenuItem selected={page.path === location.pathname} key={page.name} onClick={handleCloseNavMenu} component={Link} href={page.path}>
          <Typography variant="h5" textAlign="center">
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
  const location = useLocation();

  if (page.path) {
    return (
      <MenuItem selected={page.path === location.pathname} key={page.name} component={Link} href={page.path}>
        <Typography variant="h5" textAlign="center">
          {page.name}
        </Typography>
      </MenuItem>
    );
  }
  return (
    <>
      <MenuItem onClick={handleOpenNavMenu} selected={page.submenu && page.submenu.filter((page) => page.path === location.pathname).length > 0} key={page.name} component={Link} href={page.path}>
        <Typography variant="h5" textAlign="center">
          {page.name}
        </Typography>
      </MenuItem>
      {page.submenu && <SubMenu open={Boolean(anchorElNav)} pages={page.submenu} anchorElNav={anchorElNav} setAnchorElNav={setAnchorElNav} />}
    </>
  );
};

const MainMenu: React.FC<MainMenuProps> = ({ pages }: MainMenuProps) => {
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
        { name: 'Hazard Curves', path: '/HazardCurves' },
        { name: 'Disaggregations', path: '/Disaggs' },
      ],
    },
    { name: 'Hazard Maps', path: '/HazardMaps' },
    { name: 'Coming Features', path: '/Previews' },
    { name: 'Resources', path: '/Resources' },
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
    { name: 'Hazard Curves', path: '/HazardCurves' },
    { name: 'Disaggregations', path: '/Disaggs' },
    { name: 'Hazard Maps', path: '/HazardMaps' },
    { name: 'Coming Features', path: '/Previews' },
    { name: 'Resources', path: '/Resources' },
    { name: 'Help', path: '/Help' },
    { name: 'About', path: '/About' },
    { name: 'Contacts', path: '/Contacts' },
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
    </Box>
  );
};

export default NavBar;
