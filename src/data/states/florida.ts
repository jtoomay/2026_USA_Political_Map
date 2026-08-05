import type { StateElectionData } from '@/api/elections'

export const florida: StateElectionData = {
  slug: 'florida',
  name: 'Florida',
  postalCode: 'FL',
  senate: {
    electionType: 'special',
    currentParty: 'R',
    incumbent: { name: 'Ashley Moody', party: 'R' },
    status:
      "Special election to finish Marco Rubio's term after he resigned to become U.S. Secretary of State; Gov. Ron DeSantis appointed then-Attorney General Ashley Moody to the seat in January 2025. It's Florida's first U.S. Senate special election since 1936. Moody faces only minor Republican primary opposition ahead of the August 18, 2026 primary. On the Democratic side, retired Lt. Col. Alexander Vindman (former NSC director, $16.7 million raised) and Jacksonville state Rep. Angie Nixon are competing; a University of North Florida poll of 848 likely voters (completed July 17, 2026) showed Moody leading Nixon 50%–42% and Vindman 50%–40%.",
    candidates: [
      { name: 'Ashley Moody', party: 'R', incumbent: true, winProbability: 78 },
      { name: 'Angie Nixon', party: 'D', incumbent: false, winProbability: 13 },
      { name: 'Alex Vindman', party: 'D', incumbent: false, winProbability: 9 },
    ],
    ratings: [
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Likely',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Senate ratings (moved Safe R to Likely R, January 2026)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-senate/',
      },
    ],
    polls: [
      {
        id: 'fl-senate-2026-07-17-unf',
        pollster: 'University of North Florida (Public Opinion Research Lab)',
        dateConducted: '2026-07-17',
        sampleSize: 848,
        results: [
          { candidateName: 'Ashley Moody', percentage: 50 },
          { candidateName: 'Angie Nixon', percentage: 42 },
          { candidateName: 'Alex Vindman', percentage: 40 },
        ],
        sourceName: 'Florida Phoenix',
        sourceUrl:
          'https://floridaphoenix.com/2026/07/20/moody-leads-nixon-by-8-points-vindman-by-10-in-new-poll-of-florida-senate-race-embargoed/',
      },
    ],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: null,
    status:
      "Open seat: Gov. Ron DeSantis is term-limited. The August 18, 2026 Republican primary is a crowded, high-profile field led by Trump-endorsed U.S. Rep. Byron Donalds, alongside Lt. Gov. Jay Collins, former House Speaker Paul Renner, and investor James Fishback. Fishback, a 31-year-old Azoria founder running an insurgent, online-driven campaign, survived a residency-eligibility lawsuit from rival Jay Collins when Leon County Circuit Judge David Frank ruled July 27, 2026 that he could stay on the ballot; Fishback has separately drawn heavy criticism, including from within his own party, for racially charged and antisemitic remarks about Donalds. On the Democratic side, former Republican congressman David Jolly leads Orange County Mayor Jerry Demings in primary polling. General-election polling is mixed: a Change Research survey (July 9–11) had Jolly leading Donalds 46%–40%, while a UNF poll (July 8–17) had Donalds leading Jolly 46%–41%.",
    candidates: [
      { name: 'Byron Donalds', party: 'R', incumbent: false, winProbability: 34 },
      { name: 'David Jolly', party: 'D', incumbent: false, winProbability: 26 },
      { name: 'Jay Collins', party: 'R', incumbent: false, winProbability: 12 },
      { name: 'Jerry Demings', party: 'D', incumbent: false, winProbability: 9 },
      { name: 'Paul Renner', party: 'R', incumbent: false, winProbability: 6 },
      { name: 'James Fishback', party: 'R', incumbent: false, winProbability: 4 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — Florida Governor 2026 (Solid R)',
        sourceUrl: 'https://www.cookpolitical.com/governor/race/479481',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Likely',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Governor ratings (moved Safe R to Likely R, July 23, 2026)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
    ],
    polls: [
      {
        id: 'fl-governor-2026-07-11-change-research',
        pollster: 'Change Research (for Freedom Project USA)',
        dateConducted: '2026-07-11',
        sampleSize: 1004,
        results: [
          { candidateName: 'David Jolly', percentage: 46 },
          { candidateName: 'Byron Donalds', percentage: 40 },
        ],
        sourceName: 'Newsweek',
        sourceUrl: 'https://www.newsweek.com/byron-donalds-chances-of-losing-florida-race-to-democrat-david-jolly-poll-12207083',
      },
      {
        id: 'fl-governor-2026-07-17-unf',
        pollster: 'University of North Florida (Public Opinion Research Lab)',
        dateConducted: '2026-07-17',
        sampleSize: null,
        results: [
          { candidateName: 'Byron Donalds', percentage: 46 },
          { candidateName: 'David Jolly', percentage: 41 },
        ],
        sourceName: 'The Floridian',
        sourceUrl: 'https://floridianpress.com/2026/07/unf-poll-byron-donalds-with-slight-lead-over-david-jolly-in-governors-race/',
      },
    ],
  },
  // FL-20 has been vacant since Rep. Sheila Cherfilus-McCormick resigned in
  // 2026; its special election primary (Aug. 18, 2026) and general (Nov. 3,
  // 2026) fall after this snapshot, so it's counted in totalSeats but not
  // yet in either party's column.
  house: {
    totalSeats: 28,
    democratSeats: 7,
    republicanSeats: 20,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'fl-headline-1',
      title: 'Fishback can stay on Florida ballot, judge rules',
      sourceName: 'Tampa Bay Times',
      sourceUrl:
        'https://www.tampabay.com/news/florida-politics/elections/2026/07/27/florida-james-fishback-ballot-jay-collins-decision-lawsuit-residency/',
      publishedAt: '2026-07-27',
      summary:
        "A Leon County judge rejected Jay Collins's challenge to James Fishback's residency, ruling Fishback meets the seven-year Florida residency requirement and can remain in the Republican gubernatorial primary.",
      race: 'governor',
    },
    {
      id: 'fl-headline-2',
      title: "Will Fishback be booted from the Florida governor's race? A judge will rule soon",
      sourceName: 'WUSF',
      sourceUrl: 'https://www.wusf.org/politics-issues/2026-07-22/will-fishback-be-booted-florida-governor-race',
      publishedAt: '2026-07-22',
      race: 'governor',
    },
    {
      id: 'fl-headline-3',
      title: 'James Fishback surging support for Florida governor buoyed by young voters and the far right',
      sourceName: 'WLRN',
      sourceUrl: 'https://www.wlrn.org/government-politics/2026-07-17/candidate-james-fishback-support-young-voters-far-right',
      publishedAt: '2026-07-17',
      summary:
        'Fishback has built an insurgent online following, but critics point to language many have called racist and antisemitic toward rival Byron Donalds.',
      race: 'governor',
    },
    {
      id: 'fl-headline-4',
      title: 'Moody leads Nixon by 8 points, Vindman by 10, in new poll of Florida Senate race',
      sourceName: 'Florida Phoenix',
      sourceUrl:
        'https://floridaphoenix.com/2026/07/20/moody-leads-nixon-by-8-points-vindman-by-10-in-new-poll-of-florida-senate-race-embargoed/',
      publishedAt: '2026-07-20',
      race: 'senate',
    },
  ],
}
