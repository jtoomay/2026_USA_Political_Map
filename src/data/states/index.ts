import type { StateElectionData } from '@/api/elections'

import { alabama } from './alabama'
import { alaska } from './alaska'
import { arizona } from './arizona'
import { arkansas } from './arkansas'
import { california } from './california'
import { colorado } from './colorado'
import { connecticut } from './connecticut'
import { delaware } from './delaware'
import { florida } from './florida'
import { georgia } from './georgia'
import { hawaii } from './hawaii'
import { idaho } from './idaho'
import { illinois } from './illinois'
import { indiana } from './indiana'
import { iowa } from './iowa'
import { kansas } from './kansas'
import { kentucky } from './kentucky'
import { louisiana } from './louisiana'
import { maine } from './maine'
import { maryland } from './maryland'
import { massachusetts } from './massachusetts'
import { michigan } from './michigan'
import { minnesota } from './minnesota'
import { mississippi } from './mississippi'
import { missouri } from './missouri'
import { montana } from './montana'
import { nebraska } from './nebraska'
import { nevada } from './nevada'
import { newHampshire } from './new-hampshire'
import { newJersey } from './new-jersey'
import { newMexico } from './new-mexico'
import { newYork } from './new-york'
import { northCarolina } from './north-carolina'
import { northDakota } from './north-dakota'
import { ohio } from './ohio'
import { oklahoma } from './oklahoma'
import { oregon } from './oregon'
import { pennsylvania } from './pennsylvania'
import { rhodeIsland } from './rhode-island'
import { southCarolina } from './south-carolina'
import { southDakota } from './south-dakota'
import { tennessee } from './tennessee'
import { texas } from './texas'
import { utah } from './utah'
import { vermont } from './vermont'
import { virginia } from './virginia'
import { washington } from './washington'
import { westVirginia } from './west-virginia'
import { wisconsin } from './wisconsin'
import { wyoming } from './wyoming'

// One file per state (see src/data/states/<slug>.ts) so each research batch
// is an independently reviewable, independently mergeable unit — a bad or
// incomplete state never blocks the others, and each file maps 1:1 onto a
// future Supabase `states` row. Explicit imports (not filesystem globbing)
// keep this fully type-checked: a missing/misnamed export breaks `tsc`/
// `next build` immediately, localized to one file.
export const STATES: StateElectionData[] = [
  alabama,
  alaska,
  arizona,
  arkansas,
  california,
  colorado,
  connecticut,
  delaware,
  florida,
  georgia,
  hawaii,
  idaho,
  illinois,
  indiana,
  iowa,
  kansas,
  kentucky,
  louisiana,
  maine,
  maryland,
  massachusetts,
  michigan,
  minnesota,
  mississippi,
  missouri,
  montana,
  nebraska,
  nevada,
  newHampshire,
  newJersey,
  newMexico,
  newYork,
  northCarolina,
  northDakota,
  ohio,
  oklahoma,
  oregon,
  pennsylvania,
  rhodeIsland,
  southCarolina,
  southDakota,
  tennessee,
  texas,
  utah,
  vermont,
  virginia,
  washington,
  westVirginia,
  wisconsin,
  wyoming,
]
