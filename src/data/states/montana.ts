import type { StateElectionData } from '@/api/elections'

export const montana: StateElectionData = {
  slug: 'montana',
  name: 'Montana',
  postalCode: 'MT',
  senate: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: null,
    status:
      "Sen. Steve Daines withdrew minutes before the March 5, 2026 filing deadline and endorsed former U.S. Attorney Kurt Alme, who won the June 2 Republican primary with 76% of the vote. Alme faces Democratic nominee Alani Bankhead (an Air Force lieutenant colonel), independent Seth Bodnar (former University of Montana president), and Libertarian Kyle Austin in November. Outside Democratic-aligned groups have pulled funding from Bankhead and pushed her to clear the field for the better-funded Bodnar, but as of late July both remain on the ballot ahead of the August 10 withdrawal deadline.",
    candidates: [
      { name: 'Kurt Alme', party: 'R', incumbent: false, winProbability: 90 },
      { name: 'Seth Bodnar', party: 'I', incumbent: false, winProbability: 6 },
      { name: 'Alani Bankhead', party: 'D', incumbent: false, winProbability: 3 },
      { name: 'Kyle Austin', party: 'I', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — Montana Senate 2026',
        sourceUrl: 'https://www.cookpolitical.com/senate/race/488621',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Likely',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Senate ratings",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-senate/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'R',
        source: 'Inside Elections — Montana Senate 2026',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=mt&office=senate',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Likely',
        leaning: 'R',
        source: 'Decision Desk HQ — 2026 Senate forecast',
        sourceUrl: 'https://votes.decisiondeskhq.com/forecast/2026/senate',
      },
    ],
    polls: [
      {
        id: 'mt-senate-2026-07-27-tavern',
        pollster: 'Tavern Research (D)',
        dateConducted: '2026-07-27',
        sampleSize: 517,
        results: [
          { candidateName: 'Kurt Alme', percentage: 49 },
          { candidateName: 'Seth Bodnar', percentage: 25 },
          { candidateName: 'Alani Bankhead', percentage: 24 },
          { candidateName: 'Kyle Austin', percentage: 2 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Montana',
      },
      {
        id: 'mt-senate-2026-07-26-gqr',
        pollster: 'GQR (D)',
        dateConducted: '2026-07-26',
        sampleSize: 500,
        results: [
          { candidateName: 'Kurt Alme', percentage: 41 },
          { candidateName: 'Seth Bodnar', percentage: 27 },
          { candidateName: 'Alani Bankhead', percentage: 22 },
          { candidateName: 'Kyle Austin', percentage: 6 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Montana',
      },
      {
        id: 'mt-senate-2026-06-24-hart',
        pollster: 'Hart Research (D)',
        dateConducted: '2026-06-24',
        sampleSize: 800,
        results: [
          { candidateName: 'Kurt Alme', percentage: 47 },
          { candidateName: 'Seth Bodnar', percentage: 25 },
          { candidateName: 'Alani Bankhead', percentage: 22 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Montana',
      },
    ],
  },
  governor: null,
  house: {
    totalSeats: 2,
    democratSeats: 0,
    republicanSeats: 2,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'mt-headline-1',
      title: 'Mystery PAC that boosted Bankhead exits Senate race, leaving a financial void',
      sourceName: 'Montana Free Press',
      sourceUrl:
        'https://montanafreepress.org/2026/07/06/mystery-pac-that-boosted-bankhead-exits-senate-race-leaving-a-financial-void/',
      publishedAt: '2026-07-06',
      summary:
        'A major outside group backing Democratic nominee Alani Bankhead pulled out of the race, citing a difficult path to victory and straining her campaign finances.',
      race: 'senate',
    },
    {
      id: 'mt-headline-2',
      title:
        'Lawyers say Montana Democratic Party could choose to not nominate replacement if Bankhead withdraws',
      sourceName: 'Daily Montanan',
      sourceUrl:
        'https://dailymontanan.com/2026/07/16/lawyers-say-montana-democratic-party-could-choose-to-not-nominate-replacement-if-bankhead-withdraws/',
      publishedAt: '2026-07-16',
      summary:
        'Legal analysis suggests state Democrats could leave the ballot line vacant rather than replace Bankhead, clearing the way for independent Seth Bodnar to consolidate anti-Alme votes.',
      race: 'senate',
    },
    {
      id: 'mt-headline-3',
      title: 'Exclusive: Independent Seth Bodnar Weighing Exit from Montana Senate Race',
      sourceName: 'Breitbart News',
      sourceUrl:
        'https://www.breitbart.com/politics/2026/07/26/exclusive-independent-seth-bodnar-weighing-exit-montana-senate-race-bankhead-refuses-dropout/',
      publishedAt: '2026-07-26',
      summary:
        'Bodnar is reportedly considering dropping out himself after Bankhead declined to clear the field, as both sides worry about splitting the anti-Alme vote.',
      race: 'senate',
    },
    {
      id: 'mt-headline-4',
      title: 'Bodnar earns progressive endorsements in Montana Senate race',
      sourceName: 'Daily Inter Lake',
      sourceUrl:
        'https://dailyinterlake.com/news/2026/jul/28/bodnar-earns-progressive-endorsements-in-montana-senate-race/',
      publishedAt: '2026-07-28',
      summary:
        'National Democratic-aligned groups including VoteVets endorsed independent Seth Bodnar over Democratic nominee Alani Bankhead, betting he is better positioned to beat Republican Kurt Alme.',
      race: 'senate',
    },
  ],
}
