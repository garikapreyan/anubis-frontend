import {createTheme} from '@mui/material';

const theme = createTheme({
  spacing: 8,
  transitions: {
    duration: {
      st: 1300,
    },
  },
  typography: {
    fontFamily: 'Calibri, sans-serif',
    fontSize: 16,
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#231f20',
      color1: '#abd38d',
      color: '#6d7b61',
    },
    icon: {
      main: '#d6d6d6',
    },
  },
});

export default theme;
