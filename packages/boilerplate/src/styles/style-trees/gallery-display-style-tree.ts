import { GalleryTreeStyleTree } from '../../core/model-views/page-section/gallery-display'
import {
  defaultImageImgStyle,
  defaultImagePictureStyle,
  defaultImageFigcaptionStyle,
} from '../core-elements/image'

export const galleryDisplayStyleTree: GalleryTreeStyleTree = {
  wrapper: {
    label: 'Wrapper',
    bg: 'bg',
    py: [3, 6, 8],
  },
  container: {
    flexDirection: ['column', 'row'],
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  image: {
    img: defaultImageImgStyle,
    picture: { ...defaultImagePictureStyle, w: [1, 1 / 2], p: 3 },
    figcaption: defaultImageFigcaptionStyle,
  },
}
