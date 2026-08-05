import type { StateElectionData } from '@/api/elections'

export const iowa: StateElectionData = {
  slug: 'iowa',
  name: 'Iowa',
  postalCode: 'IA',
  senate: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: null,
    status:
      "Open seat: Sen. Joni Ernst announced in September 2025 that she would not seek a third term. U.S. Rep. Ashley Hinson won the June 2, 2026 Republican primary over former state Sen. Jim Carlin, 74%-26%, and carries President Trump's endorsement. State Rep. Josh Turek won the Democratic primary over state Sen. Zach Wahls, 63%-37%. Cook Political Report moved the race from Likely to Lean Republican on June 3, 2026, citing voter backlash over tariffs and rising fuel and fertilizer prices. General-election polling since has been mixed: a late-June Fox News poll showed Turek ahead 50%-46%, while a New York Times/Siena College poll conducted over roughly the same period showed Hinson ahead 48%-46%.",
    candidates: [
      { name: 'Ashley Hinson', party: 'R', incumbent: false, winProbability: 58 },
      { name: 'Josh Turek', party: 'D', incumbent: false, winProbability: 42 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Lean',
        leaning: 'R',
        source: 'Cook Political Report — Iowa Senate 2026 (Lean R, June 3, 2026)',
        sourceUrl: 'https://www.cookpolitical.com/senate/race/488566',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Lean',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Senate ratings (Lean R, June 25, 2026)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-senate/',
      },
    ],
    polls: [
      {
        id: 'ia-senate-2026-06-27-fox-news',
        pollster: 'Fox News',
        dateConducted: '2026-06-27',
        sampleSize: 1003,
        results: [
          { candidateName: 'Josh Turek', percentage: 50 },
          { candidateName: 'Ashley Hinson', percentage: 46 },
        ],
        sourceName: 'Fox News',
        sourceUrl: 'https://www.foxnews.com/politics/fox-news-poll-close-senate-contest-brewing-iowa',
      },
      {
        id: 'ia-senate-2026-06-27-nyt-siena',
        pollster: 'The New York Times/Siena College',
        dateConducted: '2026-06-27',
        sampleSize: 600,
        results: [
          { candidateName: 'Ashley Hinson', percentage: 48 },
          { candidateName: 'Josh Turek', percentage: 46 },
        ],
        sourceName: 'CBS 2 Iowa',
        sourceUrl: 'https://cbs2iowa.com/news/local/nyt-poll-ashley-hinson-leads-josh-turek-in-iowas-us-senate-race',
      },
    ],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: null,
    status:
      "Open seat: Gov. Kim Reynolds is not seeking a third term — Iowa's first concurrent open Senate-and-governor election since 1968. State Auditor Rob Sand won the Democratic nomination unopposed. Businessman and farmer Zach Lahn narrowly upset U.S. Rep. Randy Feenstra for the Republican nomination in the June 2, 2026 primary, 37.65%-36.88%. Libertarian Nicholas Gluba also qualified for the ballot. Cook Political Report moved the race to Toss-up on April 9, 2026, citing Sand's enormous fundraising advantage — he entered the general election with $13.2 million on hand to Feenstra's $3.2 million.",
    candidates: [
      { name: 'Rob Sand', party: 'D', incumbent: false, winProbability: 50 },
      { name: 'Zach Lahn', party: 'R', incumbent: false, winProbability: 49 },
      { name: 'Nicholas Gluba', party: 'I', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Toss-up',
        leaning: null,
        source: 'Cook Political Report — Iowa Governor 2026 (Toss-up, April 9, 2026)',
        sourceUrl: 'https://www.cookpolitical.com/governor/race/481441',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Toss-up',
        leaning: null,
        source: "Sabato's Crystal Ball — 2026 Governor ratings (Toss-up)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
    ],
    polls: [],
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
      id: 'ia-headline-1',
      title: 'Rep. Josh Turek wins U.S. Senate primary race against Sen. Zach Wahls',
      sourceName: 'Iowa Capital Dispatch',
      sourceUrl:
        'https://iowacapitaldispatch.com/2026/06/02/rep-josh-turek-wins-u-s-senate-primary-race-against-sen-zach-wahls-ap-projects/',
      publishedAt: '2026-06-02',
      race: 'senate',
    },
    {
      id: 'ia-headline-2',
      title: "Cook Political Report shifts Iowa governor's race to tossup",
      sourceName: 'Johnston Today',
      sourceUrl:
        'https://nationaltoday.com/us/ia/johnston/news/2026/04/09/cook-political-report-shifts-iowa-governors-race-to-tossup/',
      publishedAt: '2026-04-09',
      race: 'governor',
    },
    {
      id: 'ia-headline-3',
      title: "Meet the 5 Republicans hoping to represent their party in the 2026 Iowa governor's race",
      sourceName: 'Iowa Public Radio',
      sourceUrl:
        'https://www.iowapublicradio.org/political-news/2026-05-15/2026-iowa-governors-race-republican-primary-candidates',
      publishedAt: '2026-05-15',
      race: 'governor',
    },
    {
      id: 'ia-headline-4',
      title: "NYT Poll: Ashley Hinson narrowly leads Josh Turek in Iowa's U.S. Senate race",
      sourceName: 'CBS 2 Iowa',
      sourceUrl: 'https://cbs2iowa.com/news/local/nyt-poll-ashley-hinson-leads-josh-turek-in-iowas-us-senate-race',
      publishedAt: '2026-07-01',
      summary:
        'A New York Times/Siena College poll of 600 likely voters found Hinson leading Turek 48%-46%, within the margin of error, in the race to succeed retiring Sen. Joni Ernst.',
      race: 'senate',
    },
  ],
}
