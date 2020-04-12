import React from 'react'
import { TopicProps } from '../../../models/topic/topic'
import { Box } from '../elements/grid'
import { BlockLevelElementName } from '../elements/types'
import { TopicInfo } from '../../lib/get-topic-info'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { Heading } from '../elements/heading'
import { TopicIcon } from './topic-icon'
import { ParserFunction } from '../../parsers/types'
import { Paragraph } from '../elements/paragraph'
import { Wheel } from '../types'

export interface TopicContentTextProps {
  /** Styling wheel */
  wheel: Wheel
  /** Defaults to h3 */
  useHeadingElement?: BlockLevelElementName
  /** Defaults to p */
  useAbstractElement?: BlockLevelElementName
  /** Defaults to h3 */
  useHeadingParser?: ParserFunction
  /** Defaults to p */
  useAbstractParser?: ParserFunction

  /** All topic props */
  topic: TopicProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo
}

export const TopicContentText = (props: TopicContentTextProps) => {
  const topicOptions = props.pageSectionInfo.topicOptions

  const useHeadingElement = props.useHeadingElement || 'h3'
  const useAbstractElement = props.useAbstractElement || 'p'

  const HeadingParser = props.useHeadingParser || Heading
  const AbstractParser = props.useAbstractParser || Paragraph

  return (
    <Box is="header" ncss={props.wheel.style.ncss} wheel={props.wheel}>
      {!topicOptions.hideIcon && (
        <TopicIcon
          icon={props.topic.icon}
          ncss={props.wheel.style.icon.ncss}
          wheel={props.wheel}
        />
      )}
      {!topicOptions.hideHeading && (
        <HeadingParser
          is={useHeadingElement}
          ncss={props.wheel.style.heading.ncss}
          wheel={props.wheel}
        >
          {props.topic.heading}
        </HeadingParser>
      )}
      {!topicOptions.hideAbstract &&
        props.topic.abstract &&
        props.topic.abstract.abstract && (
          <AbstractParser
            is={useAbstractElement}
            ncss={props.wheel.style.abstract.ncss}
            wheel={props.wheel}
          >
            {props.topic.abstract.abstract}
          </AbstractParser>
        )}
    </Box>
  )
}
