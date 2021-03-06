/**
 * Fixture content for testing
 *
 *
 */

import { WheelroomReplaceSet } from '../types/replace-sets'

export interface ArgvReplaceSets {
  [setName: string]: WheelroomReplaceSet
}

export const argvReplaceSets: ArgvReplaceSets = {
  replaceTest: {
    allFieldTypes: {
      fields: {
        dateField: {
          pattern: /2019/i,
          replacement: '2020',
        },
        dropdownField: {
          pattern: /A/,
          replacement: 'B',
        },
        longTextField: {
          pattern: /(test)(ing)/,
          replacement: '$2-$1',
        },
        numberField: {
          pattern: 25,
          replacement: 36,
        },
        tagsField: {
          pattern: /some/,
          replacement: 'last',
        },
      },
    },
  },
}
