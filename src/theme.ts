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
    h5: {
      fontWeight: 700,
      fontSize: '1.2rem',
    },
  },
});

export default theme;
