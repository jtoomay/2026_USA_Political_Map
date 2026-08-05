import type { StateElectionData } from '@/api/elections'

export const hawaii: StateElectionData = {
  slug: 'hawaii',
  name: 'Hawaii',
  postalCode: 'HI',
  senate: null,
  governor: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: { name: 'Josh Green', party: 'D' },
    status:
      "Gov. Josh Green is seeking a second term and faces only token opposition in the August 8, 2026 Democratic primary from Duke Bourgoin, George Lucas-Tadeo and Lauren Shim, none of whom has reported raising campaign money against Green's roughly $3.5 million war chest. Businessman and 2022 nominee Gary Cordery and Ken Fujiyama are competing for the Republican nomination. All three forecasters that have rated the race call the general election Solid/Safe Democratic; Republicans haven't won a Hawaii governor's race since 2006.",
    candidates: [
      { name: 'Josh Green', party: 'D', incumbent: true, winProbability: 96 },
      { name: 'Gary Cordery', party: 'R', incumbent: false, winProbability: 2 },
      { name: 'Ken Fujiyama', party: 'R', incumbent: false, winProbability: 2 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — Hawaii Governor 2026 (Solid D, September 11, 2025)',
        sourceUrl: 'https://www.cookpolitical.com/governor/race/479491',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 Governor ratings (Safe D, September 4, 2025)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'D',
        source: 'Inside Elections — Hawaii Governor 2026 (Solid D, August 28, 2025)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=hi&office=governor',
      },
    ],
    polls: [],
  },
  house: {
    totalSeats: 2,
    democratSeats: 2,
    republicanSeats: 0,
    independentSeats: 0,
    majorityParty: 'D',
  },
  headlines: [
    {
      id: 'hi-headline-1',
      title: "Why Hawaiʻi Gov. Josh Green Is Getting A Free Ride In This Year's Primary",
      sourceName: 'Honolulu Civil Beat',
      sourceUrl:
        'https://www.civilbeat.org/2026/07/why-hawai%CA%BBi-gov-josh-green-is-getting-a-free-ride-in-this-years-primary/',
      publishedAt: '2026-07-26',
      summary:
        'Green faces three little-known Democratic primary rivals who have reported raising no campaign money, while his high approval ratings and roughly $3.5 million war chest have kept serious challengers out of the race.',
      race: 'governor',
    },
    {
      id: 'hi-headline-2',
      title: '2026 Election: Josh Green',
      sourceName: 'Honolulu Star-Advertiser',
      sourceUrl: 'https://www.staradvertiser.com/2026/07/09/election/2026-election-josh-green/',
      publishedAt: '2026-07-09',
      race: 'governor',
    },
  ],
}
