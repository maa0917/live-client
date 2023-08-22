import type { FC } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import type { Live } from './components/LiveList';
import LiveList from './components/LiveList';

const App: FC = () => {
  const lives: Live[] = [
    {
      id: 1,
      band: 'Azami',
      eventDate: '2024-01-02T09:00:00.000Z',
      title: 'SOULJAPAN & ANTIKNOCK pre .日本男児 vol.61',
      venue: '新宿ANTIKNOCK',
      act: 'Azami',
    },
    {
      id: 2,
      band: 'Azami',
      eventDate: '2023-09-03T09:00:00.000Z',
      title: 'FORWARD RELEASE TOUR 2023',
      venue: '新潟club RIVERST',
      act: 'Azami',
    },
    {
      id: 3,
      band: 'Azami',
      eventDate: '2023-08-26T09:00:00.000Z',
      title: 'FORWARD RELEASE TOUR 2023',
      venue: '岡山CRAZY MAMA 2nd room',
      act: 'Azami',
    },
    {
      id: 4,
      band: 'Azami',
      eventDate: '2023-09-09T09:00:00.000Z',
      title: 'FORWARD RELEASE TOUR 2023',
      venue: '甲府KAZOO HALL',
      act: 'Azami',
    },
    {
      id: 5,
      band: 'Azami',
      eventDate: '2023-08-13T09:00:00.000Z',
      title: 'FORWARD RELEASE TOUR 2023',
      venue: '仙台enn 3rd',
      act: 'Azami',
    },
    {
      id: 6,
      band: 'Azami',
      eventDate: '2023-09-06T09:00:00.000Z',
      title: 'B.B.STREET 26th Anniversary SP Party',
      venue: "川崎club CITTA' & A'TTIC",
      act: 'Azami',
    },
    {
      id: 7,
      band: 'Azami',
      eventDate: '2023-08-27T09:00:00.000Z',
      title: 'FORWARD RELEASE TOUR 2023',
      venue: '大阪心斎橋VARON',
      act: 'Azami',
    },
    {
      id: 8,
      band: 'Azami',
      eventDate: '2023-10-08T09:00:00.000Z',
      title: 'sinma pre “ever free”',
      venue: '駒ヶ根G-studio NIRVASH',
      act: 'Azami',
    },
  ];

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
        <LiveList lives={lives} />
      </ThemeProvider>
    </div>
  );
};

export default App;
