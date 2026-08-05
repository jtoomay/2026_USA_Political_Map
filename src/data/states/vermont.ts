import type { StateElectionData } from '@/api/elections'

export const vermont: StateElectionData = {
  slug: 'vermont',
  name: 'Vermont',
  postalCode: 'VT',
  senate: null,
  governor: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: { name: 'Phil Scott', party: 'R' },
    status:
      "Gov. Phil Scott is seeking a sixth two-year term as the presumptive Republican nominee; Lt. Gov. John Rodgers considered a primary challenge but opted to seek re-election to his own office instead. Economist Amanda Janoo (endorsed by the Vermont Progressive Party) and former Let's Grow Kids CEO Aly Richards are competing in the August 11, 2026 Democratic primary; AG Charity Clark and Treasurer Mike Pieciak both declined to run. Dean Roy is on the ballot for the minor Freedom and Unity Party. Scott — rated the most popular governor in the country by Morning Consult — remains heavily favored in this deeply blue state, though a late-July UNH poll found his approval rating slipping and a high share of undecided voters in general-election trial heats against either Democrat.",
    candidates: [
      { name: 'Phil Scott', party: 'R', incumbent: true, winProbability: 90 },
      { name: 'Aly Richards', party: 'D', incumbent: false, winProbability: 6 },
      { name: 'Amanda Janoo', party: 'D', incumbent: false, winProbability: 4 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — Vermont Governor 2026 (Solid R, September 11, 2025)',
        sourceUrl: 'https://www.cookpolitical.com/ratings/governor-race-ratings',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Governor ratings (Safe R, May 28, 2026)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'R',
        source: 'Inside Elections — Vermont Governor 2026 (Solid R, August 28, 2025)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=vt&office=governor',
      },
    ],
    polls: [
      {
        id: 'vt-governor-2026-07-20-unh-primary',
        pollster: 'University of New Hampshire Survey Center',
        dateConducted: '2026-07-20',
        sampleSize: 560,
        results: [
          { candidateName: 'Amanda Janoo', percentage: 26 },
          { candidateName: 'Aly Richards', percentage: 19 },
        ],
        sourceName: 'UNH Survey Center',
        sourceUrl: 'https://scholars.unh.edu/survey_center_polls/982',
      },
      {
        id: 'vt-governor-2026-07-20-unh-scott-janoo',
        pollster: 'University of New Hampshire Survey Center',
        dateConducted: '2026-07-20',
        sampleSize: 954,
        results: [
          { candidateName: 'Phil Scott', percentage: 44 },
          { candidateName: 'Amanda Janoo', percentage: 33 },
        ],
        sourceName: 'UNH Survey Center',
        sourceUrl: 'https://scholars.unh.edu/survey_center_polls/982',
      },
      {
        id: 'vt-governor-2026-07-20-unh-scott-richards',
        pollster: 'University of New Hampshire Survey Center',
        dateConducted: '2026-07-20',
        sampleSize: 954,
        results: [
          { candidateName: 'Phil Scott', percentage: 43 },
          { candidateName: 'Aly Richards', percentage: 35 },
        ],
        sourceName: 'UNH Survey Center',
        sourceUrl: 'https://scholars.unh.edu/survey_center_polls/982',
      },
    ],
  },
  house: {
    totalSeats: 1,
    democratSeats: 1,
    republicanSeats: 0,
    independentSeats: 0,
    majorityParty: 'D',
  },
  headlines: [
    {
      id: 'vt-headline-1',
      title: "Vermont Divided on Scott's Job Performance as VT Dems Undecided on Candidate to Face Him",
      sourceName: 'UNH Survey Center',
      sourceUrl: 'https://scholars.unh.edu/survey_center_polls/982',
      publishedAt: '2026-07-21',
      summary:
        "A UNH poll found Gov. Phil Scott's approval rating split and a large share of undecided voters in hypothetical general-election matchups against Democrats Amanda Janoo and Aly Richards.",
      race: 'governor',
    },
    {
      id: 'vt-headline-2',
      title: "Phil Scott's approval numbers slipping, new poll finds",
      sourceName: 'Vermont Public',
      sourceUrl:
        'https://news.google.com/rss/articles/CBMipwFBVV95cUxOTDZiMkJmQmVZaXpCa3VLWjZQYjlZWVVFalV0a1gxUWwxVkkyemJFQUctU1Rkd1JJTmJiQllwb1dOZzRuS3RodGpaVTdwdlJJVmQwcDFJZEZjTzFJTmlQVW1NTlZOMGx5VGtCNWRwRF9VQkxseWtDeERHVUdQbF80WFljODl1SlQ2VU1tdl8xLXhfNlhGZ3NUM09iZWp3eEdwb1dJTEplOA?oc=5',
      publishedAt: '2026-07-02',
      race: 'governor',
    },
    {
      id: 'vt-headline-3',
      title: 'First-Time Candidates Richards, Janoo Vie to Take on Scott',
      sourceName: 'Seven Days Vermont',
      sourceUrl:
        'https://news.google.com/rss/articles/CBMiogFBVV95cUxNRVhpWnk2cVZ3SEFOR3RwNUR5UDVPcURVWjRVZWtqTHhVTHZhZG04RVVBMXA5WkpqdFVpR2dOZ3hxNkFYeWNmSnRPMFYtT0F1MGhqSGZGY19sOVNJUS1hZDg2UElnbDE0aEVLSXZhemRtaDlpZjBnN3d5UWtaQXdfVkt4NzRUNjM4a05HbkdPeDJZX3JETmE3NXcwMXNyc3FpSXc?oc=5',
      publishedAt: '2026-07-29',
      race: 'governor',
    },
  ],
}
