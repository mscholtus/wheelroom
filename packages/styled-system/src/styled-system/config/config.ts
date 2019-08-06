import { Config } from '../types/config'

export const config: Config = {
  ignoreProperties: ['children'],
  propertyAliases: {
    bg: ['backgroundColor'],
    h: ['height'],
    m: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
    margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    mt: ['marginTop'],
    mx: ['marginRight', 'marginLeft'],
    my: ['marginTop', 'marginBottom'],
    p: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    pt: ['paddingTop'],
    px: ['paddingRight', 'paddingLeft'],
    py: ['paddingTop', 'paddingBottom'],
    w: ['width'],
  },
  responsiveProperties: [
    'backgroundColor',
    'color',
    'display',
    'flexDirection',
    'fontSize',
    'fontWeight',
    'height',
    'lineHeight',
    'marginBottom',
    'marginLeft',
    'marginRight',
    'marginTop',
    'opacity',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'top',
    'visibility',
    'width',
  ],
  scales: {
    fontSizeScale: ['fontSize'],
    fontWeightScale: ['fontWeight'],
    heightScale: ['height'],
    lineHeightScale: ['lineHeight'],
    spaceScale: [
      'marginBottom',
      'marginLeft',
      'marginRight',
      'marginTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight',
      'paddingTop',
    ],
  },
  stringMaps: {
    colorMap: [
      'backgroundColor',
      'borderBottomColor',
      'borderColor',
      'borderLeftColor',
      'borderRightColor',
      'borderTopColor',
      'caretColor',
      'color',
      'columnRuleColor',
      'outlineColor',
      'textDecorationColor',
    ],
    fontMap: ['fontFamily'],
  },
  units: {
    percent: ['width'],
    px: [
      'height',
      'marginBottom',
      'marginLeft',
      'marginRight',
      'marginTop',
      'maxHeight',
      'maxWidth',
      'minHeight',
      'minWidth',
      'paddingBottom',
      'paddingLeft',
      'paddingRight',
      'paddingTop',
    ],
  },
} as any
