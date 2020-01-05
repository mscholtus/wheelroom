import {
  parser,
  WheelroomComponent,
  WheelroomField,
} from '@jacco-meijer/wheelroom'

const wheelroomTypeToTsType = {
  date: 'string',
  dropdown: 'string',
  image: 'FluidImage',
  multipleComponents: 'any',
  number: 'number',
  richText: `{\n    %fieldName%: string\n  }`,
  shortText: 'string',
  singleComponent: 'any',
  tags: 'string[]',
}

interface ParseReactProps {
  component: WheelroomComponent
  componentName: string
  params: {
    [name: string]: string
  }
}

export const parseReactProps = (context: ParseReactProps): string => {
  const indentLevel = context.params.indent
    ? parseInt(context.params.indent, 10)
    : 0
  const indentString = Array(indentLevel + 1).join(' ')
  const reactProps = Object.entries(context.component.fields)
    .map(([fieldName, field]: [string, WheelroomField]) => {
      // const fName = getCases(fieldName)
      const wheelroomType = field.type || 'shortText'
      const typescriptType = parser({
        componentName: context.componentName,
        fieldName,
        unparsed: wheelroomTypeToTsType[wheelroomType],
      })
      return `${indentString}${fieldName}: ${typescriptType}`
    })
    .join('\n')
  return reactProps
}