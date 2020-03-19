/**
 * Generates this typescript file: src/config/plugin-contentful/content-types.ts
 *
 * How it works
 *
 * The script imports the content set from ../plugin-contentful/content-sets
 * Next the script imports the components from ../wheelroom/config-components
 *
 * It then generates interface definitions for each component. The content set
 * is used to find valid component names in references. Like e.g.
 *
 * link?: 'homePage' | 'productPage' | 'backgroundPage' | 'contactPage'
 *
 * Runs like this:
 * - npx tsc --project src/config/helpers/tsconfig.json
 * - node compiled-config/helpers/content-types-generator.js
 *
 *
 * Note: the script needs a valid content set to generate content types for the
 * same content set. This means you can easily get stuck. When by accident
 * invalid types are generated, the content set is invalid and the generator
 * cannot be used to fix the invalid types. Use git to revert in that case or
 * fix the content set manually.
 *
 */

import {
  FieldType,
  FieldTypeName,
  WheelroomComponent,
} from '@wheelroom/wheelroom'
import * as fse from 'fs-extra'
import { contentSets } from '../plugin-contentful/content-sets'
import { configComponents } from '../wheelroom/config-components'

const TEMPLATE_SET = 'boilerplate'

type TypeTable = Record<FieldTypeName, string>

const wheelroomTypeToTsType: TypeTable = {
  date: 'string',
  dropdown: '',
  image: 'boolean',
  longText: 'string',
  multipleComponents: 'string[]',
  number: 'number',
  richText: 'string',
  shortText: 'string',
  singleComponent: 'string[]',
  tags: 'string[]',
}

const getAllowedComponentIds = (field: FieldType, limitResults: string[]) => {
  // Limit values to defined components that fit allowedComponents
  if (field.type === 'singleComponent' || field.type === 'multipleComponents') {
    Object.entries(contentSets[TEMPLATE_SET]).forEach(
      ([componentId, compInstance]: [string, any]) => {
        if (field.allowedComponents.includes(compInstance.model)) {
          limitResults.push(`'${componentId}'`)
        }
      }
    )
  }
}

const getPageSections = (field: FieldType, limitResults: string[]) => {
  // Limit values to defined components that have settings.asPageSection
  if (field.type === 'multipleComponents') {
    Object.entries(contentSets[TEMPLATE_SET]).forEach(
      ([componentId, compInstance]: [string, any]) => {
        if (configComponents[compInstance.model].settings.asPageSection) {
          limitResults.push(`'${componentId}'`)
        }
      }
    )
  }
}

const getFieldValue = (field: FieldType) => {
  const limitResults: string[] = []
  getAllowedComponentIds(field, limitResults)
  if (field.type === 'dropdown') {
    // Limit values to dropdown items
    limitResults.push(...field.items.map((item: string) => `'${item}'`))
    return limitResults.join(' | ')
  } else if (field.type === 'singleComponent') {
    if (limitResults.length > 0) {
      return limitResults.join(' | ')
    } else {
      return 'string[]'
    }
  } else if (field.type === 'multipleComponents') {
    if (limitResults.length > 0) {
      return `Array<${limitResults.join(' | ')}>`
    } else {
      return 'string[]'
    }
  }
  return wheelroomTypeToTsType[field.type]
}

const firstUpperCase = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)

let modelString = 'type Model ='
let content = ''

Object.entries(configComponents).forEach(
  ([componentName, wrComponent]: [string, WheelroomComponent]) => {
    modelString += `
  | ${firstUpperCase(componentName)}Model`
    content += `interface ${firstUpperCase(componentName)}Model {
  fields: {
`
    Object.entries(wrComponent.fields).forEach(
      ([fieldName, field]: [string, FieldType]) => {
        if (fieldName[0] === '_') {
          return
        }
        let fieldValue = getFieldValue(field)
        if (fieldName === 'sections') {
          // Sections are set with the %componentNameArray% variable, handle
          // them manually here
          const limitResults: string[] = []
          getPageSections(field, limitResults)
          fieldValue = `Array<${limitResults.join(' | ')}>`
        }

        content += `    ${fieldName}${field.required ? '' : '?'}: ${fieldValue}
`
      }
    )
    content += `    title: string
`
    content += `  }
  model: '${componentName}'
}
`
  }
)

content += `${modelString}

export interface ContentTypes {
  [componentId: string]: Model
}
`

fse.outputFile('src/config/plugin-contentful/content-types.ts', content)
