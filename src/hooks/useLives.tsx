import { useEffect, useState } from 'react';

type Live = {
  id: number;
  eventDate: string;
  title: string;
  venue: string;
  acts: string[];
};

type UseLivesReturnType = {
  lives: Live[];
};

const useLives = (): UseLivesReturnType => {
  const [lives, setLives] = useState<Live[]>([]);

  useEffect(() => {
    const load = () => {
      const livesData = [
        {
          id: 1,
          eventDate: '2023.11.18(Sat)',
          title: 'D×D×J 2023 -TOKYO-',
          venue: '渋谷CLUB QUATTRO',
          acts: ['DEVILOOF', 'DEXCORE', 'JILUKA'],
        },
        {
          id: 2,
          eventDate: '2023-09-03T09:00:00.000Z',
          title: 'FORWARD RELEASE TOUR 2023',
          venue: '新潟club RIVERST',
          acts: ['Azami'],
        },
        {
          id: 3,
          eventDate: '2023-08-26T09:00:00.000Z',
          title: 'FORWARD RELEASE TOUR 2023',
          venue: '岡山CRAZY MAMA 2nd room',
          acts: ['Azami'],
        },
        {
          id: 4,
          eventDate: '2023-09-09T09:00:00.000Z',
          title: 'FORWARD RELEASE TOUR 2023',
          venue: '甲府KAZOO HALL',
          acts: ['Azami'],
        },
        {
          id: 5,
          eventDate: '2023-08-13T09:00:00.000Z',
          title: 'FORWARD RELEASE TOUR 2023',
          venue: '仙台enn 3rd',
          acts: ['Azami'],
        },
        {
          id: 6,
          eventDate: '2023-09-06T09:00:00.000Z',
          title: 'B.B.STREET 26th Anniversary SP Party',
          venue: "川崎club CITTA' & A'TTIC",
          acts: ['Azami'],
        },
        {
          id: 7,
          eventDate: '2023-08-27T09:00:00.000Z',
          title: 'FORWARD RELEASE TOUR 2023',
          venue: '大阪心斎橋VARON',
          acts: ['Azami'],
        },
        {
          id: 8,
          eventDate: '2023-10-08T09:00:00.000Z',
          title: 'sinma pre “ever free”',
          venue: '駒ヶ根G-studio NIRVASH',
          acts: ['Azami'],
        },
      ];

      setLives(livesData);
    };

    load();
  }, []);

  return { lives };
};

export default useLives;
