import {
  FieldType,
  WheelroomComponent,
  WheelroomComponents,
} from '@jacco-meijer/wheelroom'
import { getCases } from '@jacco-meijer/wheelroom'
import {
  ContentfulComponent,
  ContentfulComponents,
} from '../../types/contentful-components'
import { ContentfulFieldDefinitions } from '../../types/contentful-field-definitions'
import { ContentfulFields } from '../../types/contentful-fields'
import { mergeFields } from './merge-fields'

export const generateContentfulComponents = (
  wheelroomComponents: WheelroomComponents,
  fieldDefinitions: ContentfulFieldDefinitions
): ContentfulComponents => {
  const components: ContentfulComponents = {}
  // Loop through all configured wheelroom components
  Object.entries(wheelroomComponents).forEach(
    ([componentName, wheelroomComponent]: [string, WheelroomComponent]) => {
      const componentNameCases = getCases(componentName)
      const fields: ContentfulFields = {}
      // For each component, loop through all configured wheelroom fields
      Object.entries(wheelroomComponent.fields).forEach(
        ([fieldName, fieldValue]: [string, FieldType]) => {
          if (fieldValue.system) {
            // Skip system fields
            return
          }
          let contentfulFieldDefinition
          // If field.typePostfix is present, use it
          if (
            'typePostfix' in fieldValue &&
            fieldValue.type + fieldValue.typePostfix in
              fieldDefinitions.fieldTypes
          ) {
            contentfulFieldDefinition =
              fieldDefinitions.fieldTypes[
                fieldValue.type + fieldValue.typePostfix
              ]
          } else {
            // Field.typePostfix not present, use field.type
            contentfulFieldDefinition =
              fieldDefinitions.fieldTypes[fieldValue.type!]
          }
          fields[fieldName] = mergeFields({
            cfFieldDefinition: contentfulFieldDefinition,
            componentName,
            fieldName,
            wrComponents: wheelroomComponents,
            wrField: fieldValue,
          })
        }
      )
      const component: ContentfulComponent = {
        description: componentNameCases.sentenceCase,
        displayField: 'title',
        fields,
        modelVersion: wheelroomComponent.modelVersion,
        type: componentNameCases.camelCase,
      }
      components[componentName] = component
    }
  )
  return components
}
