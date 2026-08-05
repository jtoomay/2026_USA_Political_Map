import type { StateElectionData } from '@/api/elections'

export const kansas: StateElectionData = {
  slug: 'kansas',
  name: 'Kansas',
  postalCode: 'KS',
  senate: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: { name: 'Roger Marshall', party: 'R' },
    status:
      "Sen. Roger Marshall is seeking a second term and is heavily favored against minor primary challenger Pond Naramore ahead of the August 4, 2026 primary, with President Trump's endorsement locked in. Democrats face a fractured, 11-candidate primary field; a Change Research poll (June 11–15) showed pastor Adam Hamilton leading with just 18% and 55% undecided, while a later internal poll released by Hamilton's own campaign (GBAO Strategies, July 13–16) showed him further ahead at 30%, followed by Christy Davis, Noah Taylor and state Sen. Patrick Schmidt.",
    candidates: [
      { name: 'Roger Marshall', party: 'R', incumbent: true, winProbability: 90 },
      { name: 'Adam Hamilton', party: 'D', incumbent: false, winProbability: 3 },
      { name: 'Pond Naramore', party: 'R', incumbent: false, winProbability: 1 },
      { name: 'Christy Davis', party: 'D', incumbent: false, winProbability: 1 },
      { name: 'Noah Taylor', party: 'D', incumbent: false, winProbability: 1 },
      { name: 'Patrick Schmidt', party: 'D', incumbent: false, winProbability: 1 },
      { name: 'Anne Parelkar', party: 'D', incumbent: false, winProbability: 1 },
      { name: 'Erik Murray', party: 'D', incumbent: false, winProbability: 1 },
      { name: 'Sandy Spidel Neumann', party: 'D', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Senate ratings (March 4, 2026)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-senate/',
      },
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — Kansas Senate 2026 (Solid R, April 13, 2026)',
        sourceUrl: 'https://www.cookpolitical.com/senate/race/488581',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'R',
        source: 'Inside Elections — Kansas Senate 2026 (Solid R, April 23, 2026)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=ks&office=senate',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Likely',
        leaning: 'R',
        source: 'Decision Desk HQ — 2026 Senate forecast (July 14, 2026)',
        sourceUrl: 'https://votes.decisiondeskhq.com/forecast/2026/senate',
      },
    ],
    polls: [
      {
        id: 'ks-senate-2026-06-15-change-research',
        pollster: 'Change Research',
        dateConducted: '2026-06-15',
        sampleSize: 1000,
        results: [
          { candidateName: 'Adam Hamilton', percentage: 18 },
          { candidateName: 'Christy Davis', percentage: 10 },
          { candidateName: 'Patrick Schmidt', percentage: 7 },
          { candidateName: 'Noah Taylor', percentage: 4 },
          { candidateName: 'Anne Parelkar', percentage: 3 },
          { candidateName: 'Erik Murray', percentage: 2 },
          { candidateName: 'Sandy Spidel Neumann', percentage: 1 },
        ],
        sourceName: 'Great Bend Post',
        sourceUrl: 'https://greatbendpost.com/posts/1553fe8e-b4f1-4d2a-891d-bad1c4906fa4',
      },
      {
        id: 'ks-senate-2026-07-16-gbao',
        pollster: 'GBAO Strategies (Hamilton campaign internal poll)',
        dateConducted: '2026-07-16',
        sampleSize: 600,
        results: [
          { candidateName: 'Adam Hamilton', percentage: 30 },
          { candidateName: 'Christy Davis', percentage: 13 },
          { candidateName: 'Noah Taylor', percentage: 10 },
          { candidateName: 'Patrick Schmidt', percentage: 5 },
          { candidateName: 'Erik Murray', percentage: 2 },
        ],
        sourceName: 'Sunflower State Journal',
        sourceUrl: 'https://sunflowerstatejournal.com/hamilton-leading-democratic-u-s-senate-field-new-internal-poll-shows/',
      },
    ],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: null,
    status:
      "Open seat: Gov. Laura Kelly is term-limited. Six Republicans are competing in the August 4, 2026 primary, led by state Senate President Ty Masterson, who has President Trump's full endorsement and held a Trump tele-rally on July 29, 2026; also running are Secretary of State Scott Schwab, Insurance Commissioner Vicki Schmidt and former state Rep. Charlotte O'Hara. Three Democrats are competing: state Sen. Cindy Holscher led a June 2026 Change Research poll of the Democratic primary at 37%, ahead of Kelly-backed state Sen. Ethan Corson and Overland Park Mayor Curt Skoog. Forecasters lean the general election toward the eventual Republican nominee.",
    candidates: [
      { name: 'Ty Masterson', party: 'R', incumbent: false, winProbability: 28 },
      { name: 'Cindy Holscher', party: 'D', incumbent: false, winProbability: 21 },
      { name: 'Scott Schwab', party: 'R', incumbent: false, winProbability: 13 },
      { name: 'Ethan Corson', party: 'D', incumbent: false, winProbability: 12 },
      { name: 'Vicki Schmidt', party: 'R', incumbent: false, winProbability: 11 },
      { name: 'Curt Skoog', party: 'D', incumbent: false, winProbability: 7 },
      { name: "Charlotte O'Hara", party: 'R', incumbent: false, winProbability: 5 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Lean',
        leaning: 'R',
        source: 'Cook Political Report — Kansas Governor 2026 (Lean R, September 2025)',
        sourceUrl: 'https://www.cookpolitical.com/governor/race/479511',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Lean',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Governor ratings (Lean R, September 2025)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Toss-up',
        leaning: null,
        source: 'Inside Elections — Kansas Governor 2026 (August 2025)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=ks&office=governor',
      },
    ],
    polls: [
      {
        id: 'ks-governor-2026-06-15-change-research',
        pollster: 'Change Research',
        dateConducted: '2026-06-15',
        sampleSize: 1000,
        results: [
          { candidateName: 'Cindy Holscher', percentage: 37 },
          { candidateName: 'Ethan Corson', percentage: 10 },
          { candidateName: 'Curt Skoog', percentage: 7 },
        ],
        sourceName: 'Great Bend Post',
        sourceUrl: 'https://greatbendpost.com/posts/1553fe8e-b4f1-4d2a-891d-bad1c4906fa4',
      },
    ],
  },
  house: {
    totalSeats: 4,
    democratSeats: 1,
    republicanSeats: 3,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'ks-headline-1',
      title: 'Trump calls on Kansans to vote early while promoting GOP candidate for governor',
      sourceName: 'Kansas Reflector',
      sourceUrl:
        'https://kansasreflector.com/2026/07/30/trump-calls-on-kansans-to-vote-early-while-promoting-gop-candidate-for-governor/',
      publishedAt: '2026-07-30',
      summary:
        "President Trump held a tele-rally for Senate President Ty Masterson days before the August 4 Republican primary, urging Kansans to vote early for his endorsed gubernatorial candidate.",
      race: 'governor',
    },
    {
      id: 'ks-headline-2',
      title: "Who's running for Kansas governor in 2026? Here's a guide to the candidates",
      sourceName: 'Lawrence Times',
      sourceUrl: 'https://lawrencekstimes.com/2026/07/27/kns-ks-gov-candidates-202608/',
      publishedAt: '2026-07-27',
      summary:
        'A rundown of the crowded Republican and Democratic fields competing to succeed term-limited Gov. Laura Kelly ahead of the August primary.',
      race: 'governor',
    },
    {
      id: 'ks-headline-3',
      title: 'Hamilton leading Democratic U.S. Senate field, new internal poll shows',
      sourceName: 'Sunflower State Journal',
      sourceUrl:
        'https://sunflowerstatejournal.com/hamilton-leading-democratic-u-s-senate-field-new-internal-poll-shows/',
      publishedAt: '2026-07-21',
      summary:
        "An internal poll released by pastor Adam Hamilton's campaign showed him with a 17-point lead over his nearest rival in the crowded Democratic Senate primary.",
      race: 'senate',
    },
    {
      id: 'ks-headline-4',
      title: 'Kansas poll of likely Democratic voters favors Holscher for governor, Hamilton for U.S. Senate',
      sourceName: 'Great Bend Post',
      sourceUrl: 'https://greatbendpost.com/posts/1553fe8e-b4f1-4d2a-891d-bad1c4906fa4',
      publishedAt: '2026-06-25',
      summary:
        'A Change Research survey of likely Kansas Democratic primary voters found state Sen. Cindy Holscher leading the governor field and pastor Adam Hamilton leading a fractured Senate field, with large undecided shares in both races.',
    },
    {
      id: 'ks-headline-5',
      title: 'Democratic state senator in Kansas eager to break through pack in crowded U.S. Senate race',
      sourceName: 'Kansas Reflector',
      sourceUrl:
        'https://kansasreflector.com/2026/05/04/democratic-state-senator-in-kansas-eager-to-break-through-pack-in-crowded-u-s-senate-race/',
      publishedAt: '2026-05-04',
      summary:
        'State Sen. Patrick Schmidt of Topeka, a 2022 U.S. House candidate, says his legislative experience sets him apart in the 11-candidate Democratic primary to challenge Sen. Roger Marshall.',
      race: 'senate',
    },
  ],
}
