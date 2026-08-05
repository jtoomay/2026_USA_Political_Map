import type { StateElectionData } from '@/api/elections'

export const massachusetts: StateElectionData = {
  slug: 'massachusetts',
  name: 'Massachusetts',
  postalCode: 'MA',
  senate: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: { name: 'Ed Markey', party: 'D' },
    status:
      "Sen. Ed Markey, who will be 80 on Election Day, is seeking a third full term and faces a competitive Democratic primary from U.S. Rep. Seth Moulton ahead of the September 1, 2026 primary. A June 18–23 UNH poll showed Markey's lead narrowing to 41%–35% with 23% undecided, down from a wider spread in April. 2024 Senate nominee John Deaton is the presumptive Republican nominee. Nathan Bech, who withdrew from the Republican primary, and Party for Socialism and Liberation nominee Joe Tache are running as independent/third-party candidates. Forecasters rate the seat Safe/Solid Democratic.",
    candidates: [
      { name: 'Ed Markey', party: 'D', incumbent: true, winProbability: 60 },
      { name: 'Seth Moulton', party: 'D', incumbent: false, winProbability: 33 },
      { name: 'John Deaton', party: 'R', incumbent: false, winProbability: 5 },
      { name: 'Nathan Bech', party: 'I', incumbent: false, winProbability: 1 },
      { name: 'Joe Tache', party: 'I', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — Massachusetts Senate 2026 (Solid D, April 13, 2026)',
        sourceUrl: 'https://www.cookpolitical.com/senate/race/488596',
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
        source: 'Inside Elections — Massachusetts Senate 2026 (Solid D, April 23, 2026)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=ma&office=senate',
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
        id: 'ma-senate-2026-06-23-unh-primary',
        pollster: 'University of New Hampshire Survey Center',
        dateConducted: '2026-06-23',
        sampleSize: 370,
        results: [
          { candidateName: 'Ed Markey', percentage: 41 },
          { candidateName: 'Seth Moulton', percentage: 35 },
        ],
        sourceName: 'Axios Boston',
        sourceUrl:
          'https://www.axios.com/local/boston/2026/07/01/markey-moulton-massachusetts-senate-primary-poll-june-2026-uhn-survey',
      },
      {
        id: 'ma-senate-2026-06-23-unh-general',
        pollster: 'University of New Hampshire Survey Center',
        dateConducted: '2026-06-23',
        sampleSize: 623,
        results: [
          { candidateName: 'Ed Markey', percentage: 50 },
          { candidateName: 'John Deaton', percentage: 34 },
        ],
        sourceName: 'Axios Boston',
        sourceUrl:
          'https://www.axios.com/local/boston/2026/07/01/markey-moulton-massachusetts-senate-primary-poll-june-2026-uhn-survey',
      },
    ],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: { name: 'Maura Healey', party: 'D' },
    status:
      'Gov. Maura Healey and Lt. Gov. Kim Driscoll are running for a second term as the Democratic presumptive nominees, with declared primary challenger Andrea James. Republicans Michael Minogue and Brian Shortsleeve are competing for the GOP nod after Mike Kennealy was eliminated at the April 25, 2026 party convention; Minogue has led primary polling throughout and announced in July 2026 that he would skip further primary debates with Shortsleeve. A June 8–12 Suffolk University/Boston Globe poll showed Healey leading both Republicans by about 25 points. Forecasters rate the race Safe/Solid Democratic.',
    candidates: [
      { name: 'Maura Healey', party: 'D', incumbent: true, winProbability: 92 },
      { name: 'Andrea James', party: 'D', incumbent: false, winProbability: 1 },
      { name: 'Michael Minogue', party: 'R', incumbent: false, winProbability: 5 },
      { name: 'Brian Shortsleeve', party: 'R', incumbent: false, winProbability: 2 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — Massachusetts Governor 2026 (Solid D, September 11, 2025)',
        sourceUrl: 'https://www.cookpolitical.com/governor/race/479526',
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
        source: 'Inside Elections — Massachusetts Governor 2026 (Solid D, August 28, 2025)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=ma&office=governor',
      },
    ],
    polls: [
      {
        id: 'ma-governor-2026-06-12-suffolk-minogue',
        pollster: 'Suffolk University/Boston Globe',
        dateConducted: '2026-06-12',
        sampleSize: 500,
        results: [
          { candidateName: 'Maura Healey', percentage: 56 },
          { candidateName: 'Michael Minogue', percentage: 31 },
        ],
        sourceName: 'The Boston Globe',
        sourceUrl: 'https://www.bostonglobe.com/2026/06/16/metro/healey-voter-suffolk-poll-2026-midterm/',
      },
      {
        id: 'ma-governor-2026-06-12-suffolk-shortsleeve',
        pollster: 'Suffolk University/Boston Globe',
        dateConducted: '2026-06-12',
        sampleSize: 500,
        results: [
          { candidateName: 'Maura Healey', percentage: 56 },
          { candidateName: 'Brian Shortsleeve', percentage: 29 },
        ],
        sourceName: 'The Boston Globe',
        sourceUrl: 'https://www.bostonglobe.com/2026/06/16/metro/healey-voter-suffolk-poll-2026-midterm/',
      },
    ],
  },
  house: {
    totalSeats: 9,
    democratSeats: 9,
    republicanSeats: 0,
    independentSeats: 0,
    majorityParty: 'D',
  },
  headlines: [
    {
      id: 'ma-headline-1',
      title: "Markey's lead over Moulton still narrow in new Massachusetts Senate primary poll",
      sourceName: 'Axios Boston',
      sourceUrl:
        'https://www.axios.com/local/boston/2026/07/01/markey-moulton-massachusetts-senate-primary-poll-june-2026-uhn-survey',
      publishedAt: '2026-07-01',
      summary:
        "A UNH Survey Center poll found Sen. Ed Markey leading Rep. Seth Moulton 41%–35% among likely Democratic primary voters, with undecided voters rising ahead of the September primary.",
      race: 'senate',
    },
    {
      id: 'ma-headline-2',
      title: "Mass. GOP gubernatorial candidate Minogue says no to primary debates",
      sourceName: 'WAMC',
      sourceUrl: 'https://www.wamc.org/news/2026-07-17/mass-gop-gubernatorial-candidate-minogue-says-no-to-primary-debates',
      publishedAt: '2026-07-17',
      summary:
        'GOP primary frontrunner Michael Minogue declined further debates with rival Brian Shortsleeve, saying he wants to focus on challenging Gov. Maura Healey instead.',
      race: 'governor',
    },
    {
      id: 'ma-headline-3',
      title: "Many voters can't name a signature achievement for Healey, Suffolk/Globe poll finds. It may not matter in November.",
      sourceName: 'The Boston Globe',
      sourceUrl: 'https://www.bostonglobe.com/2026/06/16/metro/healey-voter-suffolk-poll-2026-midterm/',
      publishedAt: '2026-06-16',
      summary:
        'A Suffolk University/Boston Globe poll showed Gov. Maura Healey leading both potential Republican rivals by roughly 25 points despite many voters being unable to name an accomplishment of hers.',
      race: 'governor',
    },
    {
      id: 'ma-headline-4',
      title: 'New poll sheds light on state of 2026 Senate race in Mass.',
      sourceName: 'NBC Boston',
      sourceUrl: 'https://www.nbcboston.com/news/politics/new-poll-sheds-light-on-state-of-2026-senate-race-in-mass/3851183/',
      publishedAt: '2025-11-25',
      summary:
        'A Suffolk University/Boston Globe poll found Sen. Ed Markey leading Rep. Seth Moulton 45%–22% among likely Democratic primary voters, with the race shown as far closer if Rep. Ayanna Pressley were to enter.',
      race: 'senate',
    },
  ],
}
