import type { StateElectionData } from '@/api/elections'

export const virginia: StateElectionData = {
  slug: 'virginia',
  name: 'Virginia',
  postalCode: 'VA',
  senate: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: { name: 'Mark Warner', party: 'D' },
    status:
      "Sen. Mark Warner is seeking a fourth term after announcing his reelection campaign in December 2025. Democratic primary challengers Lorita Daniels and Gregory Eichelberger withdrew, leaving Warner the presumptive Democratic nominee ahead of the August 4, 2026 primary. On the Republican side, state Sen. Bryce Reeves dropped out in December 2025, narrowing the GOP field to three lesser-known contenders: retired Army Maj. Gen. Bert Mizusawa (a 2018 Senate candidate), Marine Corps Reserve Col. David Williams, and financial accountant Kim Farington. Former Gov. Glenn Youngkin and outgoing Attorney General Jason Miyares both declined to run. A June 2026 Public Sentiment Institute poll showed Warner leading each potential Republican opponent by a similar margin. All four major forecasters rate the general election Safe/Solid Democratic in a state Republicans haven't carried in a Senate race since 2002.",
    candidates: [
      { name: 'Mark Warner', party: 'D', incumbent: true, winProbability: 95 },
      { name: 'Bert Mizusawa', party: 'R', incumbent: false, winProbability: 2 },
      { name: 'David Williams', party: 'R', incumbent: false, winProbability: 2 },
      { name: 'Kim Farington', party: 'R', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — Virginia Senate 2026 (Solid D, April 13, 2026)',
        sourceUrl: 'https://www.cookpolitical.com/ratings/senate-race-ratings',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 Senate ratings (Safe D, March 4, 2026)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-senate/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'D',
        source: 'Inside Elections — Virginia Senate 2026 (Solid D, April 23, 2026)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=va&office=senate',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Safe',
        leaning: 'D',
        source: 'Decision Desk HQ — 2026 Senate forecast (Safe D, July 14, 2026)',
        sourceUrl: 'https://votes.decisiondeskhq.com/forecast/2026/senate',
      },
    ],
    polls: [
      {
        id: 'va-senate-2026-06-16-tpsi-mizusawa',
        pollster: 'The Public Sentiment Institute',
        dateConducted: '2026-06-16',
        sampleSize: 996,
        results: [
          { candidateName: 'Mark Warner', percentage: 51 },
          { candidateName: 'Bert Mizusawa', percentage: 33 },
        ],
        sourceName: 'The Public Sentiment Institute',
        sourceUrl: 'https://tpsiofficial.substack.com/p/tpsi-new-tpsi-senate-poll-confirms',
      },
      {
        id: 'va-senate-2026-06-16-tpsi-williams',
        pollster: 'The Public Sentiment Institute',
        dateConducted: '2026-06-16',
        sampleSize: 996,
        results: [
          { candidateName: 'Mark Warner', percentage: 51 },
          { candidateName: 'David Williams', percentage: 33 },
        ],
        sourceName: 'The Public Sentiment Institute',
        sourceUrl: 'https://tpsiofficial.substack.com/p/tpsi-new-tpsi-senate-poll-confirms',
      },
      {
        id: 'va-senate-2026-06-16-tpsi-farington',
        pollster: 'The Public Sentiment Institute',
        dateConducted: '2026-06-16',
        sampleSize: 996,
        results: [
          { candidateName: 'Mark Warner', percentage: 51 },
          { candidateName: 'Kim Farington', percentage: 33 },
        ],
        sourceName: 'The Public Sentiment Institute',
        sourceUrl: 'https://tpsiofficial.substack.com/p/tpsi-new-tpsi-senate-poll-confirms',
      },
    ],
  },
  // No 2026 gubernatorial election: Gov. Abigail Spanberger won the November
  // 2025 election, and Virginia limits governors to a single consecutive
  // term, so the seat isn't up again until 2029.
  governor: null,
  house: {
    totalSeats: 11,
    democratSeats: 6,
    republicanSeats: 5,
    independentSeats: 0,
    majorityParty: 'D',
  },
  headlines: [
    {
      id: 'va-headline-1',
      title: 'Sen. Mark Warner announces reelection campaign in Virginia',
      sourceName: 'WTOP',
      sourceUrl: 'https://wtop.com/virginia/2025/12/sen-mark-warner-announces-reelection-campaign-in-virginia/',
      publishedAt: '2025-12-02',
      race: 'senate',
    },
    {
      id: 'va-headline-2',
      title: 'Reeves drops out of U.S. Senate race; Republicans left with three little-known contenders',
      sourceName: 'Cardinal News',
      sourceUrl:
        'https://cardinalnews.org/2025/12/28/reeves-drops-out-of-u-s-senate-race-republicans-left-with-three-little-known-contenders/',
      publishedAt: '2025-12-28',
      summary:
        'State Sen. Bryce Reeves ended his campaign, leaving Bert Mizusawa, David Williams and Kim Farington to compete for the Republican nomination to challenge Sen. Mark Warner.',
      race: 'senate',
    },
    {
      id: 'va-headline-3',
      title: 'Three Fairfax Republicans competing in Aug 4 Republican Primary for the chance to unseat Mark Warner',
      sourceName: 'Shore Daily News',
      sourceUrl:
        'https://shoredailynews.com/headlines/three-fairfax-republicans-competing-in-aug-4-republican-primary-for-the-chance-to-unseat-mark-warner/',
      publishedAt: '2026-07-17',
      summary: 'The three Republicans seeking the GOP nomination to challenge Sen. Mark Warner face off in the August 4 primary.',
      race: 'senate',
    },
    {
      id: 'va-headline-4',
      title: 'Valley Republicans break bread, get ready for November',
      sourceName: 'Northern Virginia Daily',
      sourceUrl:
        'https://www.nvdaily.com/nvdaily/valley-republicans-break-bread-get-ready-for-november/article_e86709a9-34e0-5520-b22d-5c82b4462331.html',
      publishedAt: '2026-07-20',
    },
  ],
}
