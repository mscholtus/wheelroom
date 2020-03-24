/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Cards
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../lib/not-implemented'
import { Cards } from './cards/cards'
import { getPageSectionInfo } from '../../lib/get-page-section-info'

export const PageSectionCardsVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.hasTopic) {
    return <Cards pageSection={props} />
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
