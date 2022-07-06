import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e97826',
    },
    secondary: {
      main: '#7f7f7f',
    },
    info: {
      main: '#d9d9d9',
    },
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
  [theme.breakpoints.down('md')]: {
    fontSize: '1.802rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.383rem',
  },
};

theme.typography.h2 = {
  fontSize: '2.074rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.602rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.296rem',
  },
};

theme.typography.h3 = {
  fontSize: '1.728rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.424rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.215rem',
  },
};

theme.typography.h4 = {
  fontSize: '1.44rem',
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
