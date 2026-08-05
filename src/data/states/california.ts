import type { StateElectionData } from '@/api/elections'

export const california: StateElectionData = {
  slug: 'california',
  name: 'California',
  postalCode: 'CA',
  // No 2026 U.S. Senate race: Alex Padilla (D, Class 3) serves until Jan.
  // 2029 and Adam Schiff (D, Class 1, elected 2024) serves until Jan. 2031 —
  // neither seat is up in 2026.
  senate: null,
  governor: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: null, // Gov. Gavin Newsom (D) is term-limited
    status:
      "Open seat: Gov. Gavin Newsom (D) is term-limited. Former HHS Secretary and California AG Xavier Becerra (D) and conservative commentator Steve Hilton (R) were the top two finishers in a crowded top-two primary field (including Tom Steyer, Katie Porter, Tony Thurmond, Antonio Villaraigosa, and Chad Bianco) on June 2, 2026, and advance to the Nov. 3, 2026 general election.",
    candidates: [
      { name: 'Xavier Becerra', party: 'D', incumbent: false, winProbability: 92 },
      { name: 'Steve Hilton', party: 'R', incumbent: false, winProbability: 7 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — 2026 California gubernatorial election ratings',
        sourceUrl: 'https://www.cookpolitical.com/governor/race/479466',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 California gubernatorial election ratings",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
      // Inside Elections: N/A — insideelections.com consistently blocked
      // automated access and no cached rating text for this specific race was
      // findable through search; omitted rather than guessed.
      // Decision Desk HQ: N/A — no Safe/Likely/Lean/Toss-up category found for
      // this race on DDHQ's own site or Wikipedia's ratings table; omitted
      // rather than guessed.
    ],
    polls: [
      {
        id: 'ca-governor-2026-07-06-ppic',
        pollster: 'Public Policy Institute of California (PPIC)',
        dateConducted: '2026-07-06',
        sampleSize: 1003,
        results: [
          { candidateName: 'Xavier Becerra', percentage: 61 },
          { candidateName: 'Steve Hilton', percentage: 36 },
        ],
        sourceName: 'ABC7 News',
        sourceUrl:
          'https://abc7news.com/post/xavier-becerra-leads-steve-hilton-wide-margin-california-governors-race-new-poll-finds/19517695/',
      },
    ],
  },
  house: {
    // 42 D + 8 R + 1 independent are seated; California's 14th district
    // (vacant since Rep. Eric Swalwell's April 2026 resignation) is pending a
    // special-election runoff on Aug. 18, 2026, so only 51 of 52 seats are
    // currently filled.
    totalSeats: 52,
    democratSeats: 42,
    republicanSeats: 8,
    independentSeats: 1,
    majorityParty: 'D',
  },
  headlines: [
    {
      id: 'ca-headline-1',
      title: 'Sixty-one candidates are running in the top-two primary for governor of California on June 2, 2026',
      sourceName: 'Ballotpedia News',
      sourceUrl:
        'https://news.ballotpedia.org/2026/04/08/sixty-one-candidates-are-running-in-the-top-two-primary-for-governor-of-california-on-june-2-2026/',
      publishedAt: '2026-04-08',
      race: 'governor',
    },
    {
      id: 'ca-headline-2',
      title: "Xavier Becerra (D) and Steve Hilton (R) advance from the top-two primary for governor of California",
      sourceName: 'Ballotpedia News',
      sourceUrl:
        'https://news.ballotpedia.org/2026/06/12/xavier-becerra-d-and-steve-hilton-r-advance-from-the-top-two-primary-for-governor-of-california/',
      publishedAt: '2026-06-12',
      summary:
        'Becerra and Hilton finished atop a crowded primary field and will face off in November to succeed the term-limited Gavin Newsom.',
      race: 'governor',
    },
    {
      id: 'ca-headline-3',
      title: 'PPIC Poll: Becerra up 61%-36% Over Hilton for Calif. Governor',
      sourceName: 'Newsmax',
      sourceUrl: 'https://www.newsmax.com/politics/xavier-becerra-steve-hilton-california/2026/07/17/id/1263227/',
      publishedAt: '2026-07-17',
      race: 'governor',
    },
  ],
}
