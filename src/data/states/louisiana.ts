import type { StateElectionData } from '@/api/elections'

export const louisiana: StateElectionData = {
  slug: 'louisiana',
  name: 'Louisiana',
  postalCode: 'LA',
  senate: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: null,
    status:
      "Sen. Bill Cassidy (R) became the first elected incumbent U.S. senator in 14 years to lose a primary, finishing third with 24.8% in the May 16, 2026 all-Republican primary held under Louisiana's new closed-primary system. Trump-endorsed Rep. Julia Letlow defeated state Treasurer John Fleming 56.9%–43.1% in the June 27 GOP runoff. Tensas Parish police juror Jamie Davis won the Democratic runoff over political consultant Gary Crockett with 79.9%. Letlow and Davis meet in the November 3 general election for the open seat.",
    candidates: [
      { name: 'Julia Letlow', party: 'R', incumbent: false, winProbability: 95 },
      { name: 'Jamie Davis', party: 'D', incumbent: false, winProbability: 5 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — Louisiana Senate 2026 (Solid Republican)',
        sourceUrl: 'https://www.cookpolitical.com/senate/race/488591',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Safe',
        leaning: 'R',
        source: 'Decision Desk HQ — 2026 Senate forecast (Solid R)',
        sourceUrl: 'https://votes.decisiondeskhq.com/forecast/2026/senate',
      },
    ],
    polls: [],
  },
  governor: null,
  house: {
    totalSeats: 6,
    democratSeats: 2,
    republicanSeats: 4,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'la-headline-1',
      title: "Trump-backed Julia Letlow wins Louisiana GOP Senate runoff, completing president's revenge plot against Bill Cassidy",
      sourceName: 'CNN',
      sourceUrl:
        'https://www.cnn.com/2026/06/27/politics/louisiana-senate-republican-runoff-trump-letlow-fleming-cassidy',
      publishedAt: '2026-06-27',
      summary:
        'Letlow defeated state Treasurer John Fleming in the Republican runoff after President Trump backed her campaign over incumbent Bill Cassidy.',
      race: 'senate',
    },
    {
      id: 'la-headline-2',
      title: "Letlow, Davis advance in Louisiana's U.S. Senate race",
      sourceName: 'WWNO',
      sourceUrl: 'https://www.wwno.org/politics/2026-06-27/letlow-davis-advance-in-louisianas-u-s-senate-race',
      publishedAt: '2026-06-27',
      race: 'senate',
    },
    {
      id: 'la-headline-3',
      title: 'Letlow rides Trump endorsement to US Senate GOP ticket win; Davis cinches Democratic bid',
      sourceName: 'Louisiana Illuminator',
      sourceUrl: 'https://lailluminator.com/2026/06/27/letlow-senate-4/',
      publishedAt: '2026-06-27',
      race: 'senate',
    },
    {
      id: 'la-headline-4',
      title: "Standout stats from Louisiana's US Senate party runoffs",
      sourceName: 'Louisiana Illuminator',
      sourceUrl: 'https://lailluminator.com/2026/06/29/louisiana-senate-2/',
      publishedAt: '2026-06-29',
      race: 'senate',
    },
  ],
}
