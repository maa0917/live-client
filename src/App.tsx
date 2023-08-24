import { useEffect, type FC } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import LiveList from './components/LiveList';
import theme from './theme';

const App: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash.length === 0) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route path="/" element={<LiveList />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
