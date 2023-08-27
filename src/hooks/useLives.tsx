import { useEffect, useState } from 'react';

type Live = {
  uuid: string;
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
          uuid: '4a7b8df2-a290-44b6-bc98-90a72b5f14c5',
          eventDate: '2023.11.18(Sat)',
          title: 'D×D×J 2023 -TOKYO-',
          venue: '渋谷CLUB QUATTRO',
          acts: ['DEVILOOF', 'DEXCORE', 'JILUKA'],
        },
        {
          uuid: '6ded12f9-1287-42ca-8354-dfc7fcc4a9d4',
          eventDate: '2023-09-03T09:00:00.000Z',
          title: 'FORWARD RELEASE TOUR 2023',
          venue: '新潟club RIVERST',
          acts: ['Azami'],
        },
        {
          uuid: '7b8e853f-dbbb-44ab-9f88-77f871ee2ddb',
          eventDate: '2023-08-26T09:00:00.000Z',
          title: 'FORWARD RELEASE TOUR 2023',
          venue: '岡山CRAZY MAMA 2nd room',
          acts: ['Azami'],
        },
        {
          uuid: '9b41a946-ae91-4678-9c33-9e7a4e41871e',
          eventDate: '2023-09-09T09:00:00.000Z',
          title: 'FORWARD RELEASE TOUR 2023',
          venue: '甲府KAZOO HALL',
          acts: ['Azami'],
        },
        {
          uuid: 'f6c8e643-b19b-4843-a456-1a0f73f8fabc',
          eventDate: '2023-08-13T09:00:00.000Z',
          title: 'FORWARD RELEASE TOUR 2023',
          venue: '仙台enn 3rd',
          acts: ['Azami'],
        },
        {
          uuid: 'c7ed9d09-7c28-43e6-8677-97921733e09b',
          eventDate: '2023-09-06T09:00:00.000Z',
          title: 'B.B.STREET 26th Anniversary SP Party',
          venue: "川崎club CITTA' & A'TTIC",
          acts: ['Azami'],
        },
        {
          uuid: '64c19a2f-9a5c-4b5a-9050-8b077cd16f4f',
          eventDate: '2023-08-27T09:00:00.000Z',
          title: 'FORWARD RELEASE TOUR 2023',
          venue: '大阪心斎橋VARON',
          acts: ['Azami'],
        },
        {
          uuid: 'f0ebbf10-58fe-4b76-83b7-c20435bc15e2',
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
