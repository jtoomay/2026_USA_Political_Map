import type { StateElectionData } from '@/api/elections'

export const westVirginia: StateElectionData = {
  slug: 'west-virginia',
  name: 'West Virginia',
  postalCode: 'WV',
  senate: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: { name: 'Shelley Moore Capito', party: 'R' },
    status:
      "Sen. Shelley Moore Capito easily won renomination to a third term, taking 66.5% in a six-way May 12, 2026 Republican primary over state Sen. Tom Willis and four others. Former Morgantown city councilwoman Rachel Fetty Anderson won a competitive Democratic primary with 33.2%, narrowly beating former state Senate President Jeff Kessler and organizer Zach Shrewsbury. Constitution Party nominee S. Marshall Wilson and Veterans Party nominee Owen Nicholas Carlson are also on the general-election ballot. Capito enters the fall with an overwhelming financial advantage (roughly $4.4 million cash on hand to Anderson's $12,500) and endorsements from President Trump and Sen. Jim Justice; every major forecaster rates the seat Safe/Solid Republican.",
    candidates: [
      { name: 'Shelley Moore Capito', party: 'R', incumbent: true, winProbability: 95 },
      { name: 'Rachel Fetty Anderson', party: 'D', incumbent: false, winProbability: 3 },
      { name: 'S. Marshall Wilson', party: 'I', incumbent: false, winProbability: 1 },
      { name: 'Owen Nicholas Carlson', party: 'I', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — West Virginia Senate 2026 (Solid R, April 13, 2026)',
        sourceUrl: 'https://www.cookpolitical.com/ratings/senate-race-ratings',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Senate ratings (Safe R, March 4, 2026)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-senate/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'R',
        source: 'Inside Elections — West Virginia Senate 2026 (Solid R, April 23, 2026)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=wv&office=senate',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Safe',
        leaning: 'R',
        source: 'Decision Desk HQ — 2026 Senate forecast (Safe R, July 14, 2026)',
        sourceUrl: 'https://votes.decisiondeskhq.com/forecast/2026/senate',
      },
    ],
    polls: [],
  },
  governor: null,
  house: {
    totalSeats: 2,
    democratSeats: 0,
    republicanSeats: 2,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'wv-headline-1',
      title: 'Sen. Shelley Moore Capito announces 2026 reelection bid for U.S. Senate',
      sourceName: 'WV News',
      sourceUrl:
        'https://www.wvnews.com/news/wvnews/sen-shelley-moore-capito-announces-2026-reelection-bid-for-u-s-senate/article_a470c34e-d03f-4e4e-800d-66c1b7f06310.html',
      publishedAt: '2025-12-15',
      race: 'senate',
    },
    {
      id: 'wv-headline-2',
      title: 'Former WV Senate President Jeff Kessler enters 2026 U.S. Senate race',
      sourceName: 'WV News',
      sourceUrl:
        'https://www.wvnews.com/news/wvnews/former-wv-senate-president-jeff-kessler-enters-2026-u-s-senate-race/article_e6489b23-3685-4fd1-bf1b-71e8678c2bc0.html',
      publishedAt: '2026-01-30',
      summary: 'Jeff Kessler, a former state Senate president, joined the crowded Democratic primary field challenging Sen. Shelley Moore Capito.',
      race: 'senate',
    },
    {
      id: 'wv-headline-3',
      title: 'Shelley Moore Capito easily wins West Virginia GOP Senate primary',
      sourceName: 'The Hill',
      sourceUrl: 'https://thehill.com/homenews/campaign/5875700-shelley-moore-capito-west-virginia-senate-republican-primary/',
      publishedAt: '2026-05-13',
      summary: 'Capito defeated five Republican challengers to win renomination, setting up a general-election contest against Democrat Rachel Fetty Anderson.',
      race: 'senate',
    },
  ],
}
