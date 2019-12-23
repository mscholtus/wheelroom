export const componentBasicVar = (vars) => {
  // Skip this template if not present in filter array
  if (
    !vars.options.filter.includes(vars.component.component.model.wheelroomType)
  ) {
    return
  }

  return `/**
 * Component variation
 *
 * Component type: ${vars.componentName.camelCase}
 * Wheelroom type: ${vars.component.component.model.wheelroomType}
 * Variation: basic
 *
 */

import * as React from 'react'

import { ${vars.componentName.pascalCase}Props } from './${vars.componentName.kebabCase}.js'

export const ${vars.componentName.pascalCase}BasicVar = (props: ${vars.componentName.pascalCase}Props) => {
  return (
    <div>
      <h2>${vars.componentName.pascalCase}Basic</h2>
      <p>Hello world</p>
    </div>
  )
}
`
}