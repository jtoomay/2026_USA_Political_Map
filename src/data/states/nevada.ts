import type { StateElectionData } from '@/api/elections'

export const nevada: StateElectionData = {
  slug: 'nevada',
  name: 'Nevada',
  postalCode: 'NV',
  senate: null,
  governor: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: { name: 'Joe Lombardo', party: 'R' },
    status:
      "Gov. Joe Lombardo won the June 9 Republican primary with 91% of the vote and is seeking a second term. Attorney General Aaron Ford won the Democratic primary with 63% over Washoe County commission chair Alexis Hill. National forecasters rate Lombardo among the most vulnerable Republican governors on the ballot in 2026, and polling has shown a persistent dead heat despite tens of millions of dollars in outside spending against Ford.",
    candidates: [
      { name: 'Joe Lombardo', party: 'R', incumbent: true, winProbability: 53 },
      { name: 'Aaron Ford', party: 'D', incumbent: false, winProbability: 47 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Toss-up',
        leaning: null,
        source: 'Cook Political Report — Nevada Governor 2026',
        sourceUrl: 'https://www.cookpolitical.com/governor/race/479546',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Lean',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Governor ratings",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Lean',
        leaning: 'R',
        source: 'Inside Elections — Nevada Governor 2026',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=nv&office=governor',
      },
    ],
    polls: [
      {
        id: 'nv-governor-2026-07-16-ppp',
        pollster: 'Public Policy Polling (D)',
        dateConducted: '2026-07-16',
        sampleSize: 558,
        results: [
          { candidateName: 'Joe Lombardo', percentage: 44 },
          { candidateName: 'Aaron Ford', percentage: 44 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Nevada_gubernatorial_election',
      },
      {
        id: 'nv-governor-2026-07-12-wedgewood',
        pollster: 'Wedgewood Polls (D)',
        dateConducted: '2026-07-12',
        sampleSize: 700,
        results: [
          { candidateName: 'Joe Lombardo', percentage: 50 },
          { candidateName: 'Aaron Ford', percentage: 47 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Nevada_gubernatorial_election',
      },
      {
        id: 'nv-governor-2026-05-11-gsg',
        pollster: 'Global Strategy Group (D)',
        dateConducted: '2026-05-11',
        sampleSize: 700,
        results: [
          { candidateName: 'Joe Lombardo', percentage: 45 },
          { candidateName: 'Aaron Ford', percentage: 42 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Nevada_gubernatorial_election',
      },
      {
        id: 'nv-governor-2026-03-13-noble',
        pollster: 'Noble Predictive Insights',
        dateConducted: '2026-03-13',
        sampleSize: 845,
        results: [
          { candidateName: 'Joe Lombardo', percentage: 39 },
          { candidateName: 'Aaron Ford', percentage: 38 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Nevada_gubernatorial_election',
      },
    ],
  },
  house: {
    totalSeats: 4,
    democratSeats: 3,
    republicanSeats: 1,
    independentSeats: 0,
    majorityParty: 'D',
  },
  headlines: [
    {
      id: 'nv-headline-1',
      title: 'Aaron Ford and Joe Lombardo tied at 44% in new Nevada gubernatorial poll',
      sourceName: 'Las Vegas Sun',
      sourceUrl: 'https://lasvegassun.com/news/2026/jul/22/aaron-ford-and-joe-lombardo-tie-at-44-in-new-nevad/',
      publishedAt: '2026-07-22',
      summary:
        'A Public Policy Polling survey found the governor and his Democratic challenger deadlocked, with both campaigns and allied groups pouring tens of millions of dollars into the race.',
      race: 'governor',
    },
    {
      id: 'nv-headline-2',
      title: 'Newsom stumps for Ford and Horsford',
      sourceName: 'Nevada Current',
      sourceUrl: 'https://nevadacurrent.com/2026/07/13/newsom-stumps-for-ford-and-horsford/',
      publishedAt: '2026-07-13',
      summary:
        'California Gov. Gavin Newsom campaigned in Nevada on behalf of Democratic gubernatorial nominee Aaron Ford and Rep. Steven Horsford as national Democrats look to flip the governorship.',
      race: 'governor',
    },
  ],
}
