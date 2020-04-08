import { PageSectionImageTreeStyle } from './page-section-image-tree'
import { smallParagraphStyle } from '../../../../element-styles/paragraph'

export const pageSectionImageTreeStyle: PageSectionImageTreeStyle = {
  wrapper: {
    bg: 'bg',
    py: [3, 6, 8],
  },
  container: {
    flexDirection: ['column', 'row'],
  },
  topic: {
    wrapper: {
      w: 1,
    },
    media: {
      image: {
        picture: {
          display: 'block',
          px: 0,
          py: 3,
        },
      },
    },
    content: {
      contentText: {
        abstract: { ...smallParagraphStyle, color: 'text' },
      },
      contentActions: {
        wrapper: {
          mx: 'auto',
        },
        link: {
          mx: 2,
          fontSize: [3, 4],
          lineHeight: [3],
        },
      },
    },
  },
}
