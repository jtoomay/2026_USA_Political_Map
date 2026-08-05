import type { StateElectionData } from '@/api/elections'

export const delaware: StateElectionData = {
  slug: 'delaware',
  name: 'Delaware',
  postalCode: 'DE',
  senate: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: { name: 'Chris Coons', party: 'D' },
    status:
      "Sen. Chris Coons is seeking a third full term in a state that hasn't elected a Republican senator since 1994. He faces only minor opposition ahead of the September 15, 2026 primary. The most notable Republican candidate is Michael Katz, a physician and former Democratic state senator who ran as the 2024 independent nominee for this seat before switching to run as a Republican; he faces John Shulli in the GOP primary, with former state GOP chair Julianne Murray endorsing Katz as the more electable option. Dexter Bland is running as an independent. All four major forecasters rate the race Safe/Solid Democratic.",
    candidates: [
      { name: 'Chris Coons', party: 'D', incumbent: true, winProbability: 96 },
      { name: 'Michael Katz', party: 'R', incumbent: false, winProbability: 3 },
      { name: 'Dexter Bland', party: 'I', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — Delaware Senate 2026 (Solid D, April 13, 2026)',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Delaware',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 Delaware Senate ratings (Safe D, March 4, 2026)",
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Delaware',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'D',
        source: 'Inside Elections — Delaware Senate 2026 (Solid D, April 23, 2026)',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Delaware',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Safe',
        leaning: 'D',
        source: 'Decision Desk HQ — 2026 Senate forecast (Safe D, July 14, 2026)',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Delaware',
      },
    ],
    polls: [],
  },
  // No 2026 gubernatorial election: Gov. Matt Meyer (D) was elected in
  // November 2024 to a four-year term running through January 2029.
  governor: null,
  house: {
    totalSeats: 1,
    democratSeats: 1,
    republicanSeats: 0,
    independentSeats: 0,
    majorityParty: 'D',
  },
  headlines: [
    {
      id: 'de-headline-1',
      title: 'GIFFORDS PAC Endorses Sen. Chris Coons in Delaware',
      sourceName: 'GIFFORDS',
      sourceUrl: 'https://giffords.org/press-release/2026/07/giffords-pac-endorses-sen-chris-coons-in-delaware/',
      publishedAt: '2026-07-01',
      summary:
        "The gun-safety group founded by former Rep. Gabrielle Giffords endorsed Sen. Chris Coons's reelection bid, citing his work on the Bipartisan Safer Communities Act.",
      race: 'senate',
    },
    {
      id: 'de-headline-2',
      title: 'Katz endorsement helps define early U.S. Senate primary fight',
      sourceName: 'Delaware LIVE News',
      sourceUrl: 'https://delawarelive.com/katz-endorsement-helps-define-early-u-s-senate-primary-fight/',
      publishedAt: '2026-07-08',
      summary:
        "Former Delaware GOP chair Julianne Murray endorsed Michael Katz over rival John Shulli in the Republican Senate primary, framing electability against Sen. Chris Coons as the key question for primary voters.",
      race: 'senate',
    },
  ],
}
