import type { StateElectionData } from '@/api/elections'

export const arizona: StateElectionData = {
  slug: 'arizona',
  name: 'Arizona',
  postalCode: 'AZ',
  // No 2026 U.S. Senate race: Mark Kelly (D, Class 3) serves until Jan. 2029
  // and Ruben Gallego (D, Class 1) serves until Jan. 2031 — neither seat is
  // up in 2026.
  senate: null,
  governor: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: { name: 'Katie Hobbs', party: 'D' },
    status:
      "Incumbent Gov. Katie Hobbs (D) is seeking reelection against Trump-endorsed U.S. Rep. Andy Biggs (R), who won the Republican nomination on July 21, 2026 over fellow Rep. David Schweikert and two lesser-known contenders. Attorney Karrin Taylor Robson, also Trump-endorsed, had been seen as a leading GOP contender but suspended her campaign in February 2026 rather than risk a divisive primary, clearing a path for Biggs. Rated among the most competitive governor's races in the country.",
    candidates: [
      { name: 'Katie Hobbs', party: 'D', incumbent: true, winProbability: 60 },
      { name: 'Andy Biggs', party: 'R', incumbent: false, winProbability: 38 },
      { name: 'Teri Hourihan', party: 'I', incumbent: false, winProbability: 1 },
      { name: 'Risa Lombardo', party: 'I', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Lean',
        leaning: 'D',
        source: 'Cook Political Report — 2026 Arizona gubernatorial election ratings',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Arizona_gubernatorial_election',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Lean',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 Arizona gubernatorial election ratings",
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Arizona_gubernatorial_election',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Toss-up',
        leaning: null,
        source: 'Inside Elections — 2026 Arizona gubernatorial election ratings',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Arizona_gubernatorial_election',
      },
      // Decision Desk HQ: N/A — no Safe/Likely/Lean/Toss-up category found for
      // this race on DDHQ's own site or Wikipedia's ratings table; omitted
      // rather than guessed.
    ],
    polls: [
      {
        id: 'az-governor-2026-05-07-noble-predictive-insights',
        pollster: 'Noble Predictive Insights',
        dateConducted: '2026-05-07',
        sampleSize: 996,
        results: [
          { candidateName: 'Katie Hobbs', percentage: 41 },
          { candidateName: 'Andy Biggs', percentage: 37 },
        ],
        sourceName: 'Wikipedia — 2026 Arizona gubernatorial election',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Arizona_gubernatorial_election',
      },
      {
        id: 'az-governor-2026-04-24-tipp-insights',
        pollster: 'TIPP Insights',
        dateConducted: '2026-04-24',
        sampleSize: 1159,
        results: [
          { candidateName: 'Katie Hobbs', percentage: 48 },
          { candidateName: 'Andy Biggs', percentage: 38 },
        ],
        sourceName: 'Wikipedia — 2026 Arizona gubernatorial election',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Arizona_gubernatorial_election',
      },
      {
        id: 'az-governor-2026-02-26-noble-predictive-insights',
        pollster: 'Noble Predictive Insights',
        dateConducted: '2026-02-26',
        sampleSize: 1023,
        results: [
          { candidateName: 'Katie Hobbs', percentage: 42 },
          { candidateName: 'Andy Biggs', percentage: 35 },
        ],
        sourceName: 'Wikipedia — 2026 Arizona gubernatorial election',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Arizona_gubernatorial_election',
      },
      {
        id: 'az-governor-2026-01-24-center-for-excellence-in-polling',
        pollster: 'Center for Excellence in Polling',
        dateConducted: '2026-01-24',
        sampleSize: 519,
        results: [
          { candidateName: 'Katie Hobbs', percentage: 50 },
          { candidateName: 'Andy Biggs', percentage: 41 },
        ],
        sourceName: 'Wikipedia — 2026 Arizona gubernatorial election',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Arizona_gubernatorial_election',
      },
    ],
  },
  house: {
    totalSeats: 9,
    democratSeats: 3,
    republicanSeats: 6,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'az-headline-1',
      title: 'Arizona Republicans choose Rep. Andy Biggs to challenge Gov. Hobbs',
      sourceName: 'AZFamily',
      sourceUrl: 'https://www.azfamily.com/2026/07/21/arizona-republicans-choose-challenger-gov-hobbs/',
      publishedAt: '2026-07-21',
      summary:
        'Andy Biggs won the Republican gubernatorial primary, setting up a Trump-backed challenge to Democratic incumbent Katie Hobbs.',
      race: 'governor',
    },
    {
      id: 'az-headline-2',
      title: 'Andy Biggs wins Republican nomination to challenge Democrat Katie Hobbs for Arizona governor',
      sourceName: 'PBS News',
      sourceUrl:
        'https://www.pbs.org/newshour/politics/andy-biggs-wins-republican-nomination-to-challenge-democrat-katie-hobbs-for-arizona-governor',
      publishedAt: '2026-07-21',
      race: 'governor',
    },
    {
      id: 'az-headline-3',
      title: 'Donald Trump-backed Andy Biggs to take on Katie Hobbs in competitive Arizona gubernatorial race',
      sourceName: 'The Hill',
      sourceUrl: 'https://thehill.com/homenews/campaign/5972326-arizona-governor-biggs-hobbs-election/',
      publishedAt: '2026-07-21',
      race: 'governor',
    },
    {
      id: 'az-headline-4',
      title: '2026 Elections: Karrin Taylor Robson suspends run for AZ governor',
      sourceName: 'FOX 10 Phoenix',
      sourceUrl: 'https://www.fox10phoenix.com/news/2026-elections-karrin-taylor-robson-suspends-run-az-governor',
      publishedAt: '2026-02-12',
      summary:
        'Robson, a wealthy Republican businesswoman making her second run for governor, dropped out to avoid a divisive GOP primary, clearing the field for Andy Biggs and David Schweikert.',
      race: 'governor',
    },
  ],
}
