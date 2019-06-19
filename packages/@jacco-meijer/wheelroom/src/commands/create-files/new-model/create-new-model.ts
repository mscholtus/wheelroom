import * as camelCase from 'camelcase'
import * as fs from 'fs'
import * as fse from 'fs-extra'
import * as inquirer from 'inquirer'
import * as util from 'util'
import { camelToDash, firstUpper, noTrailingSlash } from '../helpers'
import { questions } from './questions'
import { componentBasicVarTemplate } from './templates/component-basic-var-template'
import { componentTemplate } from './templates/component-template'
import { graphqlTemplate } from './templates/graphql-template'
import { modelTemplate } from './templates/model-template'
import { readmeTemplate } from './templates/readme-template'
import { variationsTemplate } from './templates/variations-template'

const writeFile = util.promisify(fs.writeFile)

const writeTemplate = async (
  fileName: string,
  componentPath: string,
  content: string
) => {
  const writeTo = componentPath + '/' + fileName

  console.log(`Writing to ${writeTo}...`)
  await writeFile(writeTo, content)
}

export const createNewModel = async (path: string) => {
  const answers = await inquirer.prompt(questions)

  const componentType = camelCase(answers.componentName)
  console.log(`Thanks, setting up ${componentType} component`)

  const componentClassName = camelCase(answers.componentName, {
    pascalCase: true,
  })
  const componentFileName = camelToDash(componentType)
  const wheelroomType = answers.wheelroomType
  const componentFolderName = camelToDash(componentType)
  const componentDescription = firstUpper(answers.componentName)
  const componentPath = noTrailingSlash(path) + `/${componentFolderName}`
  const componentFields = answers.componentFields
    .split(',')
    .map((item: string) => camelCase(item.trim()))
    .sort()

  try {
    await fse.ensureDir(componentPath)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }

  let fileName
  let content

  const componentProps = componentFields
    .map(
      (fieldName: string) => `  ${fieldName}: string
`
    )
    .join('')

  const graphqlFields = componentFields
    .map(
      (fieldName: string) => `    ${fieldName}
`
    )
    .join('')

  const modelFields = componentFields
    .map(
      (fieldName: string) => `    ${fieldName}: {
      initialContent: 'Demo ${componentType} ${fieldName}',
      settings: {
        helpText: 'Generated field',
      },
      specs: {
        name: '${fieldName}',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
`
    )
    .join('')

  const componentAttributes = componentFields
    .map((fieldName: string) => `${fieldName}="Value goes here" `)
    .join('')

  if (['section', 'subPage'].includes(wheelroomType)) {
    fileName = `${componentFileName}-basic-var.tsx`
    content = componentBasicVarTemplate(
      componentFileName,
      componentClassName,
      componentType,
      wheelroomType
    )
    writeTemplate(fileName, componentPath, content)
  }

  if (['section', 'subPage'].includes(wheelroomType)) {
    fileName = `${componentFileName}.tsx`
    content = componentTemplate(
      componentProps,
      componentClassName,
      componentType,
      wheelroomType
    )
    writeTemplate(fileName, componentPath, content)
  }

  if (['section', 'subPage', 'global'].includes(wheelroomType)) {
    fileName = `graphql.ts`
    content = graphqlTemplate(
      componentType,
      componentClassName,
      graphqlFields,
      wheelroomType
    )
    writeTemplate(fileName, componentPath, content)
  }

  if (['section', 'subPage', 'global'].includes(wheelroomType)) {
    fileName = `model.ts`
    content = modelTemplate(
      componentDescription,
      modelFields,
      componentType,
      wheelroomType
    )
    writeTemplate(fileName, componentPath, content)
  }

  if (['section', 'subPage', 'global'].includes(wheelroomType)) {
    fileName = `README.md`
    content = readmeTemplate(
      componentFileName,
      componentClassName,
      componentAttributes,
      wheelroomType
    )
    writeTemplate(fileName, componentPath, content)
  }

  if (['section', 'subPage'].includes(wheelroomType)) {
    fileName = `variations.ts`
    content = variationsTemplate(
      componentFileName,
      componentClassName,
      componentType,
      wheelroomType
    )
    writeTemplate(fileName, componentPath, content)
  }

  console.log(`Done setting up ${componentType} component`)
}