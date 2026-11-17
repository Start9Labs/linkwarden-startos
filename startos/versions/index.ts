import { VersionGraph } from '@start9labs/start-sdk'
import { current } from './current'
import { v_2_16_0_1 } from './v2.16.0_1'
import { v_2_16_3_0 } from './v2.16.3_0'

export const versionGraph = VersionGraph.of({
  current,
  other: [v_2_16_3_0, v_2_16_0_1],
})
