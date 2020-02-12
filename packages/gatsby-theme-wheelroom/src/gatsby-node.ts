import { buildNamedPaths } from './lib/build-named-paths'
import { createPages } from './lib/create-pages'
import { createSubPages } from './lib/create-sub-pages'
import { optionsValidator } from './lib/options-validator'
import { runQueries } from './lib/run-queries'
import { Options } from './types/options'
import { buildPathNames } from './lib/build-path-names'
import { getDefaultLocale } from './lib/get-default-locale'

exports.createPages = async ({ graphql, actions }: any, options: Options) => {
  const { createPage } = actions
  const optionsHealth = optionsValidator(options)
  if (optionsHealth.valid) {
    console.log(optionsHealth.message)
  } else {
    throw new Error(optionsHealth.message)
  }

  const queryResults = await runQueries({ graphql, queries: options.queries })
  const defaultLocale = options.defaultLocale || getDefaultLocale({
    queryResults,
  })
  console.log('Using default locale:', defaultLocale)

  const pathNames = buildPathNames({
    defaultLocale,
    queryResults,
  })

  const namedPaths = buildNamedPaths({
    defaultLocale,
    queryResults,
    pathNames,
  })
  const pageTemplate = options.pageTemplate

  createPages({
    createPage,
    defaultLocale,
    namedPaths,
    pageTemplate,
    queryResults,
    pathNames,
  })
  createSubPages({
    createPage,
    defaultLocale,
    namedPaths,
    pageTemplate,
    queryResults,
    pathNames,
  })
}
