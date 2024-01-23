import { createTheme } from "@mui/material/styles";

const OLD_PRIMARY_ORANGE = "#e97826";
// const OLD_SECONDARY_GREY = '#7f7f7f';
// const OLD_GREY = '#d9d9d9';
const GNS_BLUE = "#072B61";
// const GNS_KHAKI = '#a71930';
// const GULF_GREEN = '#a1d0ea'; //Original Gulf
// const GULF_BLUE = '#bae0f6';
// const GULF_BLUE_FADED = '#cfe9f7';
const GULF_BLUE_FADED_MORE = "#daeaf3";
// const GULF_ORANGE = '#fc6200';

declare module "@mui/material/styles" {
  interface Palette {
    navbar: Palette["primary"];
  }
  interface PaletteOptions {
    navbar?: PaletteOptions["primary"];
  }
  interface PaletteColor {
    accent?: string;
  }
  interface SimplePaletteColorOptions {
    accent?: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: OLD_PRIMARY_ORANGE,
    },
    navbar: {
      main: GULF_BLUE_FADED_MORE,
      accent: GNS_BLUE, // GULF_GREEN
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 50,
  },
  typography: {
    fontSize: 14,
    h6: {
      fontSize: "1rem",
    },
  },
  zIndex: { modal: 120000, drawer: 110000, tooltip: 130000 },
});

theme.typography.h1 = {
  // fontWeight: 200,
  fontSize: "2.5rem",
  // [theme.breakpoints.down('xl')]: {
  //   fontSize: '2.074rem',
  // },
  color: GNS_BLUE,
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.802rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.383rem",
  },
};

theme.typography.h2 = {
  fontSize: "2.074rem",
  color: GNS_BLUE,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.602rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.296rem",
  },
};

theme.typography.h3 = {
  fontSize: "1.728rem",
  color: GNS_BLUE,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.424rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.215rem",
  },
};

theme.typography.h4 = {
  fontSize: "1.44rem",
  color: GNS_BLUE,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.266rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.138rem",
  },
};

theme.typography.h5 = {
  fontSize: "1.2rem",
  color: GNS_BLUE,
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.067rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.067rem",
  },
};

export default theme;
