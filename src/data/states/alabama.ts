import type { StateElectionData } from '@/api/elections'

export const alabama: StateElectionData = {
  slug: 'alabama',
  name: 'Alabama',
  postalCode: 'AL',
  senate: {
    electionType: 'regular',
    // Seat currently held by Republicans (Tuberville, R) even though he is not
    // seeking reelection — see Incumbent doc comment in elections.ts.
    currentParty: 'R',
    incumbent: null, // open seat: Sen. Tommy Tuberville (R) is running for governor instead
    status:
      "Open seat: Sen. Tommy Tuberville (R) did not seek reelection, opting to run for governor instead. Rep. Barry Moore (R), endorsed by President Trump, and attorney Everett Wess (D) won their party runoffs on June 16, 2026 and face off Nov. 3, 2026 in this heavily Republican state (Trump won it by 30.5 points in 2024).",
    candidates: [
      { name: 'Barry Moore', party: 'R', incumbent: false, winProbability: 96 },
      { name: 'Everett Wess', party: 'D', incumbent: false, winProbability: 4 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — 2026 Alabama Senate election ratings',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Alabama',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Alabama Senate election ratings",
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Alabama',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'R',
        source: 'Inside Elections — 2026 Alabama Senate election ratings',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Alabama',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Safe',
        leaning: 'R',
        source: 'Decision Desk HQ — 2026 Alabama Senate election ratings',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Alabama',
      },
    ],
    polls: [], // N/A — no public general-election polling found for this race as of the data snapshot (checked PollsMax, RealClearPolling, 270toWin)
  },
  governor: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: null, // Gov. Kay Ivey (R) is term-limited
    status:
      "Open seat: Gov. Kay Ivey (R) is term-limited. Republican Sen. Tommy Tuberville faces Democrat and former Sen. Doug Jones — a rematch of their 2020 Senate race, which Tuberville won — on Nov. 3, 2026.",
    candidates: [
      { name: 'Tommy Tuberville', party: 'R', incumbent: false, winProbability: 95 },
      { name: 'Doug Jones', party: 'D', incumbent: false, winProbability: 4 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — 2026 Alabama gubernatorial election ratings',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Alabama_gubernatorial_election',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Alabama gubernatorial election ratings",
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Alabama_gubernatorial_election',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'R',
        source: 'Inside Elections — 2026 Alabama gubernatorial election ratings',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Alabama_gubernatorial_election',
      },
      // Decision Desk HQ: N/A — DDHQ does not publish a Safe/Likely/Lean/Toss-up
      // category for this race (checked their forecast site and Wikipedia's
      // ratings table); omitted rather than guessed, per source policy.
    ],
    polls: [
      {
        id: 'al-governor-2025-11-13-cygnal',
        pollster: 'Cygnal (R)',
        dateConducted: '2025-11-13',
        sampleSize: 605,
        results: [
          { candidateName: 'Tommy Tuberville', percentage: 53 },
          { candidateName: 'Doug Jones', percentage: 34 },
        ],
        sourceName: 'Yellowhammer News',
        sourceUrl:
          'https://yellowhammernews.com/poll-a-doug-jones-vs-tommy-tuberville-gubernatorial-rematch-in-2026-would-be-another-massive-blowout/',
      },
    ],
  },
  house: {
    totalSeats: 7,
    democratSeats: 2,
    republicanSeats: 5,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'al-headline-1',
      title: 'Barry Moore wins Alabama GOP nomination for U.S. Senate seat',
      sourceName: 'Alabama Reflector',
      sourceUrl:
        'https://alabamareflector.com/2026/06/16/barry-moore-wins-alabama-gop-nomination-for-u-s-senate-seat/',
      publishedAt: '2026-06-16',
      summary:
        "Trump-endorsed Rep. Barry Moore defeated retired Navy SEAL Jared Hudson in the Republican Senate runoff to succeed Tommy Tuberville.",
      race: 'senate',
    },
    {
      id: 'al-headline-2',
      title: 'Wess beats Larriett for Alabama Democratic nomination in US Senate race',
      sourceName: 'WSFA 12 News',
      sourceUrl:
        'https://www.wsfa.com/2026/06/17/wess-beats-larriett-alabama-democratic-nomination-us-senate-race/',
      publishedAt: '2026-06-17',
      summary: 'Attorney Everett Wess narrowly won the Democratic Senate runoff over Dakarai Larriett.',
      race: 'senate',
    },
    {
      id: 'al-headline-3',
      title: 'Alabama Governor Primary Election 2026 Live Results: Tuberville, Jones Projected Winners',
      sourceName: 'NBC News',
      sourceUrl: 'https://www.nbcnews.com/politics/2026-primary-elections/alabama-governor-results',
      publishedAt: '2026-05-19',
      summary:
        "Sen. Tommy Tuberville and former Sen. Doug Jones won their parties' nominations for the open governor's race.",
      race: 'governor',
    },
    {
      id: 'al-headline-4',
      title:
        'POLL: A Doug Jones vs. Tommy Tuberville gubernatorial rematch in 2026 would be another massive blowout',
      sourceName: 'Yellowhammer News',
      sourceUrl:
        'https://yellowhammernews.com/poll-a-doug-jones-vs-tommy-tuberville-gubernatorial-rematch-in-2026-would-be-another-massive-blowout/',
      publishedAt: '2025-11-18',
      summary:
        'An early Cygnal poll showed Tuberville leading Jones 53%-34% in a hypothetical general-election rematch of their 2020 Senate race.',
      race: 'governor',
    },
  ],
}
