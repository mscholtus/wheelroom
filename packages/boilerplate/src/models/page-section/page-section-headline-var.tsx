/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Headline
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { elementStyles } from '../../themes/yosemite/elements/element-styles'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { sectionHeadlineStyle } from '../../themes/yosemite/sections/section-headline-style'
import { pageSectionHeadlinePreset } from '../../wheelroom/wheels/section/unicorn/presets/page-section-headline-preset'
import { PageSectionProps } from './page-section'
import { PageSectionUnicorn } from '../../wheelroom/wheels/section/unicorn/page-section-unicorn'
import { styledSystemConfig } from '../../themes/yosemite/styled-system/styled-system-config'
import { Wheel } from '../../wheelroom/wheels/types'
import { yosemiteDark } from '../../themes/yosemite/yosemite-dark'
import { yosemiteLight } from '../../themes/yosemite/yosemite-light'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'

export const PageSectionHeadlineVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const style = deepMerge([
    { topic: topicPreset },
    pageSectionHeadlinePreset,
    sectionHeadlineStyle,
  ])

  const wheel: Wheel = {
    style,
    elementStyles,
    theme: props.activeThemeId === 'light' ? yosemiteLight : yosemiteDark,
    styledSystemConfig,
  }

  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionUnicorn
        topicProps={{
          pageSectionActions: props.actions,
          pageSectionInfo,
          useHeadingElement: pageSectionInfo.index <= 1 ? 'h1' : 'h2',
          wheel,
        }}
        containerStyle="container"
        maxTopics={1}
        pageSection={props}
        wheel={wheel}
      />
    )
  }
  return <NotImplemented pageSection={props} wheel={wheel} />
}
