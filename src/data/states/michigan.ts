import type { StateElectionData } from '@/api/elections'

export const michigan: StateElectionData = {
  slug: 'michigan',
  name: 'Michigan',
  postalCode: 'MI',
  senate: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: null,
    status:
      "Sen. Gary Peters is retiring, leaving an open seat in a state Trump narrowly carried in 2024. Rep. Haley Stevens and former Wayne County health director Abdul El-Sayed are locked in a volatile, expensive Democratic primary ahead of the August 4, 2026 primary. Polling has swung between them — a Detroit News/WDIV survey (July 8–11) had Stevens leading 48%–41%, while the newest Emerson College poll (July 26–27) shows El-Sayed ahead 54%–39% — with Gov. Whitmer backing Stevens as the more electable choice. State Sen. Mallory McMorrow suspended her campaign in July 2026 but remains on the ballot. Former U.S. Rep. Mike Rogers, the 2024 GOP Senate nominee, is the unopposed presumptive Republican nominee; a July 22–24 poll found him leading El-Sayed by 7 points and roughly tied with Stevens. Cook Political Report, Inside Elections and Sabato's Crystal Ball all rate the general election a Toss-up.",
    candidates: [
      { name: 'Mike Rogers', party: 'R', incumbent: false, winProbability: 52 },
      { name: 'Abdul El-Sayed', party: 'D', incumbent: false, winProbability: 28 },
      { name: 'Haley Stevens', party: 'D', incumbent: false, winProbability: 20 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Toss-up',
        leaning: null,
        source: 'Cook Political Report — Michigan Senate 2026 (Toss Up)',
        sourceUrl: 'https://www.cookpolitical.com/senate/race/488606',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Toss-up',
        leaning: null,
        source: "Sabato's Crystal Ball — 2026 Senate ratings (Toss-up)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-senate/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Toss-up',
        leaning: null,
        source: 'Inside Elections — Michigan Senate 2026 (Toss-up)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=mi&office=senate',
      },
    ],
    polls: [
      {
        id: 'mi-senate-2026-07-27-emerson-primary',
        pollster: 'Emerson College Polling',
        dateConducted: '2026-07-27',
        sampleSize: 700,
        results: [
          { candidateName: 'Abdul El-Sayed', percentage: 54 },
          { candidateName: 'Haley Stevens', percentage: 39 },
        ],
        sourceName: 'Emerson College Polling',
        sourceUrl:
          'https://emersoncollegepolling.com/michigan-2026-poll-abdul-el-sayed-leads-haley-stevens-for-democratic-us-senate-nomination/',
      },
      {
        id: 'mi-senate-2026-07-24-glengariff-stevens-general',
        pollster: 'Glengariff Group (MEA/Business Leaders for Michigan)',
        dateConducted: '2026-07-24',
        sampleSize: null,
        results: [
          { candidateName: 'Haley Stevens', percentage: 47 },
          { candidateName: 'Mike Rogers', percentage: 45 },
        ],
        sourceName: 'Jewish Insider',
        sourceUrl:
          'https://jewishinsider.com/2026/07/michigan-senate-poll-el-sayed-trailing-mike-rogers-tied-haley-stevens/',
      },
      {
        id: 'mi-senate-2026-07-24-glengariff-elsayed-general',
        pollster: 'Glengariff Group (MEA/Business Leaders for Michigan)',
        dateConducted: '2026-07-24',
        sampleSize: null,
        results: [
          { candidateName: 'Abdul El-Sayed', percentage: 41 },
          { candidateName: 'Mike Rogers', percentage: 48 },
        ],
        sourceName: 'Jewish Insider',
        sourceUrl:
          'https://jewishinsider.com/2026/07/michigan-senate-poll-el-sayed-trailing-mike-rogers-tied-haley-stevens/',
      },
      {
        id: 'mi-senate-2026-07-11-glengariff-primary',
        pollster: 'Glengariff Group/Detroit News-WDIV',
        dateConducted: '2026-07-11',
        sampleSize: 500,
        results: [
          { candidateName: 'Haley Stevens', percentage: 48 },
          { candidateName: 'Abdul El-Sayed', percentage: 41 },
        ],
        sourceName: 'WDIV-TV (ClickOnDetroit)',
        sourceUrl:
          'https://www.clickondetroit.com/news/local/2026/07/14/poll-where-michigan-democratic-voters-stand-with-us-senate-candidates-stevens-el-sayed/',
      },
    ],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: null,
    status:
      "Gov. Gretchen Whitmer is term-limited, creating a wide-open race. Secretary of State Jocelyn Benson holds a dominant lead in Democratic primary polling over Genesee County Sheriff Chris Swanson; Lt. Gov. Garlin Gilchrist dropped out to run for Secretary of State instead. On the Republican side, President Trump's endorsement of Rep. John James pushed former Attorney General Mike Cox to suspend his campaign, narrowing the GOP field to James and self-funding businessman Perry Johnson, who has put over $30 million into his campaign; an Emerson College poll (July 26–27) showed James leading Johnson 40%–32%. Former Detroit Mayor Mike Duggan's withdrawal from his independent bid eased Democratic fears of vote-splitting and helped move forecaster ratings toward Lean Democratic. Libertarian nominee Anthony Hudson, who switched over from the Republican primary, is also on the ballot.",
    candidates: [
      { name: 'Jocelyn Benson', party: 'D', incumbent: false, winProbability: 58 },
      { name: 'John James', party: 'R', incumbent: false, winProbability: 24 },
      { name: 'Perry Johnson', party: 'R', incumbent: false, winProbability: 13 },
      { name: 'Chris Swanson', party: 'D', incumbent: false, winProbability: 4 },
      { name: 'Anthony Hudson', party: 'I', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Lean',
        leaning: 'D',
        source: 'Cook Political Report — Michigan Governor 2026 (Lean D, July 12, 2026)',
        sourceUrl: 'https://www.cookpolitical.com/governor/race/479531',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Lean',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 Governor ratings (Lean D, July 23, 2026)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Lean',
        leaning: 'D',
        source: 'Inside Elections — Michigan Governor 2026 (Tilt D, June 25, 2026)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=mi&office=governor',
      },
    ],
    polls: [
      {
        id: 'mi-governor-2026-07-27-emerson-gop-primary',
        pollster: 'Emerson College Polling',
        dateConducted: '2026-07-27',
        sampleSize: 350,
        results: [
          { candidateName: 'John James', percentage: 40 },
          { candidateName: 'Perry Johnson', percentage: 32 },
        ],
        sourceName: 'Emerson College Polling',
        sourceUrl:
          'https://emersoncollegepolling.com/michigan-2026-poll-abdul-el-sayed-leads-haley-stevens-for-democratic-us-senate-nomination/',
      },
      {
        id: 'mi-governor-2026-07-11-glengariff-primary',
        pollster: 'Glengariff Group/Detroit News-WDIV',
        dateConducted: '2026-07-11',
        sampleSize: 500,
        results: [
          { candidateName: 'Jocelyn Benson', percentage: 72 },
          { candidateName: 'Chris Swanson', percentage: 12 },
        ],
        sourceName: 'WDIV-TV (ClickOnDetroit)',
        sourceUrl:
          'https://www.clickondetroit.com/news/local/2026/07/14/poll-where-michigan-democratic-voters-stand-with-us-senate-candidates-stevens-el-sayed/',
      },
    ],
  },
  house: {
    totalSeats: 13,
    democratSeats: 6,
    republicanSeats: 7,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'mi-headline-1',
      title: 'Michigan Senate poll shows El-Sayed at disadvantage against Republican challenger',
      sourceName: 'Jewish Insider',
      sourceUrl:
        'https://jewishinsider.com/2026/07/michigan-senate-poll-el-sayed-trailing-mike-rogers-tied-haley-stevens/',
      publishedAt: '2026-07-28',
      summary:
        'A Glengariff Group poll for the Michigan Education Association and Business Leaders for Michigan found Mike Rogers leading Abdul El-Sayed by 7 points in a general-election matchup while running about even with Haley Stevens.',
      race: 'senate',
    },
    {
      id: 'mi-headline-2',
      title: "Contentious Democratic Senate contest dominates Michigan's primary season",
      sourceName: 'Roll Call',
      sourceUrl: 'https://rollcall.com/2026/07/28/contentious-democratic-senate-contest-dominates-michigans-primary-season/',
      publishedAt: '2026-07-28',
      summary:
        "Haley Stevens and Abdul El-Sayed are locked in a tight, high-spending Democratic Senate primary, with Stevens backed by establishment figures including Gov. Whitmer and El-Sayed running as a progressive outsider; Inside Elections rates the general election a Toss-up.",
      race: 'senate',
    },
    {
      id: 'mi-headline-3',
      title: "Michigan Governor's Race: James vs. Johnson, Benson vs. Swanson",
      sourceName: 'The Arab American News',
      sourceUrl:
        'https://arabamericannews.com/2026/07/24/michigan-gubernatorial-race-narrows-to-james-vs-johnson-in-gop-primary-benson-vs-swanson-for-democrats/',
      publishedAt: '2026-07-24',
      summary:
        "The Republican primary narrowed to John James and Perry Johnson after Mike Cox suspended his campaign following Trump's endorsement of James; Jocelyn Benson and Chris Swanson face off for the Democratic nomination ahead of the August 4 primary.",
      race: 'governor',
    },
  ],
}
