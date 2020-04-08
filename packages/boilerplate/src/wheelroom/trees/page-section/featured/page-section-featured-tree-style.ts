import { defaultHeading2Style } from '../../../../element-styles/heading'
import { defaultParagraphStyle } from '../../../../element-styles/paragraph'
import { TopicTreeStyle } from '../../topic/topic-tree'
import { NcssProps } from '../../../elements/types'

export interface PageSectionFeaturedTreeStyle {
  topic: TopicTreeStyle
  wrapper: NcssProps
  container: NcssProps
}

export const pageSectionFeaturedTreeStyle: PageSectionFeaturedTreeStyle = {
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
    py: [3, 6, 8],
  },
  container: {
    justifyContent: 'center',
    flexDirection: ['column', 'row'],
    alignItems: ['center', 'baseline'],
  },
  topic: {
    wrapper: {
      flexDirection: ['column', 'column', 'row'],
      justifyContent: 'space-evenly',
    },
    media: {
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        w: [1, 1, 1 / 2.5],
        mb: [3, 3, 0],
      },
      image: {
        picture: {
          p: 3,
        },
      },
    },
    content: {
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        w: [1, 1, 1 / 2.5],
      },
      contentText: {
        heading: defaultHeading2Style,
        abstract: {
          ...defaultParagraphStyle,
          '&>tbody>tr>td': {
            p: [1, 2],
          },
        },
      },
      contentActions: {
        wrapper: {
          display: 'flex',
        },
      },
    },
  },
}