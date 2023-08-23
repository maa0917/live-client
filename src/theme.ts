import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#757575',
    },
    background: {
      default: '#f5f5f5',
      paper: '#fff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
});

export default theme;
