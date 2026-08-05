import type { StateElectionData } from '@/api/elections'

export const arkansas: StateElectionData = {
  slug: 'arkansas',
  name: 'Arkansas',
  postalCode: 'AR',
  senate: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: { name: 'Tom Cotton', party: 'R' },
    status:
      'Incumbent Sen. Tom Cotton (R), who won his primary with over 81% of the vote, is seeking a third term against Democratic farmer Hallie Shoffner and Libertarian Jeff Wadlin in this heavily Republican state.',
    candidates: [
      { name: 'Tom Cotton', party: 'R', incumbent: true, winProbability: 95 },
      { name: 'Hallie Shoffner', party: 'D', incumbent: false, winProbability: 4 },
      { name: 'Jeff Wadlin', party: 'I', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — 2026 Arkansas Senate election ratings',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Arkansas',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Arkansas Senate election ratings",
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Arkansas',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'R',
        source: 'Inside Elections — 2026 Arkansas Senate election ratings',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Arkansas',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Safe',
        leaning: 'R',
        source: 'Decision Desk HQ — 2026 Arkansas Senate election ratings',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Arkansas',
      },
    ],
    polls: [
      {
        id: 'ar-senate-2026-02-09-grayhouse',
        pollster: 'GrayHouse (R)',
        dateConducted: '2026-02-09',
        sampleSize: 550,
        results: [
          { candidateName: 'Tom Cotton', percentage: 58 },
          { candidateName: 'Hallie Shoffner', percentage: 36 },
        ],
        sourceName: 'Wikipedia — 2026 United States Senate election in Arkansas',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Arkansas',
      },
    ],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: { name: 'Sarah Huckabee Sanders', party: 'R' },
    status:
      'Incumbent Gov. Sarah Huckabee Sanders (R), unopposed in her primary, is seeking a second term against Democratic state Sen. Fredrick Love and Libertarian Colt Shelby.',
    candidates: [
      { name: 'Sarah Huckabee Sanders', party: 'R', incumbent: true, winProbability: 95 },
      { name: 'Fredrick Love', party: 'D', incumbent: false, winProbability: 4 },
      { name: 'Colt Shelby', party: 'I', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — 2026 Arkansas gubernatorial election ratings',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Arkansas_gubernatorial_election',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Arkansas gubernatorial election ratings",
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Arkansas_gubernatorial_election',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'R',
        source: 'Inside Elections — 2026 Arkansas gubernatorial election ratings',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Arkansas_gubernatorial_election',
      },
      // Decision Desk HQ: N/A — no Safe/Likely/Lean/Toss-up category found for
      // this race on DDHQ's own site or Wikipedia's ratings table; omitted
      // rather than guessed.
    ],
    polls: [], // N/A — no public general-election polling found for this race (USPollingData's own writeup explicitly notes "no competitive Democratic challenge is expected" and lists no matchup numbers)
  },
  house: {
    totalSeats: 4,
    democratSeats: 0,
    republicanSeats: 4,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'ar-headline-1',
      title:
        "Sanders, democratic challengers, among the 272 candidates to file on opening day of Arkansas' election filing period",
      sourceName: 'Arkansas Democrat-Gazette',
      sourceUrl:
        'https://www.arkansasonline.com/news/2025/nov/03/candidates-for-state-and-federal-offices-will/',
      publishedAt: '2025-11-03',
      summary: "Gov. Sarah Huckabee Sanders and her Democratic and Libertarian challengers filed on the first day of Arkansas's 2026 candidate filing period.",
    },
    {
      id: 'ar-headline-2',
      title: 'Republican Sen. Tom Cotton focus of GOP, Democratic primaries',
      sourceName: 'Arkansas Advocate',
      sourceUrl: 'https://arkansasadvocate.com/2026/02/17/republican-sen-tom-cotton-focus-of-gop-democratic-primaries/',
      publishedAt: '2026-02-17',
      race: 'senate',
    },
    {
      id: 'ar-headline-3',
      title: 'Love wins Democratic nomination for Arkansas governor',
      sourceName: 'Arkansas Advocate',
      sourceUrl: 'https://arkansasadvocate.com/2026/03/03/love-wins-democratic-nomination-for-arkansas-governor/',
      publishedAt: '2026-03-03',
      summary: 'State Sen. Fredrick Love won the Democratic nomination to challenge Gov. Sarah Huckabee Sanders.',
      race: 'governor',
    },
  ],
}
