import { NcssProps } from '../../elements/types'

export interface TopicContentTextTreeStyle {
  /** Wrapper around heading and abstract */
  wrapper?: NcssProps
  /** Heading style */
  heading?: NcssProps
  /** Abstract style */
  abstract?: NcssProps
}

export const topicContentTextStyle: TopicContentTextTreeStyle = {}