import type { StateElectionData } from '@/api/elections'

export const idaho: StateElectionData = {
  slug: 'idaho',
  name: 'Idaho',
  postalCode: 'ID',
  senate: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: { name: 'Jim Risch', party: 'R' },
    status:
      "Sen. Jim Risch won the May 19, 2026 Republican primary for a fourth term with 67.3% of the vote. Democratic nominee David Roth, a Boise-area realtor who had won his own primary with 61.9%, ended his campaign on July 28, 2026 after local Democrats threatened to withhold support unless he raised more money; Roth did not endorse a successor. That leaves former state Rep. Todd Achilles, running as an independent, as Risch's main challenger, with Libertarian nominee Matt Loesby also on the ballot. All four forecasters continue to rate the seat Safe/Solid Republican, despite pre-withdrawal internal polling that showed a closer race.",
    candidates: [
      { name: 'Jim Risch', party: 'R', incumbent: true, winProbability: 95 },
      { name: 'Todd Achilles', party: 'I', incumbent: false, winProbability: 4 },
      { name: 'Matt Loesby', party: 'I', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — Idaho Senate 2026 (Solid R, April 13, 2026)',
        sourceUrl: 'https://www.cookpolitical.com/senate/race/488571',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Senate ratings (Safe R, March 4, 2026)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-senate/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'R',
        source: 'Inside Elections — Idaho Senate 2026 (Solid R, April 23, 2026)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=id&office=senate',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Safe',
        leaning: 'R',
        source: 'Decision Desk HQ — 2026 Senate forecast (Safe R, July 14, 2026)',
        sourceUrl: 'https://votes.decisiondeskhq.com/forecast/2026/senate',
      },
    ],
    polls: [
      {
        id: 'id-senate-2026-06-07-peak-insights',
        pollster: 'Peak Insights (Risch campaign internal poll)',
        dateConducted: '2026-06-07',
        sampleSize: 500,
        results: [
          { candidateName: 'Jim Risch', percentage: 55 },
          { candidateName: 'Todd Achilles', percentage: 7 },
        ],
        sourceName: 'Risch for Senate',
        sourceUrl: 'https://senatorrisch.com/polling/',
      },
      {
        id: 'id-senate-2026-03-17-ppp',
        pollster: 'Public Policy Polling',
        dateConducted: '2026-03-17',
        sampleSize: 639,
        results: [
          { candidateName: 'Jim Risch', percentage: 48 },
          { candidateName: 'Todd Achilles', percentage: 34 },
        ],
        sourceName: 'DDHQ Polls',
        sourceUrl: 'https://data.ddhq.io/polls/2026/03/21/Public-Policy-Polling-Idaho',
      },
    ],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: { name: 'Brad Little', party: 'R' },
    status:
      "Gov. Brad Little won the May 19, 2026 Republican primary for a third term with 59% of the vote over a large primary field led by Mark Fitzpatrick. Attorney Terri Pickens won the Democratic nomination with 61% of the vote. Former Idaho Supreme Court Justice John Stegner, the best-funded of Little's general-election challengers with over $390,000 raised, qualified for the ballot as an independent. Forecasters rate the general election Solid/Safe Republican in a state that hasn't elected a Democratic governor in 36 years.",
    candidates: [
      { name: 'Brad Little', party: 'R', incumbent: true, winProbability: 95 },
      { name: 'John Stegner', party: 'I', incumbent: false, winProbability: 3 },
      { name: 'Terri Pickens', party: 'D', incumbent: false, winProbability: 2 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — Idaho Governor 2026 (Solid R, September 11, 2025)',
        sourceUrl: 'https://www.cookpolitical.com/governor/race/479496',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Governor ratings (Safe R, September 4, 2025)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'R',
        source: 'Inside Elections — Idaho Governor 2026 (Solid R, August 28, 2025)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=id&office=governor',
      },
    ],
    polls: [],
  },
  house: {
    totalSeats: 2,
    democratSeats: 0,
    republicanSeats: 2,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'id-headline-1',
      title:
        'Democrat David Roth to withdraw from Idaho Senate race, leaving independent Todd Achilles to face GOP Sen. Jim Risch',
      sourceName: 'The Spokesman-Review',
      sourceUrl: 'https://www.spokesman.com/stories/2026/jul/29/democrat-david-roth-to-withdraw-from-idaho-senate-/',
      publishedAt: '2026-07-29',
      summary:
        'Roth ended his campaign after Idaho Democrats gave him a fundraising ultimatum, clearing the way for independent Todd Achilles to be the main challenger to three-term Sen. Jim Risch.',
      race: 'senate',
    },
    {
      id: 'id-headline-2',
      title: 'Idaho Democrat is latest Senate nominee to drop out in boost to independent rival',
      sourceName: 'Roll Call',
      sourceUrl:
        'https://rollcall.com/2026/07/29/idaho-democrat-is-latest-senate-nominee-to-drop-out-in-boost-to-independent-rival/',
      publishedAt: '2026-07-29',
      race: 'senate',
    },
    {
      id: 'id-headline-3',
      title: 'Independent John Stegner launches campaign for Idaho governor',
      sourceName: 'Idaho Capital Sun',
      sourceUrl: 'https://idahocapitalsun.com/2026/07/07/independent-john-stegner-launches-campaign-for-idaho-governor/',
      publishedAt: '2026-07-07',
      summary:
        'The former Idaho Supreme Court justice formally kicked off his independent bid for governor, saying current state leaders have failed Idahoans.',
      race: 'governor',
    },
    {
      id: 'id-headline-4',
      title: "John Stegner enters Idaho Governor's Race as Independent",
      sourceName: 'KMVT',
      sourceUrl: 'https://www.kmvt.com/2026/02/27/john-stegner-enters-idaho-governors-race-independent/',
      publishedAt: '2026-02-27',
      race: 'governor',
    },
  ],
}
