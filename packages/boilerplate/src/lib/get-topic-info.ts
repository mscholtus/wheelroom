import { TopicProps } from '../components/topic'

export interface TopicInfo {
  hasHeading: boolean
  hasAbstract: boolean
  hasAction: boolean
  hasFluidImageObject: boolean
}

export const getTopicInfo = (topic: TopicProps): TopicInfo => {
  const info = {
    hasHeading: false,
    hasAbstract: false,
    hasAction: false,
    hasFluidImageObject: false,
  } as TopicInfo

  if (topic.heading) {
    info.hasHeading = true
  }
  if (topic.abstract && topic.abstract.abstract) {
    info.hasAbstract = true
  }
  if (
    topic.actions &&
    Array.isArray(topic.actions) &&
    topic.actions.length > 0
  ) {
    info.hasAction = true
  }
  if (topic.image && topic.image.fluid) {
    info.hasFluidImageObject = true
  }

  return info
}
