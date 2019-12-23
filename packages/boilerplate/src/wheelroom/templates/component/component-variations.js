import { modelFields } from '../helpers/model-fields.js'
import { getVariationList } from '../partials/get-variation-list.js'

export const componentVariations = (vars) => {
  // Skip this template if not present in filter array
  if (
    !vars.options.filter.includes(vars.component.component.model.wheelroomType)
  ) {
    return
  }
  // Skip this template if no variations are found
  if (
    !vars.component.options ||
    !vars.component.options.variations ||
    vars.component.options.variations.length < 2
  ) {
    return
  }

  const fields = modelFields(vars.component.component.model)
  const componentProps = fields
    .sort()
    .map(
      (fieldName) => `  ${fieldName}: string
`
    )
    .join('')

  const variationList = getVariationList(
    vars.component.options.variations,
    vars
  )

  return `/**
 * Component
 *
 * Component type: ${vars.componentName.camelCase}
 * Wheelroom type: ${vars.component.component.model.wheelroomType}
 *
 */

import { getVariation } from '@jacco-meijer/content-models'
import * as React from 'react'
import { SectionProps } from '../section-props.js'
import { ${vars.componentName.pascalCase}BasicVar } from './${vars.componentName.kebabCase}-basic-var.js'

const componentList = {
${variationList}}

export interface ${vars.componentName.pascalCase}Props extends SectionProps {
  /** Gatsby fetched data */
${componentProps}}

export const ${vars.componentName.pascalCase} = (props: ${vars.componentName.pascalCase}Props) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
`
}