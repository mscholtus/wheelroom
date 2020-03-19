import {
  DropdownField,
  ImageField,
  LongTextField,
  MultipleComponentsField,
  RichTextField,
  ShortTextField,
  SingleComponentField,
  TagsField,
  WheelroomComponents,
  CheckboxField,
} from '@wheelroom/wheelroom'

export const configComponents: WheelroomComponents = {
  topic: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
      abstract: {
        type: 'longText',
      } as LongTextField,
      image: {
        type: 'image',
      } as ImageField,
      icon: {
        items: [
          'activity',
          'airplay',
          'alert-circle',
          'alert-octagon',
          'alert-triangle',
          'align-center',
          'align-justify',
          'align-left',
          'align-right',
          'anchor',
          'aperture',
          'archive',
          'arrow-down-circle',
          'arrow-down-left',
          'arrow-down-right',
          'arrow-down',
          'arrow-left-circle',
          'arrow-left',
          'arrow-right-circle',
          'arrow-right',
          'arrow-up-circle',
          'arrow-up-left',
          'arrow-up-right',
          'arrow-up',
          'at-sign',
          'award',
          'bar-chart-2',
          'bar-chart',
          'battery-charging',
          'battery',
          'bell-off',
          'bell',
          'bluetooth',
          'bold',
          'book-open',
          'book',
          'bookmark',
          'box',
          'briefcase',
          'calendar',
          'camera-off',
          'camera',
          'cast',
          'check-circle',
          'check-square',
          'check',
          'chevron-down',
          'chevron-left',
          'chevron-right',
          'chevron-up',
          'chevrons-down',
          'chevrons-left',
          'chevrons-right',
          'chevrons-up',
          'chrome',
          'circle',
          'clipboard',
          'clock',
          'cloud-drizzle',
          'cloud-lightning',
          'cloud-off',
          'cloud-rain',
          'cloud-snow',
          'cloud',
          'code',
          'codepen',
          'codesandbox',
          'coffee',
          'columns',
          'command',
          'compass',
          'copy',
          'corner-down-left',
          'corner-down-right',
          'corner-left-down',
          'corner-left-up',
          'corner-right-down',
          'corner-right-up',
          'corner-up-left',
          'corner-up-right',
          'cpu',
          'credit-card',
          'crop',
          'crosshair',
          'database',
          'delete',
          'disc',
          'dollar-sign',
          'download-cloud',
          'download',
          'droplet',
          'edit-2',
          'edit-3',
          'edit',
          'external-link',
          'eye-off',
          'eye',
          'facebook',
          'fast-forward',
          'feather',
          'figma',
          'file-minus',
          'file-plus',
          'file-text',
          'file',
          'film',
          'filter',
          'flag',
          'folder-minus',
          'folder-plus',
          'folder',
          'framer',
          'frown',
          'gift',
          'git-branch',
          'git-commit',
          'git-merge',
          'git-pull-request',
          'github',
          'gitlab',
          'globe',
          'grid',
          'hard-drive',
          'hash',
          'headphones',
          'heart',
          'help-circle',
          'hexagon',
          'home',
          'image',
          'inbox',
          'info',
          'instagram',
          'italic',
          'key',
          'layers',
          'layout',
          'life-buoy',
          'link-2',
          'link',
          'linkedin',
          'list',
          'loader',
          'lock',
          'log-in',
          'log-out',
          'mail',
          'map-pin',
          'map',
          'maximize-2',
          'maximize',
          'meh',
          'menu',
          'message-circle',
          'message-square',
          'mic-off',
          'mic',
          'minimize-2',
          'minimize',
          'minus-circle',
          'minus-square',
          'minus',
          'monitor',
          'moon',
          'more-horizontal',
          'more-vertical',
          'mouse-pointer',
          'move',
          'music',
          'navigation-2',
          'navigation',
          'octagon',
          'package',
          'paperclip',
          'pause-circle',
          'pause',
          'pen-tool',
          'percent',
          'phone-call',
          'phone-forwarded',
          'phone-incoming',
          'phone-missed',
          'phone-off',
          'phone-outgoing',
          'phone',
          'pie-chart',
          'play-circle',
          'play',
          'plus-circle',
          'plus-square',
          'plus',
          'pocket',
          'power',
          'printer',
          'radio',
          'refresh-ccw',
          'refresh-cw',
          'repeat',
          'rewind',
          'rotate-ccw',
          'rotate-cw',
          'rss',
          'save',
          'scissors',
          'search',
          'send',
          'server',
          'settings',
          'share-2',
          'share',
          'shield-off',
          'shield',
          'shopping-bag',
          'shopping-cart',
          'shuffle',
          'sidebar',
          'skip-back',
          'skip-forward',
          'slack',
          'slash',
          'sliders',
          'smartphone',
          'smile',
          'speaker',
          'square',
          'star',
          'stop-circle',
          'sun',
          'sunrise',
          'sunset',
          'tablet',
          'tag',
          'target',
          'terminal',
          'thermometer',
          'thumbs-down',
          'thumbs-up',
          'toggle-left',
          'toggle-right',
          'tool',
          'trash-2',
          'trash',
          'trello',
          'trending-down',
          'trending-up',
          'triangle',
          'truck',
          'tv',
          'twitch',
          'twitter',
          'type',
          'umbrella',
          'underline',
          'unlock',
          'upload-cloud',
          'upload',
          'user-check',
          'user-minus',
          'user-plus',
          'user-x',
          'user',
          'users',
          'video-off',
          'video',
          'voicemail',
          'volume-1',
          'volume-2',
          'volume-x',
          'volume',
          'watch',
          'wifi-off',
          'wifi',
          'wind',
          'x-circle',
          'x-octagon',
          'x-square',
          'x',
          'youtube',
          'zap-off',
          'zap',
          'zoom-in',
          'zoom-out',
        ],
        type: 'dropdown',
      } as DropdownField,
      actions: {
        allowedComponents: ['action'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  action: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
      page: {
        allowedComponents: ['page'],
        // Limit expanding pages, prevent circ refs
        expandFragmentRef: true,
        type: 'singleComponent',
      } as SingleComponentField,
      url: {
        initialContent: 'https://localhost:8000',
        type: 'shortText',
        typePostfix: 'Url',
      } as ShortTextField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  navigationSegment: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
      pages: {
        allowedComponents: ['page'],
        // Limit expanding pages, prevent circ refs
        expandFragmentRef: true,
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  navigation: {
    fields: {
      segments: {
        allowedComponents: ['navigationSegment'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  text: {
    fields: {
      text: {
        required: true,
        type: 'richText',
      } as RichTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
  },
  pageSection: {
    fields: {
      variation: {
        items: [
          'cards',
          'featured list',
          'featured',
          'headline',
          'hero',
          'images',
          'navigation',
        ],
        type: 'dropdown',
      } as DropdownField,
      topics: {
        allowedComponents: ['topic'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      topicOptions: {
        initialContent: ['Hide icon'],
        items: [
          'Hide icon',
          'Hide image',
          'Hide heading',
          'Hide abstract',
          'Hide action',
          'Reversed order',
        ],
        type: 'checkbox',
      } as CheckboxField,
      text: {
        allowedComponents: ['text'],
        type: 'singleComponent',
      } as SingleComponentField,
      navigation: {
        allowedComponents: ['navigation'],
        type: 'singleComponent',
      } as SingleComponentField,
      actions: {
        allowedComponents: ['action'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    modelVersion: '1.0.0',
    settings: {
      // asPageSection will create boilerplate code
      asBoilerplate: false,
      asFragment: true,
      asPageSection: true,
    },
  },
  page: {
    fields: {
      path: {
        initialContent: '/boilerplate',
        required: true,
        type: 'shortText',
        typePostfix: 'Path',
        unique: true,
      } as ShortTextField,
      navigationHeading: {
        type: 'shortText',
      } as ShortTextField,
      sections: {
        allowedComponents: [
          '%componentNameArray(filter:settings.asPageSection)%',
        ],
        initialContent: ['%componentNameArray(filter:settings.asPageSection)%'],
        required: true,
        type: 'multipleComponents',
      } as MultipleComponentsField,
      theme: {
        items: ['light', 'dark'],
        type: 'dropdown',
      } as DropdownField,
      seoTitle: {
        type: 'shortText',
      } as ShortTextField,
      seoDescription: {
        maxLength: 155,
        type: 'shortText',
      } as ShortTextField,
      seoImage: {
        type: 'image',
      } as ImageField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'page',
    },
  },
  globals: {
    fields: {
      addressLine1: {
        type: 'shortText',
      } as ShortTextField,
      addressLine2: {
        type: 'shortText',
      } as ShortTextField,
      emailAddress: {
        type: 'shortText',
      } as ShortTextField,
      linkedinUrl: {
        type: 'shortText',
      } as ShortTextField,
      phoneNumber: {
        type: 'shortText',
      } as ShortTextField,
      siteAuthor: {
        type: 'shortText',
      } as ShortTextField,
      siteDescription: {
        type: 'shortText',
      } as ShortTextField,
      siteHeading: {
        type: 'shortText',
      } as ShortTextField,
      siteKeywords: {
        type: 'tags',
      } as TagsField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'global',
    },
  },
}
