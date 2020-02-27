import { wrapWithProvider } from '@jacco-meijer/admin-core'
import { wrapWithModulesInit } from '@jacco-meijer/admin-page-preview'

export const wrapRootElement = wrapWithProvider
export const wrapPageElement = wrapWithModulesInit
export const onServiceWorkerUpdateReady = () => window.location.reload(true)
