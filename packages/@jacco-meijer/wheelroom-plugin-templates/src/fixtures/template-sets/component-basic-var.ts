export const componentBasicVar = `/**
 * Component variation
 *
 * Component type: %componentName%
 * Wheelroom type: %componentType%
 * Variation: basic
 *
 */

import * as React from 'react'

import { %ComponentName%Props } from './%component-name%'

export const %ComponentName%BasicVar = (props: %ComponentName%Props) => {
  return (
    <div>
      <h2>%ComponentName%Basic</h2>
      <p>Hello world</p>
    </div>
  )
}
`