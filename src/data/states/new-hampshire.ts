import type { StateElectionData } from '@/api/elections'

export const newHampshire: StateElectionData = {
  slug: 'new-hampshire',
  name: 'New Hampshire',
  postalCode: 'NH',
  senate: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: null,
    status:
      "Sen. Jeanne Shaheen declined to seek a fourth term, opening the seat. Rep. Chris Pappas is the dominant frontrunner for the Democratic nomination, vastly outraising fellow candidate Karishma Manzur ($13.4 million to $206,753) ahead of the September 8 primary. On the Republican side, former Sen. John E. Sununu leads former Sen. Scott Brown in primary polling and has President Trump's endorsement. General-election trial heats show a close race between Pappas and Sununu, with Democrats favored but Republicans increasingly bullish given the tightening margin.",
    candidates: [
      { name: 'Chris Pappas', party: 'D', incumbent: false, winProbability: 56 },
      { name: 'John E. Sununu', party: 'R', incumbent: false, winProbability: 38 },
      { name: 'Karishma Manzur', party: 'D', incumbent: false, winProbability: 4 },
      { name: 'Scott Brown', party: 'R', incumbent: false, winProbability: 2 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Lean',
        leaning: 'D',
        source: 'Cook Political Report — New Hampshire Senate 2026',
        sourceUrl: 'https://www.cookpolitical.com/senate/race/488636',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Lean',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 Senate ratings",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-senate/',
      },
    ],
    polls: [
      {
        id: 'nh-senate-2026-06-23-unh',
        pollster: 'University of New Hampshire Survey Center',
        dateConducted: '2026-06-23',
        sampleSize: 2232,
        results: [
          { candidateName: 'Chris Pappas', percentage: 47 },
          { candidateName: 'John E. Sununu', percentage: 44 },
        ],
        sourceName: 'New Hampshire Public Radio',
        sourceUrl: 'https://www.nhpr.org/politics/2026-07-01/unh-poll-shows-tight-races-for-governor-and-u-s-senate-2026-midterms',
      },
      {
        id: 'nh-senate-2026-03-23-emerson',
        pollster: 'Emerson College Polling',
        dateConducted: '2026-03-23',
        sampleSize: 1000,
        results: [
          { candidateName: 'Chris Pappas', percentage: 45 },
          { candidateName: 'John E. Sununu', percentage: 44 },
        ],
        sourceName: 'Emerson College Polling',
        sourceUrl: 'https://emersoncollegepolling.com/new-hampshire-2026-sununu-leads-gop-nomination-ties-pappas-for-senate/',
      },
    ],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: { name: 'Kelly Ayotte', party: 'R' },
    status:
      "Gov. Kelly Ayotte is running for a second term against former Executive Councilor Cinde Warmington, the presumptive Democratic nominee, ahead of the September 8 primary. Warmington, who finished second in the 2024 Democratic primary, is campaigning on repealing the school voucher program and opposing an ICE detention facility; Ayotte has criticized her past work as an opioid-industry lobbyist. Independent Jon Kiper and Libertarian Stephen Villee have also filed. Polling shows Ayotte's lead narrowing into the high single digits amid sliding approval ratings, though forecasters still favor her.",
    candidates: [
      { name: 'Kelly Ayotte', party: 'R', incumbent: true, winProbability: 85 },
      { name: 'Cinde Warmington', party: 'D', incumbent: false, winProbability: 13 },
      { name: 'Jon Kiper', party: 'I', incumbent: false, winProbability: 1 },
      { name: 'Stephen Villee', party: 'I', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Likely',
        leaning: 'R',
        source: 'Cook Political Report — New Hampshire Governor 2026',
        sourceUrl: 'https://www.cookpolitical.com/governor/race/479551',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Likely',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Governor ratings",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'R',
        source: 'Inside Elections — New Hampshire Governor 2026',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=nh&office=governor',
      },
    ],
    polls: [
      {
        id: 'nh-governor-2026-06-25-saintanselm',
        pollster: 'Saint Anselm College',
        dateConducted: '2026-06-25',
        sampleSize: 1614,
        results: [
          { candidateName: 'Kelly Ayotte', percentage: 45 },
          { candidateName: 'Cinde Warmington', percentage: 37 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_New_Hampshire_gubernatorial_election',
      },
      {
        id: 'nh-governor-2026-06-23-unh',
        pollster: 'University of New Hampshire Survey Center',
        dateConducted: '2026-06-23',
        sampleSize: 2232,
        results: [
          { candidateName: 'Kelly Ayotte', percentage: 44 },
          { candidateName: 'Cinde Warmington', percentage: 39 },
        ],
        sourceName: 'New Hampshire Public Radio',
        sourceUrl: 'https://www.nhpr.org/politics/2026-07-01/unh-poll-shows-tight-races-for-governor-and-u-s-senate-2026-midterms',
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
      id: 'nh-headline-1',
      title: "Republican Kelly Ayotte and Democrat Cinde Warmington file for N.H. governor's race, trade barbs",
      sourceName: 'The Boston Globe',
      sourceUrl: 'https://www.bostonglobe.com/2026/06/05/metro/ayotte-warmington-nh-governor-barbs/',
      publishedAt: '2026-06-05',
      summary:
        'Ayotte and Warmington formally filed for the governor race and immediately exchanged criticism over records and priorities.',
      race: 'governor',
    },
    {
      id: 'nh-headline-2',
      title: 'UNH poll shows tight races for governor and U.S. Senate',
      sourceName: 'New Hampshire Public Radio',
      sourceUrl:
        'https://www.nhpr.org/politics/2026-07-01/unh-poll-shows-tight-races-for-governor-and-u-s-senate-2026-midterms',
      publishedAt: '2026-07-01',
      summary:
        "A new Granite State Poll found Ayotte's lead over Warmington narrowing and a close Pappas-Sununu Senate matchup.",
    },
    {
      id: 'nh-headline-3',
      title: "From Iran war to the economy, differences emerge in NH's Republican Senate primary",
      sourceName: 'New Hampshire Public Radio',
      sourceUrl:
        'https://www.nhpr.org/nh-news/2026-07-27/nh-newhampshire-republican-senate-primary-sununu-scottbrown-2026-midterms',
      publishedAt: '2026-07-27',
      summary: 'John E. Sununu and Scott Brown staked out policy contrasts ahead of the September GOP primary.',
      race: 'senate',
    },
    {
      id: 'nh-headline-4',
      title: "Democrats' primary shake-up becomes GOP ammunition in New Hampshire Senate race",
      sourceName: 'The Washington Times',
      sourceUrl:
        'https://www.washingtontimes.com/news/2026/jul/23/democrats-primary-shake-becomes-gop-ammunition-new-hampshire-senate/',
      publishedAt: '2026-07-23',
      race: 'senate',
    },
    {
      id: 'nh-headline-5',
      title: 'Cinde Warmington launches second bid for New Hampshire governor',
      sourceName: 'New Hampshire Public Radio',
      sourceUrl: 'https://www.nhpr.org/nh-news/2026-02-18/cinde-warmington-running-new-hampshire-governor-2026',
      publishedAt: '2026-02-18',
      race: 'governor',
    },
  ],
}
