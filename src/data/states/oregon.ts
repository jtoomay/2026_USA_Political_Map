import type { StateElectionData } from '@/api/elections'

export const oregon: StateElectionData = {
  slug: 'oregon',
  name: 'Oregon',
  postalCode: 'OR',
  senate: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: { name: 'Jeff Merkley', party: 'D' },
    status:
      'Sen. Jeff Merkley confirmed in mid-2025 he would seek a fourth term and defeated retired engineer Paul Wells in the Democratic primary. State Sen. David Brock Smith won a crowded seven-candidate Republican primary with about 30% of the vote. All four forecasters rate the seat Safe/Solid Democratic.',
    candidates: [
      { name: 'Jeff Merkley', party: 'D', incumbent: true, winProbability: 96 },
      { name: 'David Brock Smith', party: 'R', incumbent: false, winProbability: 4 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — Oregon Senate 2026',
        sourceUrl: 'https://www.cookpolitical.com/ratings/senate-race-ratings',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 Senate ratings",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-senate/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'D',
        source: 'Inside Elections — Oregon Senate 2026',
        sourceUrl: 'https://www.insideelections.com/ratings/senate',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Safe',
        leaning: 'D',
        source: 'Decision Desk HQ — 2026 Senate forecast',
        sourceUrl: 'https://votes.decisiondeskhq.com/forecast/2026/senate',
      },
    ],
    polls: [],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: { name: 'Tina Kotek', party: 'D' },
    status:
      'Gov. Tina Kotek is seeking a second term after announcing her reelection bid in December 2025, setting up a rematch with 2022 GOP nominee Christine Drazan, a former state House Republican leader. Both won their primaries against crowded fields of minor candidates. Ratings range from Lean to Likely Democratic, and recent polling has shown the race tightening, with one Republican-aligned poll putting Drazan ahead.',
    candidates: [
      { name: 'Tina Kotek', party: 'D', incumbent: true, winProbability: 65 },
      { name: 'Christine Drazan', party: 'R', incumbent: false, winProbability: 35 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Likely',
        leaning: 'D',
        source: 'Cook Political Report — Oregon Governor 2026',
        sourceUrl: 'https://www.cookpolitical.com/ratings/governor-race-ratings',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Likely',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 Governor ratings",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Lean',
        leaning: 'D',
        source: 'Inside Elections — Oregon Governor 2026',
        sourceUrl: 'https://www.insideelections.com/ratings/governor',
      },
    ],
    polls: [
      {
        id: 'or-governor-2026-06-24-pos',
        pollster: 'Public Opinion Strategies (R)',
        dateConducted: '2026-06-24',
        sampleSize: 600,
        results: [
          { candidateName: 'Christine Drazan', percentage: 48 },
          { candidateName: 'Tina Kotek', percentage: 44 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Oregon_gubernatorial_election',
      },
      {
        id: 'or-governor-2026-05-12-hoffman',
        pollster: 'Hoffman Research Group (R)',
        dateConducted: '2026-05-12',
        sampleSize: 603,
        results: [
          { candidateName: 'Tina Kotek', percentage: 45 },
          { candidateName: 'Christine Drazan', percentage: 45 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Oregon_gubernatorial_election',
      },
      {
        id: 'or-governor-2026-02-04-fm3',
        pollster: 'FM3 Research (D)',
        dateConducted: '2026-02-04',
        sampleSize: 1065,
        results: [
          { candidateName: 'Tina Kotek', percentage: 45 },
          { candidateName: 'Christine Drazan', percentage: 40 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Oregon_gubernatorial_election',
      },
    ],
  },
  house: {
    totalSeats: 6,
    democratSeats: 5,
    republicanSeats: 1,
    independentSeats: 0,
    majorityParty: 'D',
  },
  headlines: [
    {
      id: 'or-headline-1',
      title: "Oregon's Jeff Merkley will seek a 4th term in US Senate, ending speculation",
      sourceName: 'Oregon Public Broadcasting',
      sourceUrl: 'https://www.opb.org/article/2025/07/10/jeff-merkley-seeking-4th-term/',
      publishedAt: '2025-07-11',
      race: 'senate',
    },
    {
      id: 'or-headline-2',
      title: 'David Brock Smith wins GOP primary for US Senate in Oregon, will face Democratic incumbent Merkley',
      sourceName: 'Associated Press',
      sourceUrl: 'https://apnews.com/article/oregon-primary-election-2026-republican-senate-32d9f95d985f971380476246c6f6b723',
      publishedAt: '2026-05-22',
      race: 'senate',
    },
    {
      id: 'or-headline-3',
      title: 'Oregon Gov. Kotek announces 2026 reelection bid, setting up Drazan rematch',
      sourceName: 'The Oregonian',
      sourceUrl:
        'https://www.oregonlive.com/politics/2025/12/oregon-gov-kotek-announces-2026-reelection-bid-setting-up-drazan-rematch.html',
      publishedAt: '2025-12-04',
      race: 'governor',
    },
    {
      id: 'or-headline-4',
      title: 'These Republicans running for Oregon governor are raising the most money, readying TV ad blitz',
      sourceName: 'Oregon Live',
      sourceUrl:
        'https://www.oregonlive.com/politics/2026/04/these-republicans-running-for-oregon-governor-are-raising-the-most-money-readying-tv-ad-blitz.html',
      publishedAt: '2026-04-05',
      race: 'governor',
    },
    {
      id: 'or-headline-5',
      title: "New poll shows Oregon governor's race is far from settled",
      sourceName: 'The Oregonian',
      sourceUrl: 'https://www.oregonlive.com/politics/2026/07/new-poll-shows-oregon-governors-race-is-far-from-settled.html',
      publishedAt: '2026-07-09',
      race: 'governor',
    },
  ],
}
