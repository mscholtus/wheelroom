import React, { Fragment } from 'react'
import { getTopicInfo } from '../../../lib/get-topic-info'
import { TopicMedia } from './topic-media'
import { TopicContent } from './topic-content'
import { TopicWheelProps } from './topic'

export const TopicBody = (props: TopicWheelProps) => {
  const topicInfo = getTopicInfo(props.topic!)
  const pageSectionInfo = props.pageSectionInfo
  const topicOptions = pageSectionInfo.topicOptions

  const showMedia = topicInfo.hasMedia && !topicOptions.hideMedia
  return (
    <Fragment>
      {showMedia && (
        <TopicMedia
          pageSectionInfo={pageSectionInfo}
          wheel={{ ...props.wheel, style: props.wheel.style.media }}
          embed={props.topic!}
          topic={props.topic!}
          topicInfo={topicInfo}
        />
      )}
      <TopicContent
        fullTopicAsLink={props.fullTopicAsLink}
        maxActions={props.maxActions}
        pageSectionActions={props.pageSectionActions}
        pageSectionInfo={pageSectionInfo}
        wheel={{ ...props.wheel, style: props.wheel.style.content }}
        topic={props.topic!}
        topicInfo={topicInfo}
        useAbstractElement={props.useAbstractElement}
        useHeadingElement={props.useHeadingElement}
        useAbstractParser={props.useAbstractParser}
        useHeadingParser={props.useHeadingParser}
      />
    </Fragment>
  )
}
