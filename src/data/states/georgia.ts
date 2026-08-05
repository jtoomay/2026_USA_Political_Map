import type { StateElectionData } from '@/api/elections'

export const georgia: StateElectionData = {
  slug: 'georgia',
  name: 'Georgia',
  postalCode: 'GA',
  senate: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: { name: 'Jon Ossoff', party: 'D' },
    status:
      "Sen. Jon Ossoff, one of only two Democratic senators up in 2026 in a state Trump carried in 2024, is seeking a second term and ran unopposed for the Democratic nomination. U.S. Rep. Mike Collins won a combative Republican runoff over fellow Rep. Buddy Carter and former football coach Derek Dooley on June 16, 2026, with 55.5% and a late Trump endorsement. Collins brings a combative social-media presence, a pending ethics investigation, and a hardline abortion position into the general election. Ossoff has heavily outraised Collins, reporting $77.9 million raised through March 31, 2026.",
    candidates: [
      { name: 'Jon Ossoff', party: 'D', incumbent: true, winProbability: 62 },
      { name: 'Mike Collins', party: 'R', incumbent: false, winProbability: 37 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Toss-up',
        leaning: null,
        source: 'Cook Political Report — Georgia Senate 2026',
        sourceUrl: 'https://www.cookpolitical.com/senate/race/488561',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Likely',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 Senate ratings (moved Lean D to Likely D, July 30, 2026)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/georgia-senate-the-peach-state-ripens-for-democrats/',
      },
    ],
    polls: [
      {
        id: 'ga-senate-2026-06-27-fox-news',
        pollster: 'Fox News (Beacon Research / Shaw & Company Research)',
        dateConducted: '2026-06-27',
        sampleSize: 1002,
        results: [
          { candidateName: 'Jon Ossoff', percentage: 56 },
          { candidateName: 'Mike Collins', percentage: 43 },
        ],
        sourceName: 'Fox News',
        sourceUrl: 'https://www.foxnews.com/politics/fox-news-poll-early-look-georgia-senate-race',
      },
      {
        id: 'ga-senate-2026-06-30-wick',
        pollster: 'Wick Insights',
        dateConducted: '2026-06-30',
        sampleSize: 1175,
        results: [
          { candidateName: 'Jon Ossoff', percentage: 46.7 },
          { candidateName: 'Mike Collins', percentage: 42.9 },
        ],
        sourceName: 'Newsweek',
        sourceUrl: 'https://www.newsweek.com/jon-ossoffs-chances-of-defeating-mike-collins-in-georgia-senate-race-poll-12179218',
      },
    ],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: null,
    status:
      "Open seat: Gov. Brian Kemp is term-limited. Businessman Rick Jackson, who spent heavily from his own fortune, defeated Trump-endorsed Lt. Gov. Burt Jones in the June 16, 2026 Republican runoff after neither cleared 50% in the May 19 primary. Former Atlanta Mayor Keisha Lance Bottoms won the Democratic nomination outright in the May 19 primary; Democratic primary turnout exceeded Republican turnout for the first time since 2006. Multiple forecasters and prediction markets rate the general election a true toss-up, with most public polling showing Bottoms with a narrow-to-mid-single-digit lead over Jackson.",
    candidates: [
      { name: 'Keisha Lance Bottoms', party: 'D', incumbent: false, winProbability: 52 },
      { name: 'Rick Jackson', party: 'R', incumbent: false, winProbability: 45 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Toss-up',
        leaning: null,
        source: 'Cook Political Report — Georgia Governor 2026',
        sourceUrl: 'https://www.cookpolitical.com/governor/race/479486',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Toss-up',
        leaning: null,
        source: 'Inside Elections — Georgia Governor 2026 (moved Tilt R to Toss-up, June 25, 2026)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=ga&office=governor',
      },
    ],
    polls: [
      {
        id: 'ga-governor-2026-07-13-state-navigate',
        pollster: 'State Navigate',
        dateConducted: '2026-07-13',
        sampleSize: 450,
        results: [
          { candidateName: 'Keisha Lance Bottoms', percentage: 51 },
          { candidateName: 'Rick Jackson', percentage: 44 },
        ],
        sourceName: 'Yahoo News',
        sourceUrl: 'https://www.yahoo.com/news/politics/articles/state-navigate-georgia-governor-poll-163409611.html',
      },
    ],
  },
  // GA-13 has been vacant since Rep. David Scott's death in April 2026; its
  // special election was held July 28, 2026 but is counted in totalSeats
  // without a projected winner assigned to either party as of this snapshot.
  house: {
    totalSeats: 14,
    democratSeats: 4,
    republicanSeats: 9,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'ga-headline-1',
      title: 'Rick Jackson defeats Burt Jones to win Georgia GOP gubernatorial nomination, CBS News projects',
      sourceName: 'CBS News Atlanta',
      sourceUrl: 'https://www.cbsnews.com/atlanta/news/georgia-republican-governor-primary-runoff-results-rick-jackson-burt-jones/',
      publishedAt: '2026-06-16',
      summary:
        'Businessman Rick Jackson defeated Trump-endorsed Lt. Gov. Burt Jones in the Republican runoff, setting up a general-election matchup with Democrat Keisha Lance Bottoms.',
      race: 'governor',
    },
    {
      id: 'ga-headline-2',
      title: 'Georgia Senate: The Peach State Ripens for Democrats',
      sourceName: "Sabato's Crystal Ball",
      sourceUrl: 'https://centerforpolitics.org/crystalball/georgia-senate-the-peach-state-ripens-for-democrats/',
      publishedAt: '2026-07-30',
      summary:
        "Sabato's Crystal Ball moved the Georgia Senate race from Lean Democratic to Likely Democratic, citing Jon Ossoff's fundraising and Mike Collins's rocky general-election start.",
      race: 'senate',
    },
    {
      id: 'ga-headline-3',
      title: "Jon Ossoff's chances of defeating Mike Collins in Georgia Senate race—Poll",
      sourceName: 'Newsweek',
      sourceUrl: 'https://www.newsweek.com/jon-ossoffs-chances-of-defeating-mike-collins-in-georgia-senate-race-poll-12179218',
      publishedAt: '2026-07-09',
      race: 'senate',
    },
    {
      id: 'ga-headline-4',
      title: "AP Decision Notes: What to expect in Georgia's 13th Congressional District special election",
      sourceName: 'Associated Press (via ClickOrlando)',
      sourceUrl: 'https://www.clickorlando.com/news/politics/2026/07/27/ap-decision-notes-what-to-expect-in-georgias-13th-congressional-district-special-election/',
      publishedAt: '2026-07-27',
      summary:
        "A preview of the special election to fill the Atlanta-area seat left vacant by the death of longtime Rep. David Scott.",
      race: 'house',
    },
  ],
}
