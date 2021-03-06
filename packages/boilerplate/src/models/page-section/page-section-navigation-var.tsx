/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Navigation
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { navFooterPreset } from '../../wheelroom/wheels/section/navigation-footer/presets/nav-footer-preset'
import { navHeaderPreset } from '../../wheelroom/wheels/section/navigation-header/presets/nav-header-preset'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { PageSectionNavigationFooter } from '../../wheelroom/wheels/section/navigation-footer/nav-footer'
import { PageSectionNavigationHeader } from '../../wheelroom/wheels/section/navigation-header/nav-header'
import { PageSectionProps } from './page-section'
import { ThemeId } from '../../admin-resources/theme-info'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'

export const PageSectionNavigationVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const wheelHeader: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheelHeader.style = deepMerge([
    { topic: topicPreset },
    navHeaderPreset,
    getSectionStyle('navigation').header,
  ])

  const wheelFooter: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheelFooter.style = deepMerge([
    { topic: topicPreset },
    navFooterPreset,
    getSectionStyle('navigation').footer,
  ])
  if (pageSectionInfo.hasNavigationSegment && pageSectionInfo.index < 2) {
    return (
      <ScrollSpy
        eventId={props.eventId}
        siteEmbeds={props.globals.siteEmbeds}
        pageSectionProps={props}
      >
        <PageSectionNavigationHeader
          hideThemeSwitchButton={false}
          pageSection={props}
          wheel={wheelHeader}
          containerStyle="container"
          //useLogoElement={<SvgAirplay ncss={{ color: 'blue', w: '50px' }} wheel={wheelHeader} />}
        />
      </ScrollSpy>
    )
  }
  if (
    pageSectionInfo.hasNavigationSegment &&
    pageSectionInfo.index > pageSectionInfo.sectionCount - 2
  ) {
    return (
      <ScrollSpy
        eventId={props.eventId}
        siteEmbeds={props.globals.siteEmbeds}
        pageSectionProps={props}
      >
        <PageSectionNavigationFooter
          pageSection={props}
          wheel={wheelFooter}
          containerStyle="container"
        />
      </ScrollSpy>
    )
  }

  return <NotImplemented pageSection={props} wheel={wheelHeader} />
}
