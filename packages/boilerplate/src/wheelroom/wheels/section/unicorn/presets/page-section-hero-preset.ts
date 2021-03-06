import { GridElementStyle } from '../../../element/resets/grid-reset'
import { TopicWheelStyle } from '../../../model/topic/presets/topic-preset'

export interface PageSectionHeroWheelStyle {
  container: GridElementStyle
  topic: TopicWheelStyle
  wrapper: GridElementStyle
}

export const pageSectionHeroPreset: PageSectionHeroWheelStyle = {
  container: {
    ncss: {},
  },
  topic: {
    ncss: {
      position: 'relative',
      w: 1,
    },
    content: {
      ncss: {
        p: 3,
      },
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
        icon: {
          ncss: {},
        },
      },
    },
    media: {
      ncss: {
        bottom: '0',
        left: '0',
        position: 'absolute',
        right: '0',
        top: '0',
        zIndex: -1,
        overflow: 'hidden',
      },
      embed: {
        ncss: {
          position: 'relative',
          h: 1,
          w: 1,
          iframe: {
            position: 'absolute',
          },
        },
      },
      image: {
        img: {
          ncss: {
            h: 1,
            objectFit: 'cover',
          },
        },
        picture: {
          ncss: {
            h: 1,
            w: 1,
          },
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
          ncss: {
            h: 1,
          },
        },
        description: {
          ncss: {},
        },
      },
    },
  },
  wrapper: {
    ncss: {
      py: 0,
    },
  },
}
