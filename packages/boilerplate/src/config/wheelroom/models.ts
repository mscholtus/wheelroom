import {
  CheckboxField,
  DateField,
  DropdownField,
  LongTextField,
  MediaField,
  MultipleComponentsField,
  RichTextField,
  ShortTextField,
  SingleComponentField,
  TagsField,
  WheelroomComponents,
} from '@wheelroom/wheelroom'
import { featherIcons } from './feather-icons'

export const models: WheelroomComponents = {
  embed: {
    fields: {
      code: {
        type: 'longText',
      } as LongTextField,
      type: {
        items: ['html', 'js-app', 'js-page', 'js-action', 'js-page-section'],
        type: 'dropdown',
      } as DropdownField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  mediaBreakpoint: {
    fields: {
      small: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      medium: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      large: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      extraLarge: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  topic: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
      abstract: {
        type: 'longText',
      } as LongTextField,
      media: {
        type: 'media',
      } as MediaField,
      icon: {
        items: featherIcons,
        type: 'dropdown',
      } as DropdownField,
      actions: {
        allowedComponents: ['action'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      poster: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      mediaEmbed: {
        helpText:
          'Add a Youtube/Vimeo embed code. Note: Media embed only uses Embed-type: html',
        allowedComponents: ['embed'],
        type: 'singleComponent',
      } as SingleComponentField,
      mediaBreakpoint: {
        helpText: 'Display a different media asset on each Breakpoint',
        allowedComponents: ['mediaBreakpoint'],
        type: 'singleComponent',
      } as SingleComponentField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  topicTable: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
      abstract: {
        type: 'longText',
      } as LongTextField,
      icon: {
        items: featherIcons,
        type: 'dropdown',
      } as DropdownField,
      actions: {
        allowedComponents: ['action'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      rows: {
        allowedComponents: ['topicRow'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  topicRow: {
    fields: {
      variation: {
        items: ['header', 'footer'],
        type: 'dropdown',
      } as DropdownField,
      heading: {
        type: 'shortText',
      } as ShortTextField,
      abstract: {
        type: 'longText',
      } as LongTextField,
      icon: {
        items: featherIcons,
        type: 'dropdown',
      } as DropdownField,
      actions: {
        allowedComponents: ['action'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      topics: {
        allowedComponents: ['topic'],
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
      description: {
        type: 'shortText',
      } as ShortTextField,
      icon: {
        items: featherIcons,
        type: 'dropdown',
      } as DropdownField,
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
      anchor: {
        helpText: 'Example: my-anchor',
        type: 'shortText',
      } as ShortTextField,
      query: {
        helpText: 'Example: &x=1&y=2',
        type: 'shortText',
      } as ShortTextField,
      eventId: {
        initialContent: 'initial-content-for-action-event-id',
        typePostfix: 'Slug',
        helpText: 'Example: my-event-id',
        type: 'shortText',
        unique: true,
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
  navigation: {
    fields: {
      segments: {
        allowedComponents: ['navigationSegment'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      skipToContentHeading: {
        type: 'shortText',
      } as ShortTextField,
      brandAction: {
        allowedComponents: ['action'],
        type: 'singleComponent',
      } as SingleComponentField,
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
          'block-wr',
          'blog-wr',
          'blog-list-wr',
          'card-wr',
          'divider-wr',
          'featured-wr',
          'gallery-wr',
          'headline-wr',
          'hero-wr',
          'image-wr',
          'navigation-wr',
          'price-table-wr',
          'quote-wr',
          'showcase-wr',
          'text-wr',
          'video-wr',
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
          'Hide media',
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
      topicTables: {
        allowedComponents: ['topicTable'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      navigation: {
        allowedComponents: ['navigation'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      actions: {
        allowedComponents: ['action'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      eventId: {
        type: 'shortText',
        initialContent: 'initial-content-for-page-section-event-id',
        typePostfix: 'Slug',
        helpText: 'Example: my-event-id',
        unique: true,
      } as ShortTextField,
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
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      seoKeywords: {
        type: 'tags',
      } as TagsField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'page',
    },
  },
  blog: {
    fields: {
      slug: {
        initialContent: 'initial-content-for-slug',
        required: true,
        type: 'shortText',
        typePostfix: 'Slug',
        unique: true,
      } as ShortTextField,
      date: {
        helpText: 'Override Contentful publish date',
        type: 'date',
      } as DateField,
      text: {
        required: true,
        type: 'richText',
      } as RichTextField,
      labels: {
        allowedComponents: ['topic'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      topics: {
        required: true,
        allowedComponents: ['topic'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      authors: {
        allowedComponents: ['topic'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      seoTitle: {
        type: 'shortText',
      } as ShortTextField,
      seoDescription: {
        maxLength: 155,
        type: 'shortText',
      } as ShortTextField,
      seoImage: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      seoKeywords: {
        type: 'tags',
      } as TagsField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'subPage',
    },
  },
  globals: {
    fields: {
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
      siteEmbeds: {
        allowedComponents: ['embed'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'global',
    },
  },
}
