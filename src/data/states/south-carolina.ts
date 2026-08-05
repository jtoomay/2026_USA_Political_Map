import type { StateElectionData } from '@/api/elections'

export const southCarolina: StateElectionData = {
  slug: 'south-carolina',
  name: 'South Carolina',
  postalCode: 'SC',
  senate: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: { name: 'Darline Graham Nordone', party: 'R' },
    status:
      "Sen. Lindsey Graham won the June 9, 2026 Republican primary with 56.8% but died July 11, 2026 of a sudden aortic dissection. Gov. Henry McMaster, at President Trump's recommendation, appointed Graham's sister Darline Graham Nordone to fill the seat; she was sworn in July 14, 2026 and will serve through January 2027. Under South Carolina law, a special Republican primary was called for August 11, 2026 to choose a new GOP nominee for the full six-year term — candidate filing closed July 28, 2026, but the resulting field had not been publicly reported as of this snapshot. Pediatrician Annie Andrews won the Democratic primary with 61.5% and awaits the Republican nominee in November. Neither Nordone nor McMaster has said whether she will seek the seat in her own right.",
    candidates: [{ name: 'Annie Andrews', party: 'D', incumbent: false, winProbability: 15 }],
    ratings: [],
    polls: [],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: null,
    status:
      "Gov. Henry McMaster is term-limited. Attorney General Alan Wilson won a June 23, 2026 Republican runoff over Lt. Gov. Pamela Evette with 68.6% of the vote after topping a crowded first-round field that included Reps. Nancy Mace and Ralph Norman; Wilson carries Trump's endorsement. State Rep. Jermaine Johnson, who launched an exploratory bid in mid-2025, won the Democratic nomination with 59.7% over Billy Webster. South Carolina has not elected a Democratic governor since 1998.",
    candidates: [
      { name: 'Alan Wilson', party: 'R', incumbent: false, winProbability: 90 },
      { name: 'Jermaine Johnson', party: 'D', incumbent: false, winProbability: 8 },
    ],
    ratings: [],
    polls: [],
  },
  house: {
    totalSeats: 7,
    democratSeats: 1,
    republicanSeats: 6,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'sc-headline-1',
      title: 'Lindsey Graham died of aortic dissection, preliminary medical report says',
      sourceName: 'The Washington Post',
      sourceUrl: 'https://www.washingtonpost.com/politics/2026/07/12/lindsey-graham-longtime-south-carolina-senator-dies-71/',
      publishedAt: '2026-07-12',
      summary:
        "Sen. Lindsey Graham died at 71 after a brief and sudden illness; a preliminary D.C. medical examiner's report cited aortic dissection.",
      race: 'senate',
    },
    {
      id: 'sc-headline-2',
      title: "Darline Graham, Lindsey Graham's sister, appointed to serve out his Senate term",
      sourceName: 'CBS News',
      sourceUrl: 'https://www.cbsnews.com/news/lindsey-graham-replacement-senate-south-carolina-governor/',
      publishedAt: '2026-07-13',
      summary:
        "Gov. Henry McMaster appointed Graham's sister, Darline Graham Nordone, to complete his Senate term through January 2027 at President Trump's recommendation.",
      race: 'senate',
    },
    {
      id: 'sc-headline-3',
      title: "Why has Lindsey Graham's sister inherited his Senate seat after his death?",
      sourceName: 'Al Jazeera',
      sourceUrl: 'https://www.aljazeera.com/news/2026/7/15/why-has-lindsey-grahams-sister-inherited-his-senate-seat-after-his-death',
      publishedAt: '2026-07-15',
      summary: "Explainer on Darline Graham Nordone's swearing-in and the process to fill the seat permanently.",
      race: 'senate',
    },
    {
      id: 'sc-headline-4',
      title: 'South Carolina 2026 governor race: See who officially filed to run',
      sourceName: 'WBTV',
      sourceUrl: 'https://www.wbtv.com/2026/03/30/south-carolina-2026-governor-race-see-who-officially-filed-run/',
      publishedAt: '2026-03-30',
      summary:
        'Three Democrats and seven Republicans officially filed to appear on the June 9, 2026 primary ballot for the open governor seat.',
      race: 'governor',
    },
    {
      id: 'sc-headline-5',
      title: "Democratic state Rep. Jermaine Johnson launches exploratory committee for 2026 governor's race",
      sourceName: 'WCBD',
      sourceUrl: 'https://www.yahoo.com/news/democratic-state-rep-jermaine-johnson-134933490.html',
      publishedAt: '2025-06-02',
      summary:
        'Johnson became the first Democrat to publicly express interest in the governorship being vacated by term-limited Henry McMaster.',
      race: 'governor',
    },
  ],
}
