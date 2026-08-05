import type { StateElectionData } from '@/api/elections'

export const southDakota: StateElectionData = {
  slug: 'south-dakota',
  name: 'South Dakota',
  postalCode: 'SD',
  senate: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: { name: 'Mike Rounds', party: 'R' },
    status:
      'Rounds won the June 2, 2026 Republican primary decisively, 75.8% to 24.2%, over businessman Justin McNeal and is seeking a third term. He faces Democrat Julian Beaudion, a former state trooper who ran unopposed for his party\'s nod, and independent Brian Bengs, the 2022 Democratic Senate nominee now running unaffiliated — a late-May poll showed Bengs running ahead of Beaudion for second place. Every major forecaster rates the seat Safe/Solid Republican.',
    candidates: [
      { name: 'Mike Rounds', party: 'R', incumbent: true, winProbability: 95 },
      { name: 'Brian Bengs', party: 'I', incumbent: false, winProbability: 4 },
      { name: 'Julian Beaudion', party: 'D', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — Senate ratings',
        sourceUrl: 'https://www.cookpolitical.com/ratings/senate-race-ratings',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Senate ratings",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-senate/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'R',
        source: 'Inside Elections — South Dakota Senate 2026',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=sd&office=senate',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Safe',
        leaning: 'R',
        source: 'Decision Desk HQ — 2026 Senate forecast',
        sourceUrl: 'https://votes.decisiondeskhq.com/forecast/2026/senate',
      },
    ],
    polls: [
      {
        id: 'sd-senate-2026-05-30-ppp',
        pollster: 'Public Policy Polling',
        dateConducted: '2026-05-30',
        sampleSize: 726,
        results: [
          { candidateName: 'Mike Rounds', percentage: 43 },
          { candidateName: 'Brian Bengs', percentage: 23 },
          { candidateName: 'Julian Beaudion', percentage: 18 },
        ],
        sourceName: 'Wikipedia — 2026 United States Senate election in South Dakota',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_South_Dakota',
      },
    ],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: { name: 'Larry Rhoden', party: 'R' },
    status:
      "Rhoden, who succeeded Kristi Noem as governor in 2025, placed second behind businessman Toby Doeden in the four-way June 2, 2026 Republican primary, triggering the state's first-ever gubernatorial runoff under a 1985 law. Rhoden won that runoff decisively, 70.8% to 29.2%, on July 28, 2026. He faces Democrat Dan Ahlers, a former state senator who ran unopposed, and independent Anthony Sitter in November. Forecasters rate the seat Safe/Solid Republican.",
    candidates: [
      { name: 'Larry Rhoden', party: 'R', incumbent: true, winProbability: 93 },
      { name: 'Dan Ahlers', party: 'D', incumbent: false, winProbability: 4 },
      { name: 'Anthony Sitter', party: 'I', incumbent: false, winProbability: 2 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — Governor ratings',
        sourceUrl: 'https://www.cookpolitical.com/ratings/governor-race-ratings',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Governor ratings",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'R',
        source: 'Inside Elections — South Dakota Governor 2026',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=sd&office=governor',
      },
    ],
    polls: [],
  },
  house: {
    totalSeats: 1,
    democratSeats: 0,
    republicanSeats: 1,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'sd-headline-1',
      title: 'South Dakota governor announces he will run for a full term next year',
      sourceName: 'Associated Press',
      sourceUrl: 'https://apnews.com/article/south-dakota-governor-larry-rhoden-9ae7c9443328c9c257d3f5da798a0ca5',
      publishedAt: '2025-11-18',
      summary: 'Gov. Larry Rhoden, who succeeded Kristi Noem, announced his campaign for a full term.',
      race: 'governor',
    },
    {
      id: 'sd-headline-2',
      title: 'Congressman Dusty Johnson announces he will run for Governor job',
      sourceName: 'KNBN',
      sourceUrl: 'https://www.newscenter1.tv/news/south-dakota/congressman-dusty-johnson-announces-he-will-run-for-governor-job',
      publishedAt: '2025-06-30',
      summary:
        'U.S. Rep. Dusty Johnson entered the crowded Republican primary for governor; he did not advance to the eventual runoff.',
      race: 'governor',
    },
    {
      id: 'sd-headline-3',
      title: 'Doeden joins race for governor with pledge to eliminate property taxes',
      sourceName: 'South Dakota Searchlight',
      sourceUrl: 'https://southdakotasearchlight.com/2025/05/28/doeden-joins-race-for-governor-with-pledge-to-eliminate-property-taxes/',
      publishedAt: '2025-05-28',
      summary: 'Businessman Toby Doeden entered the GOP primary, later forcing the state\'s first gubernatorial runoff.',
      race: 'governor',
    },
    {
      id: 'sd-headline-4',
      title: "Former Democrat Brian Bengs launches independent bid for Mike Rounds' Senate seat in 2026",
      sourceName: 'Argus Leader',
      sourceUrl:
        'https://www.argusleader.com/story/news/politics/2025/04/30/brian-bengs-independent-bid-for-mike-rounds-senate-seat-2026-election/83367276007/',
      publishedAt: '2025-04-30',
      summary: "The 2022 Democratic Senate nominee is running again in 2026, this time as an independent.",
      race: 'senate',
    },
    {
      id: 'sd-headline-5',
      title: 'Rounds announces U.S. Senate reelection bid',
      sourceName: 'SDPB',
      sourceUrl: 'https://www.sdpb.org/politics/2026-01-22/rounds-announces-u-s-senate-reelection-bid',
      publishedAt: '2026-01-22',
      summary: 'Sen. Mike Rounds confirmed he would seek a third term.',
      race: 'senate',
    },
  ],
}
