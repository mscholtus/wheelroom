/**
 *
 * These values are set unless specified differently
 *
 */

import { Field } from '../../types/fields'

export const fieldDefaults: Field = {
  type: 'shortText',
  helpText: '%Field name% for %component name%',
  initialContent: 'Demo content for %component name% %field name%',
  localized: false,
  required: false,
}
