/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Navigation
 *
 */

import React from 'react'
import { PageSectionProps } from '../page-section'
import { NotImplemented } from '../../../core/lib/not-implemented'
import { getPageSectionInfo } from '../../../core/lib/get-page-section-info'
import { NavigationFooterTree } from '../../../core/model-views/page-section/navigation-footer-tree'
import { NavigationHeaderTree } from '../../../core/model-views/page-section/navigation-header-tree'
import { navigationHeaderTreeStyle } from './navigation-header-tree-style'
import { navigationFooterTreeStyle } from './navigation-footer-tree-style'

export const PageSectionNavigationVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  if (info.hasNavigation && info.index === 0) {
    return (
      <NavigationHeaderTree
        pageSection={props}
        treeStyle={navigationHeaderTreeStyle}
      />
    )
  }

  if (info.hasNavigation && info.index === info.sectionCount - 1) {
    return (
      <NavigationFooterTree
        pageSection={props}
        treeStyle={navigationFooterTreeStyle}
      />
    )
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
