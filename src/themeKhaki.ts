import { createTheme } from '@mui/material/styles';

// const OLD_PRIMARY_ORANGE = '#e97826';
// const OLD_SECONDARY_GREY = '#7f7f7f';
const GNS_BLUE = '#072B61';
const GNS_KHAKI = '#a71930';

const theme = createTheme({
  palette: {
    primary: {
      main: GNS_KHAKI,
    },
    secondary: {
      main: GNS_BLUE,
    },
    info: {
      main: '#d9d9d9',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    // contrastThreshold: 50,
  },
  typography: {
    fontSize: 14,
    h6: {
      fontSize: '1rem',
    },
  },
  zIndex: { modal: 120000, drawer: 110000 },
});

theme.typography.h1 = {
  fontWeight: 700,
  fontSize: '2rem',
  color: GNS_KHAKI,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.802rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.383rem',
  },
};

theme.typography.h2 = {
  fontSize: '2.074rem',
  color: GNS_KHAKI,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.602rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.296rem',
  },
};

theme.typography.h3 = {
  fontSize: '1.728rem',
  color: GNS_KHAKI,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.424rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.215rem',
  },
};

theme.typography.h4 = {
  fontSize: '1.44rem',
  color: GNS_KHAKI,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.266rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.138rem',
  },
};

theme.typography.h5 = {
  fontSize: '1.2rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.125rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.067rem',
  },
};

export default theme;
