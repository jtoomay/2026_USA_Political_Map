import type { StateElectionData } from '@/api/elections'

export const kentucky: StateElectionData = {
  slug: 'kentucky',
  name: 'Kentucky',
  postalCode: 'KY',
  senate: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: null,
    status:
      'Six-term Sen. Mitch McConnell (R) is not seeking an eighth term, opening the seat for the first time since 2010. Rep. Andy Barr won the May 19, 2026 Republican primary with 60.5% over former Attorney General Daniel Cameron; former state Rep. Charles Booker won the Democratic primary with 47% over 2020 nominee Amy McGrath and state House Minority Leader Pamela Stevenson. Barr and Booker face off in the November 3 general election for the open seat.',
    candidates: [
      { name: 'Andy Barr', party: 'R', incumbent: false, winProbability: 96 },
      { name: 'Charles Booker', party: 'D', incumbent: false, winProbability: 4 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — Kentucky Senate 2026 (Solid Republican)',
        sourceUrl:
          'https://www.cookpolitical.com/analysis/senate/kentucky-senate/trump-picks-barr-his-horse-kentucky-senate-race',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'R',
        source: 'Inside Elections — Kentucky Senate 2026 (Solid Republican)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=ky&office=senate',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Safe',
        leaning: 'R',
        source: 'Decision Desk HQ — 2026 Senate forecast (Solid R)',
        sourceUrl: 'https://votes.decisiondeskhq.com/forecast/2026/senate',
      },
    ],
    polls: [],
  },
  governor: null,
  house: {
    totalSeats: 6,
    democratSeats: 1,
    republicanSeats: 5,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'ky-headline-1',
      title: 'Charles Booker wins Democratic primary for US Senate in Kentucky, will face Barr',
      sourceName: 'WKMS',
      sourceUrl:
        'https://www.wkms.org/2026-05-19/charles-booker-wins-democratic-primary-for-us-senate-in-kentucky-will-face-barr',
      publishedAt: '2026-05-19',
      summary:
        'Booker defeated 2020 nominee Amy McGrath and state House Minority Leader Pamela Stevenson to win the Democratic nomination and will face Republican Andy Barr in November.',
      race: 'senate',
    },
    {
      id: 'ky-headline-2',
      title: "Charles Booker's Chances of Flipping Mitch McConnell's Kentucky Senate Seat",
      sourceName: 'Newsweek',
      sourceUrl: 'https://www.newsweek.com/chances-flipping-mitch-mcconnell-kentucky-senate-seat-11969868',
      publishedAt: '2026-05-19',
      summary:
        'Booker faces a steep climb against Andy Barr in a state Republicans have carried in every Senate race since 1992, with betting markets giving Democrats only single-digit odds.',
      race: 'senate',
    },
    {
      id: 'ky-headline-3',
      title: 'Kentucky Senate Primary Election 2026 Live Results: Follow Andy Barr, Charles Booker, Amy McGrath and More',
      sourceName: 'NBC News',
      sourceUrl: 'https://www.nbcnews.com/politics/2026-primary-elections/kentucky-senate-results',
      publishedAt: '2026-05-19',
      race: 'senate',
    },
  ],
}
