import type { StateElectionData } from '@/api/elections'

export const rhodeIsland: StateElectionData = {
  slug: 'rhode-island',
  name: 'Rhode Island',
  postalCode: 'RI',
  senate: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: { name: 'Jack Reed', party: 'D' },
    status:
      "Reed, first elected in 1996, is seeking a sixth term. He faces a September 9, 2026 Democratic primary against physician Luis Daniel Muñoz and elder-care worker Connor Burbridge, and polling shows him dominating that field. Republican Raymond McKay and independent theologian Michael Bahry are also running; Reed leads McKay by double digits in general-election trial heats. Republicans have not won a Rhode Island Senate race since 2000.",
    candidates: [
      { name: 'Jack Reed', party: 'D', incumbent: true, winProbability: 90 },
      { name: 'Connor Burbridge', party: 'D', incumbent: false, winProbability: 4 },
      { name: 'Luis Daniel Muñoz', party: 'D', incumbent: false, winProbability: 2 },
      { name: 'Raymond McKay', party: 'R', incumbent: false, winProbability: 3 },
      { name: 'Michael Bahry', party: 'I', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — Senate ratings',
        sourceUrl: 'https://www.cookpolitical.com/ratings/senate-race-ratings',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 Senate ratings",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-senate/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'D',
        source: 'Inside Elections — Rhode Island Senate 2026',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=ri&office=senate',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Safe',
        leaning: 'D',
        source: 'Decision Desk HQ — 2026 Senate forecast',
        sourceUrl: 'https://votes.decisiondeskhq.com/forecast/2026/senate',
      },
    ],
    polls: [
      {
        id: 'ri-senate-2026-06-23-unh-primary',
        pollster: 'University of New Hampshire Survey Center',
        dateConducted: '2026-06-23',
        sampleSize: 337,
        results: [
          { candidateName: 'Jack Reed', percentage: 63 },
          { candidateName: 'Connor Burbridge', percentage: 25 },
        ],
        sourceName: 'Wikipedia — 2026 United States Senate election in Rhode Island',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Rhode_Island',
      },
      {
        id: 'ri-senate-2026-06-23-unh-general',
        pollster: 'University of New Hampshire Survey Center',
        dateConducted: '2026-06-23',
        sampleSize: 664,
        results: [
          { candidateName: 'Jack Reed', percentage: 52 },
          { candidateName: 'Raymond McKay', percentage: 35 },
        ],
        sourceName: 'Wikipedia — 2026 United States Senate election in Rhode Island',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Rhode_Island',
      },
      {
        id: 'ri-senate-2026-04-20-unh-primary',
        pollster: 'University of New Hampshire Survey Center',
        dateConducted: '2026-04-20',
        sampleSize: 323,
        results: [
          { candidateName: 'Jack Reed', percentage: 65 },
          { candidateName: 'Connor Burbridge', percentage: 15 },
        ],
        sourceName: 'Wikipedia — 2026 United States Senate election in Rhode Island',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Rhode_Island',
      },
      {
        id: 'ri-senate-2026-04-20-unh-general',
        pollster: 'University of New Hampshire Survey Center',
        dateConducted: '2026-04-20',
        sampleSize: 556,
        results: [
          { candidateName: 'Jack Reed', percentage: 52 },
          { candidateName: 'Raymond McKay', percentage: 34 },
        ],
        sourceName: 'Wikipedia — 2026 United States Senate election in Rhode Island',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Rhode_Island',
      },
    ],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: { name: 'Dan McKee', party: 'D' },
    status:
      'McKee, seeking a second full term, faces a competitive September 9, 2026 Democratic primary against former CVS Health executive Helena Foulkes — who has led every public poll — plus librarian Wil Gregersen and restaurateur Gregory Stevens. Attorney General Peter Neronha passed on a run and endorsed Foulkes, while Lt. Gov. Sabina Matos is backing McKee. Republicans Aaron Guckian, Elaine Pelino, and Robert Raimondo are competing for the GOP nomination, and independents Ken Block and Paul Rianna Jr. have also filed. Republicans have not won statewide office in Rhode Island since 2006.',
    candidates: [
      { name: 'Helena Foulkes', party: 'D', incumbent: false, winProbability: 50 },
      { name: 'Dan McKee', party: 'D', incumbent: true, winProbability: 27 },
      { name: 'Wil Gregersen', party: 'D', incumbent: false, winProbability: 1 },
      { name: 'Gregory Stevens', party: 'D', incumbent: false, winProbability: 1 },
      { name: 'Aaron Guckian', party: 'R', incumbent: false, winProbability: 4 },
      { name: 'Elaine Pelino', party: 'R', incumbent: false, winProbability: 1 },
      { name: 'Robert Raimondo', party: 'R', incumbent: false, winProbability: 1 },
      { name: 'Ken Block', party: 'I', incumbent: false, winProbability: 3 },
      { name: 'Paul Rianna Jr.', party: 'I', incumbent: false, winProbability: 1 },
    ],
    ratings: [],
    polls: [
      {
        id: 'ri-governor-2026-07-14-tavern',
        pollster: 'Tavern Research',
        dateConducted: '2026-07-14',
        sampleSize: 777,
        results: [
          { candidateName: 'Helena Foulkes', percentage: 39 },
          { candidateName: 'Dan McKee', percentage: 33 },
        ],
        sourceName: 'Wikipedia — 2026 Rhode Island gubernatorial election',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Rhode_Island_gubernatorial_election',
      },
      {
        id: 'ri-governor-2026-06-23-unh',
        pollster: 'University of New Hampshire Survey Center',
        dateConducted: '2026-06-23',
        sampleSize: 337,
        results: [
          { candidateName: 'Helena Foulkes', percentage: 42 },
          { candidateName: 'Dan McKee', percentage: 22 },
        ],
        sourceName: 'Wikipedia — 2026 Rhode Island gubernatorial election',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Rhode_Island_gubernatorial_election',
      },
      {
        id: 'ri-governor-2026-05-16-emerson',
        pollster: 'Emerson College/WPRI-TV',
        dateConducted: '2026-05-16',
        sampleSize: 565,
        results: [
          { candidateName: 'Helena Foulkes', percentage: 40 },
          { candidateName: 'Dan McKee', percentage: 20 },
        ],
        sourceName: 'Wikipedia — 2026 Rhode Island gubernatorial election',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Rhode_Island_gubernatorial_election',
      },
      {
        id: 'ri-governor-2026-04-20-unh',
        pollster: 'University of New Hampshire Survey Center',
        dateConducted: '2026-04-20',
        sampleSize: 327,
        results: [
          { candidateName: 'Helena Foulkes', percentage: 45 },
          { candidateName: 'Dan McKee', percentage: 11 },
          { candidateName: 'Gregory Stevens', percentage: 3 },
        ],
        sourceName: 'Wikipedia — 2026 Rhode Island gubernatorial election',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Rhode_Island_gubernatorial_election',
      },
      {
        id: 'ri-governor-2026-03-29-expedition',
        pollster: 'Expedition Strategies',
        dateConducted: '2026-03-29',
        sampleSize: 800,
        results: [
          { candidateName: 'Helena Foulkes', percentage: 34 },
          { candidateName: 'Dan McKee', percentage: 20 },
          { candidateName: 'Gregory Stevens', percentage: 8 },
        ],
        sourceName: 'Wikipedia — 2026 Rhode Island gubernatorial election',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Rhode_Island_gubernatorial_election',
      },
    ],
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
      id: 'ri-headline-1',
      title: "RI's 2026 election ballot takes shape, and most legislative seats uncontested",
      sourceName: 'The Providence Journal',
      sourceUrl:
        'https://www.providencejournal.com/story/news/politics/elections/2026/06/24/ri-2026-election-candidates-declaring-governor-congress/90664462007/',
      publishedAt: '2026-06-24',
      summary:
        "An overview of Rhode Island's 2026 election field as candidate filing closed, including the Senate and governor races.",
    },
    {
      id: 'ri-headline-2',
      title: 'East Providence elder care worker launches US Senate primary against Jack Reed',
      sourceName: 'WPRI-TV',
      sourceUrl:
        'https://www.wpri.com/news/elections/east-providence-health-care-worker-launches-us-senate-primary-against-jack-reed/',
      publishedAt: '2025-04-23',
      summary: 'Connor Burbridge announced a long-shot Democratic primary challenge to Sen. Jack Reed.',
      race: 'senate',
    },
    {
      id: 'ri-headline-3',
      title: "Sen. Jack Reed confirms he'll run for reelection",
      sourceName: 'WJAR',
      sourceUrl:
        'https://turnto10.com/politics/senator-jack-reed-confirms-he-will-run-reelection-campaign-rhode-island-democrat-united-states-senate-february-28-2025',
      publishedAt: '2025-02-28',
      summary: 'Reed confirmed he would seek a sixth term in the U.S. Senate.',
      race: 'senate',
    },
  ],
}
