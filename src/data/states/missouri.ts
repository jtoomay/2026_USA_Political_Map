import type { StateElectionData } from '@/api/elections'

export const missouri: StateElectionData = {
  slug: 'missouri',
  name: 'Missouri',
  postalCode: 'MO',
  senate: null,
  governor: null,
  house: {
    totalSeats: 8,
    democratSeats: 2,
    republicanSeats: 6,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'mo-headline-1',
      title: "Cori Bush targets Wesley Bell's Israel stance in St. Louis congressional rematch",
      sourceName: 'Missouri Independent',
      sourceUrl:
        'https://missouriindependent.com/2026/07/14/cori-bush-targets-wesley-bells-israel-stance-in-st-louis-congressional-rematch/',
      publishedAt: '2026-07-14',
      summary:
        'Former Rep. Cori Bush is challenging Rep. Wesley Bell in a Democratic primary rematch for the 1st District, criticizing his position on Israel.',
      race: 'house',
    },
    {
      id: 'mo-headline-2',
      title: "Uncertain congressional map hangs over Missouri's crowded 5th District GOP primary",
      sourceName: 'News Tribune',
      sourceUrl: 'https://www.newstribune.com/news/2026/jul/22/uncertain-congressional-map-hangs-over-missouris/',
      publishedAt: '2026-07-22',
      summary:
        "Missouri's new Republican-drawn congressional map remains under legal challenge, adding uncertainty for candidates in the redrawn 5th District Republican primary.",
      race: 'house',
    },
    {
      id: 'mo-headline-3',
      title: "Cleaver 'never panicked' over redrawn district",
      sourceName: 'News Tribune',
      sourceUrl: 'https://www.newstribune.com/news/2026/jul/28/cleaver-never-panicked-over-redrawn-district/',
      publishedAt: '2026-07-28',
      summary:
        "Rep. Emanuel Cleaver addressed Missouri's new Republican-drawn congressional map, which reshaped his Kansas City-area 5th District ahead of the 2026 election.",
      race: 'house',
    },
  ],
}
