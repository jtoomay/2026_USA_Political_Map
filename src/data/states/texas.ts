import type { StateElectionData } from '@/api/elections'

export const texas: StateElectionData = {
  slug: 'texas',
  name: 'Texas',
  postalCode: 'TX',
  senate: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: null, // Sen. John Cornyn (R) lost renomination — first TX incumbent senator to do so since 1970
    status:
      "Attorney General Ken Paxton beat Sen. John Cornyn 64%–36% in the May 26, 2026 Republican runoff, after Cornyn had edged Paxton 41.9%–40.7% (with Rep. Wesley Hunt at 13.5%) in the March 3 first round. State Rep. James Talarico won the Democratic nomination outright with 52.4% over Rep. Jasmine Crockett and Ahmad Hassan; Colin Allred withdrew in December 2025. Talarico has heavily outraised Paxton (over $30 million in Q2 alone, more than triple Paxton's haul) and has held a narrow, growing lead in most public polling through late July, a dramatic shift for a statewide Texas race. Cook Political Report and Sabato's Crystal Ball both downgraded the race from Likely to Lean Republican after the runoff; Decision Desk HQ now calls it a Toss-up. The two campaigns are negotiating televised debate terms.",
    candidates: [
      { name: 'Ken Paxton', party: 'R', incumbent: false, winProbability: 52 },
      { name: 'James Talarico', party: 'D', incumbent: false, winProbability: 48 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Lean',
        leaning: 'R',
        source: 'Cook Political Report — Texas Senate 2026 (moved Likely R to Lean R, May 26, 2026)',
        sourceUrl: 'https://www.cookpolitical.com/ratings/senate-race-ratings',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Lean',
        leaning: 'R',
        source:
          "Sabato's Crystal Ball — Texas Senate to Leans Republican Following Paxton Win, TX-35 Makes Same Move (May 27, 2026)",
        sourceUrl:
          'https://centerforpolitics.org/crystalball/texas-senate-to-leans-republican-following-paxton-win-tx-35-makes-same-move-redistricting-updates/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Likely',
        leaning: 'R',
        source: 'Inside Elections — Texas Senate 2026 (Likely R, April 23, 2026)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=tx&office=senate',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Toss-up',
        leaning: null,
        source: 'Decision Desk HQ — 2026 Senate forecast (Toss-up, July 14, 2026)',
        sourceUrl: 'https://votes.decisiondeskhq.com/forecast/2026/senate',
      },
    ],
    polls: [
      {
        id: 'tx-senate-2026-07-27-fox-news',
        pollster: 'Fox News (Beacon Research / Shaw & Company Research)',
        dateConducted: '2026-07-27',
        sampleSize: null,
        results: [
          { candidateName: 'James Talarico', percentage: 51 },
          { candidateName: 'Ken Paxton', percentage: 48 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Texas',
      },
      {
        id: 'tx-senate-2026-07-17-txpor',
        pollster: 'Texas Public Opinion Research',
        dateConducted: '2026-07-17',
        sampleSize: null,
        results: [
          { candidateName: 'James Talarico', percentage: 45 },
          { candidateName: 'Ken Paxton', percentage: 40 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Texas',
      },
      {
        id: 'tx-senate-2026-06-28-a2-insights',
        pollster: 'A2 Insights',
        dateConducted: '2026-06-28',
        sampleSize: null,
        results: [
          { candidateName: 'James Talarico', percentage: 48 },
          { candidateName: 'Ken Paxton', percentage: 46 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Texas',
      },
      {
        id: 'tx-senate-2026-06-27-nyt-siena',
        pollster: 'The New York Times / Siena College',
        dateConducted: '2026-06-27',
        sampleSize: null,
        results: [
          { candidateName: 'James Talarico', percentage: 47 },
          { candidateName: 'Ken Paxton', percentage: 47 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Texas',
      },
    ],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: { name: 'Greg Abbott', party: 'R' },
    status:
      "Gov. Greg Abbott is seeking a fourth term after winning the March 3 Republican primary with 82% against token opposition. State Rep. Gina Hinojosa won a nine-candidate Democratic primary outright with 59% (former Rep. Chris Bell finished second); Beto O'Rourke and Jasmine Crockett both passed on the race. Abbott holds a large financial edge, backed by Elon Musk and Jerry Jones, but has spent comparatively little defending the seat. Public polling has tightened notably in late July — a Beacon Research/Shaw & Co. survey (July 23–27) put the race at just 50%–49%, and several outlets described it as a statistical tie — even though other polls still show Abbott up by mid-to-high single digits and every major forecaster's formal rating (last set in September 2025) remains Solid/Safe Republican.",
    candidates: [
      { name: 'Greg Abbott', party: 'R', incumbent: true, winProbability: 75 },
      { name: 'Gina Hinojosa', party: 'D', incumbent: false, winProbability: 25 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — Texas Governor 2026 (Solid R, September 11, 2025)',
        sourceUrl: 'https://www.cookpolitical.com/ratings/governor-race-ratings',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Governor ratings (Safe R, September 4, 2025)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'R',
        source: 'Inside Elections — Texas Governor 2026 (Solid R, August 28, 2025)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=tx&office=governor',
      },
    ],
    polls: [
      {
        id: 'tx-governor-2026-07-27-beacon',
        pollster: 'Beacon Research / Shaw & Company Research',
        dateConducted: '2026-07-27',
        sampleSize: null,
        results: [
          { candidateName: 'Greg Abbott', percentage: 50 },
          { candidateName: 'Gina Hinojosa', percentage: 49 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Texas_gubernatorial_election',
      },
      {
        id: 'tx-governor-2026-06-27-nyt-siena',
        pollster: 'The New York Times / Siena College',
        dateConducted: '2026-06-27',
        sampleSize: null,
        results: [
          { candidateName: 'Greg Abbott', percentage: 51 },
          { candidateName: 'Gina Hinojosa', percentage: 44 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Texas_gubernatorial_election',
      },
      {
        id: 'tx-governor-2026-06-21-socal',
        pollster: 'SoCal Strategies',
        dateConducted: '2026-06-21',
        sampleSize: null,
        results: [
          { candidateName: 'Greg Abbott', percentage: 54 },
          { candidateName: 'Gina Hinojosa', percentage: 42 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Texas_gubernatorial_election',
      },
      {
        id: 'tx-governor-2026-06-12-ut-texas-politics',
        pollster: 'University of Texas / Texas Politics Project',
        dateConducted: '2026-06-12',
        sampleSize: null,
        results: [
          { candidateName: 'Greg Abbott', percentage: 47 },
          { candidateName: 'Gina Hinojosa', percentage: 40 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Texas_gubernatorial_election',
      },
    ],
  },
  // TX-23 has been vacant since Rep. Tony Gonzales (R) resigned April 14,
  // 2026; counted in totalSeats but not in either party's column. The
  // 2025 mid-decade redistricting map (signed Aug. 29, 2025, upheld by the
  // Supreme Court) redrew boundaries but kept the seat count at 38.
  house: {
    totalSeats: 38,
    democratSeats: 13,
    republicanSeats: 24,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'tx-headline-1',
      title: 'Paxton and Talarico open battle for South Texas with dueling rallies, diverging pitches',
      sourceName: 'The Texas Tribune',
      sourceUrl: 'https://www.texastribune.org/2026/07/16/texas-senate-race-james-talarico-ken-paxton-south-texas/',
      publishedAt: '2026-07-16',
      summary:
        'Paxton and Talarico held competing campaign events in South Texas to court Latino voters, with Paxton emphasizing border security and Talarico focusing on affordability.',
      race: 'senate',
    },
    {
      id: 'tx-headline-2',
      title: 'Ken Paxton, James Talarico agree to televised Texas U.S. Senate debate',
      sourceName: 'CBS News',
      sourceUrl:
        'https://news.google.com/rss/articles/CBMiqAFBVV95cUxNRU5jSjQ4THVFVnVYci02N1pNQS1vdW9INkstb2dyV1pFbkI3OWdwc2c5ZnZtWE9LTkRpVmxCTFF4bE9jVXhzRm1oMUhiclY4Q0RPNWlhX1NQNU1FNUk5SHlzWHl0ZE8wWnlBSmNQRXc3QmRsRHFGNzNKdE9xNkJiNnBIMjU3dmktZFhZSjBmNndpMXBGZjRseVJYc21mVUthcGlnRXlqcFM?oc=5',
      publishedAt: '2026-07-30',
      race: 'senate',
    },
    {
      id: 'tx-headline-3',
      title: "Gina Hinojosa proposes sending every Texas household $1,500 in her bid to oust Greg Abbott",
      sourceName: 'The Texas Tribune',
      sourceUrl:
        'https://news.google.com/rss/articles/CBMiyAFBVV95cUxOV2J2aWJJUTJ6ZGZIUE5qdDBRWTNEbHVQNTVjd055eHZ0cjdPWVJFbVRyZFpKbFZrSW1ndm96UVNQekFXNFB2V3hhaV9HcmpDYndoQloxalJQM0d3c3kyQ0FGVGhMODZWbHVvd2hVTjZwYlJyVUM3aFduNXFfZDRwejV4NDFlMDI0SVg1NjI3ZUdPdDY2eGx6ZmFzd0FOY1BrYm5CZ1pxeHFfdlZ1R3ZrSGp1ODc2ay1sWld1WmtYUlhKTGd0cG14cg?oc=5',
      publishedAt: '2026-07-07',
      race: 'governor',
    },
    {
      id: 'tx-headline-4',
      title: 'Democrat Gina Hinojosa in statistical tie with Gov. Greg Abbott with election less than 100 days out',
      sourceName: 'San Antonio Current',
      sourceUrl:
        'https://news.google.com/rss/articles/CBMi2gFBVV95cUxPUTFHbW1makNibnp3VW1TejVBbG4zVUZ1UjB2SThRVzVIaHlwcEFLdGxDY0l0UWZBOHI1d1hWam1vX0JFS3ZWX01XVFVXWDVvUDNtQ0dJUzB1TUFqVWZ2WDg4YzdYeDZzMzZOQWd6UG4zZHRsaWdPR0lHN3lDU2VfYXhrazZ6MjJKWWphbm82a2wyRUtYWjhwQ25NUmFnal81WjZYQzA4YjVzMW1oTDBrR2dSYzNaWW5oOXRvdEgxbTFHN0J6S3k0c1dnbVhZYWdsV2gxdXpUYnB6Zw?oc=5',
      publishedAt: '2026-07-28',
      race: 'governor',
    },
  ],
}
