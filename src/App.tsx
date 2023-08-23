import type { FC } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import LiveList from './components/LiveList';

const App: FC = () => {
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

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <LiveList />
      </ThemeProvider>
    </div>
  );
};

export default App;
