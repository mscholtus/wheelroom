import { componentFields } from '../helpers/component-fields'
import { getModelFields } from '../partials/get-model-fields'
import { Vars } from '../types/vars'

export const modelNoVariation = (vars: Vars) => {
  // Skip this template if not present in filter array
  if (!vars.options.filter.includes(vars.answers.wheelroomType)) {
    return
  }

  const fields = componentFields(vars.answers.componentFields)
  const modelFields = getModelFields(fields, vars)

  return `/**
 * Model definition
 *
 * Component type: ${vars.componentName.camelCase}
 * Wheelroom type: ${vars.answers.wheelroomType}
 *
 */

import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'

export const model = {
  contentBackend: 'contentful',
  description: '${vars.componentName.firstUpperCase}',
  displayField: 'title',
  fields: {
    title: {
      initialContent: 'Demo ${vars.componentName.camelCase} title',
      settings: {
        helpText: 'Never displayed, only used for listing within Contentful',
      },
      specs: {
        name: 'Title',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    // tslint:disable-next-line: object-literal-sort-keys
${modelFields}  },
  modelVersion: '1.0.0',
  name: '${vars.componentName.firstUpperCase}',
  type: '${vars.componentName.camelCase}',
  wheelroomType: '${vars.answers.wheelroomType}',
} as Model
`
}
