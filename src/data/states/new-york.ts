import type { StateElectionData } from '@/api/elections'

export const newYork: StateElectionData = {
  slug: 'new-york',
  name: 'New York',
  postalCode: 'NY',
  senate: null,
  governor: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: { name: 'Kathy Hochul', party: 'D' },
    status:
      'Gov. Kathy Hochul is running for a second full term with New York City Council Speaker Adrienne Adams as her new running mate, after Lt. Gov. Antonio Delgado ended his primary challenge in February 2026. Rep. Elise Stefanik dropped her bid for the Republican nomination in December 2025 following Trump\'s endorsement of Nassau County Executive Bruce Blakeman, who is unopposed for the Republican and Conservative Party lines. No Republican has won a New York gubernatorial race since George Pataki in 2002, though a July 2026 poll commissioned by a pro-Blakeman super PAC showed the race tightening amid soft approval numbers for Hochul.',
    candidates: [
      { name: 'Kathy Hochul', party: 'D', incumbent: true, winProbability: 87 },
      { name: 'Bruce Blakeman', party: 'R', incumbent: false, winProbability: 12 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — New York Governor 2026',
        sourceUrl: 'https://www.cookpolitical.com/governor/race/479561',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 Governor ratings",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Likely',
        leaning: 'D',
        source: 'Inside Elections — New York Governor 2026',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=ny&office=governor',
      },
    ],
    polls: [
      {
        id: 'ny-governor-2026-07-07-redoak',
        pollster: 'Red Oak Strategic',
        dateConducted: '2026-07-12',
        sampleSize: 2000,
        results: [
          { candidateName: 'Kathy Hochul', percentage: 47 },
          { candidateName: 'Bruce Blakeman', percentage: 43 },
        ],
        sourceName: 'VINnews (New York Post)',
        sourceUrl: 'https://vinnews.com/2026/07/28/nyp-hochul-leads-blakeman-by-4-points-in-gop-backed-poll-as-new-york-governors-race-tightens/',
      },
      {
        id: 'ny-governor-2026-06-30-coefficient',
        pollster: 'co/efficient',
        dateConducted: '2026-07-02',
        sampleSize: null,
        results: [
          { candidateName: 'Kathy Hochul', percentage: 47 },
          { candidateName: 'Bruce Blakeman', percentage: 41 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_New_York_gubernatorial_election',
      },
      {
        id: 'ny-governor-2026-06-17-siena',
        pollster: 'Siena College',
        dateConducted: '2026-06-23',
        sampleSize: null,
        results: [
          { candidateName: 'Kathy Hochul', percentage: 52 },
          { candidateName: 'Bruce Blakeman', percentage: 32 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_New_York_gubernatorial_election',
      },
    ],
  },
  house: {
    totalSeats: 26,
    democratSeats: 19,
    republicanSeats: 7,
    independentSeats: 0,
    majorityParty: 'D',
  },
  headlines: [
    {
      id: 'ny-headline-1',
      title: 'Bruce Blakeman launches bid for New York governor',
      sourceName: 'CBS New York',
      sourceUrl: 'https://www.cbsnews.com/newyork/video/bruce-blakeman-launches-bid-for-new-york-governor/',
      publishedAt: '2025-12-09',
      race: 'governor',
    },
    {
      id: 'ny-headline-2',
      title: 'Antonio Delgado ends his campaign for governor',
      sourceName: 'City & State NY',
      sourceUrl: 'https://www.cityandstateny.com/politics/2026/02/antonio-delgado-ends-his-campaign-governor/411320/',
      publishedAt: '2026-02-10',
      summary: "Lt. Gov. Antonio Delgado dropped his Democratic primary challenge to Gov. Kathy Hochul, clearing her path to the nomination.",
      race: 'governor',
    },
    {
      id: 'ny-headline-3',
      title: "Hochul Chooses Adrienne Adams to Join Her Re-election Ticket",
      sourceName: 'The New York Times',
      sourceUrl: 'https://www.nytimes.com/2026/02/04/nyregion/kathy-hochul-adrienne-adams-lieutenant-governor.html',
      publishedAt: '2026-02-04',
      race: 'governor',
    },
    {
      id: 'ny-headline-4',
      title: 'NYP: Hochul Leads Blakeman by 4 Points in GOP-Backed Poll as New York Governor’s Race Tightens',
      sourceName: 'VINnews',
      sourceUrl: 'https://vinnews.com/2026/07/28/nyp-hochul-leads-blakeman-by-4-points-in-gop-backed-poll-as-new-york-governors-race-tightens/',
      publishedAt: '2026-07-28',
      summary: 'A poll commissioned by a pro-Blakeman super PAC found Hochul leading by just 4 points, though other recent surveys show a wider margin.',
      race: 'governor',
    },
  ],
}
