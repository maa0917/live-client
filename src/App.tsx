import type { FC } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import LiveList from './components/LiveList';
import theme from './theme';

const App: FC = () => {
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
