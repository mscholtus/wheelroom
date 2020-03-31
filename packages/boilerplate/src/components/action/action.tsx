/**
 * Component
 *
 * Component type: action
 *
 */

import React from 'react'
import { getVariation } from '../../core/lib/get-variation'
import { ActionSingleVar } from './action-single-var'
import { ActionLocalProps } from '../../core/views/action/action'

const componentList = {
  ['single']: ActionSingleVar,
}

export interface ActionProps extends ActionLocalProps {
  /** Gatsby fetched data */
  __typename?: string
  title?: string
  heading?: string
  page?: any
  url?: string
}

export const Action = (props: ActionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
