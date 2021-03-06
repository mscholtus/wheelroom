export type TopicOptionString =
  | 'Hide icon'
  | 'Hide media'
  | 'Hide heading'
  | 'Hide abstract'
  | 'Hide action'
  | 'Reversed order'
  | 'Preview mode'

export type TopicOptionStringNl =
  | 'Verberg icoon'
  | 'Verberg media'
  | 'Verberg titel'
  | 'Verberg tekst'
  | 'Verberg actie'
  | 'Draai volgorde om'
  | 'Preview mode'

export type TopicOptionsKeys =
  | 'reverseOrder'
  | 'hideIcon'
  | 'hideMedia'
  | 'hideHeading'
  | 'hideAbstract'
  | 'hideAction'
  | 'previewMode'

export const englishTranslation: TopicOptionsTranslation = {
  reverseOrder: 'Reversed order',
  hideIcon: 'Hide icon',
  hideMedia: 'Hide media',
  hideHeading: 'Hide heading',
  hideAbstract: 'Hide abstract',
  hideAction: 'Hide action',
  previewMode: 'Preview mode',
}
export const dutchTranslation: TopicOptionsTranslation = {
  reverseOrder: 'Draai volgorde om',
  hideIcon: 'Verberg icoon',
  hideMedia: 'Verberg media',
  hideHeading: 'Verberg titel',
  hideAbstract: 'Verberg tekst',
  hideAction: 'Verberg actie',
  previewMode: 'Preview mode',
}

export type TopicOptions = Partial<Record<TopicOptionsKeys, boolean>>
type TopicOptionsTranslation = Record<TopicOptionsKeys, string>

export const getTopicOptions = (
  optionStrings: (TopicOptionString | TopicOptionStringNl)[],
  overrideTopicOptions: TopicOptions = {},
  locale = 'en'
): TopicOptions => {
  const optionsStringList = optionStrings || []

  const language = locale.split('-')[0]
  let translation: TopicOptionsTranslation

  switch (language) {
    case 'en':
      translation = englishTranslation
      break
    case 'nl':
      translation = dutchTranslation
      break
    default:
      translation = englishTranslation
      break
  }
  const result: TopicOptions = {}
  Object.keys(translation).forEach((key) => {
    const optionSet =
      optionsStringList.includes(translation[key as TopicOptionsKeys] as any) ||
      overrideTopicOptions[key as TopicOptionsKeys]
    result[key as TopicOptionsKeys] = optionSet
  })
  return result
}
