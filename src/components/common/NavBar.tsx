import React from "react";
import { styled } from "@mui/material/styles";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Typography,
  Container,
  Toolbar,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ReactGA from "react-ga4";
import { useDetectAdBlock } from "adblock-detect-react";
import usePageTracking from "../../utils/usePageTracking";
import { GA_ID, GA_DEBUG_MODE } from "../../utils/environmentVariables";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.navbar.main,
  height: 100,
  borderBottom: `5px solid ${theme.palette.navbar.accent}`,
  alignItems: "center",
  justifyContent: "space-around",
  "&& .Mui-selected": {
    backgroundColor: theme.palette.navbar.main,
    textDecoration: "underline",
    textDecorationThickness: "2px",
    textDecorationColor: theme.palette.navbar.accent,
  },
}));

const StyledToolbar = styled(Toolbar)({
  justifyContent: "space-around",
});

const StyledAccordion = styled(Accordion)({
  boxShadow: "none",
  borderRadius: 0,
  root: {
    "&$expanded": {
      margin: "auto",
    },
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
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={open}
      onClose={handleCloseNavMenu}
    >
      {pages.map((page) => {
        if (page.submenu) {
          return (
            <div key={page.name}>
              <StyledAccordion disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography>{page.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {page.submenu.map((subpage) => (
                    <MenuItem
                      dense
                      className="hamburger-submenu-item"
                      key={subpage.name}
                      component={RouterLink}
                      to={subpage.path || ""}
                      onClick={() => {
                        handleCloseNavMenu();
                      }}
                      selected={location.pathname === subpage.path}
                    >
                      {subpage.name}
                    </MenuItem>
                  ))}
                </AccordionDetails>
              </StyledAccordion>
            </div>
          );
        } else {
          return (
            <MenuItem
              key={page.name}
              component={RouterLink}
              to={page.path || ""}
              onClick={() => {
                handleCloseNavMenu();
              }}
              selected={location.pathname === page.path}
            >
              {page.name}
            </MenuItem>
          );
        }
      })}
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
      <IconButton
        size="large"
        aria-label="hamburger menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
      >
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
      <MenuItem selected={page.path === location.pathname} key={page.name} component={RouterLink} to={page.path}>
        <Typography variant="h5" textAlign="center">
          {page.name}
        </Typography>
      </MenuItem>
    );
  }
  return (
    <>
      <MenuItem
        sx={{ textTransform: "none" }}
        key={page.name}
        onClick={handleOpenNavMenu}
        component={Button}
        selected={page.submenu && page.submenu.filter((page) => page.path === location.pathname).length > 0}
      >
        <Typography variant="h5" textAlign="center">
          {page.name}
        </Typography>
      </MenuItem>
      {page.submenu && (
        <SubMenu
          open={Boolean(anchorElNav)}
          pages={page.submenu}
          anchorElNav={anchorElNav}
          setAnchorElNav={setAnchorElNav}
        />
      )}
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
  const adBlockDetected = useDetectAdBlock();
  usePageTracking();
  React.useEffect(() => {
    if (!adBlockDetected && GA_ID) {
      ReactGA.initialize([
        {
          trackingId: GA_ID,
          gaOptions: {
            debug_mode: GA_DEBUG_MODE,
          },
          gtagOptions: {
            debug_mode: GA_DEBUG_MODE,
          },
        },
      ]);
    }
  }, [adBlockDetected]);

  const pages = [
    {
      name: "Hazard",
      submenu: [
        { name: "Curves and Spectra", path: "/HazardCurves" },
        { name: "Disaggregations", path: "/Disaggs" },
        { name: "Hazard Maps", path: "/HazardMaps" },
      ],
    },
    {
      name: "Ruptures",
      path: "/RuptureMap",
    },
    { name: "Coming Features", path: "/Previews" },
    {
      name: "Resources",
      submenu: [
        { name: "Science Reports", path: "/Resources/ScienceReports" },
        { name: "Other Documents", path: "/Resources/OtherDocuments" },
        { name: "Model Components", path: "/Resources/ModelComponents" },
        { name: "Model Versions", path: "/Resources/ModelVersions" },
      ],
    },
    {
      name: "Help",
      submenu: [
        { name: "About", path: "/About" },
        { name: "Technical Info", path: "/TechInfo" },
        { name: "Contacts", path: "/Contacts" },
        { name: "Releases", path: "/Releases" },
      ],
    },
  ];

  return (
    <React.StrictMode>
      <StyledAppBar position="static">
        <Container maxWidth={false}>
          <StyledToolbar disableGutters>
            <RouterLink to="/">
              <img src="/images/NSHM_logo_black_cropped_blue.png" height="40" alt="NSHM logo" />
              {/*<img src="/images/NSHM_logo_black.png" height="70" alt="NSHM logo" />*/}
            </RouterLink>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <HamburgerMenu pages={pages} />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <MainMenu pages={pages} />
            </Box>
            {/*<CardMedia component="img" height="100" image="/images/2GNS_logo_HORZ.png" alt="GNS logo" />*/}
            <Link
              target="_blank"
              rel="noopener"
              href="https://www.gns.cri.nz/research-projects/national-seismic-hazard-model/"
            >
              <img src="/images/2GNS_logo_HORZ.png" height="80" alt="GNS logo" />
            </Link>
          </StyledToolbar>
        </Container>
      </StyledAppBar>
    </React.StrictMode>
  );
};

export default NavBar;
