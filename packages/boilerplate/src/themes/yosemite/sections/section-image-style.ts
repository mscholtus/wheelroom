import { PageSectionImageWheelStyle } from '../../../wheelroom/wheels/section/unicorn/presets/page-section-image-preset'
import { wrapperStyle } from '../elements/grid-style'
import { iconTopicStyle } from '../elements/icon-style'

export const sectionImageStyle: PageSectionImageWheelStyle = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {},
    content: {
      ncss: {},
      actions: {
        ncss: {},
        link: {
          ncss: {},
          icon: {
            ncss: {},
          },
        },
      },
      text: {
        ncss: {},
        abstract: {
          ncss: {},
        },
        heading: {
          ncss: {},
        },
        icon: iconTopicStyle,
      },
    },
    media: {
      ncss: {},
      embed: {
        ncss: {},
      },
      image: {
        img: {
          ncss: {},
        },
        picture: {
          ncss: {},
        },
        figcaption: {
          ncss: {},
        },
      },
      mediaBreakpoint: {
        picture: {
          ncss: {},
        },
        img: {
          ncss: {},
        },
      },
      video: {
        video: {
          ncss: {},
        },
        description: {
          ncss: {},
        },
      },
    },
  },
  wrapper: wrapperStyle,
}
