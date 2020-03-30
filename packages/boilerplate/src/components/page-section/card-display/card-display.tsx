import React from 'react'
import { Box, ContainerMaxWidth } from '../../../core/elements/grid'
import { PageSectionProps } from '../page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { Topic } from '../../topic/topic'
import {
  commonImageImgStyle,
  commonImagePictureStyle,
  commonImageFigcaptionStyle,
} from '../../../core/styles/image'

export const CardDisplay = (props: { pageSection: PageSectionProps }) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const cards = props.pageSection.topics.map((topic, index) => (
    <Topic
      key={index}
      {...topic}
      pageSectionActions={props.pageSection.actions}
      text={{
        ...props.pageSection.text,
        locale: props.pageSection.locale,
      }}
      pageSectionInfo={pageSectionInfo}
      fullTopicAsLink={true}
      mediaWrapperStyle={{
        p: 3,
      }}
      mediaProps={{
        styleTree: {
          img: { h: 1, objectFit: 'cover' },
          picture: { display: 'block', h: '178px' },
        },
        styleTreeBase: {
          img: commonImageImgStyle,
          picture: commonImagePictureStyle,
          figcaption: commonImageFigcaptionStyle,
        },
      }}
      contentWrapperStyle={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
      }}
      headerWrapperStyle={{
        display: 'block',
        flex: '1 1 auto',
      }}
      actionWrapperStyle={{
        flex: '0',
      }}
      topicWrapperStyle={{
        ...{
          bg: 'bg',
          color: 'cardsShadow',
          flex: '1',
          maxWidth: '280px',
          minWidth: '280px',
          m: 2,
        },
        ...(pageSectionInfo.topicOptions.hideAction
          ? {}
          : {
              border: '1px solid',
              borderColor: 'cardsBorder',
              borderRadius: 3,
              boxShadow: '0 0 16px',
              transition: 'transform .25s ease',
              ':hover': {
                cursor: 'pointer',
                transform: 'scale(1.05)',
              },
            }),
      }}
    />
  ))
  return <CardWrapper>{cards}</CardWrapper>
}

const CardWrapper = (props: { children: any }) => (
  <Box
    is="div"
    ncss={{
      label: 'wrapper',
      bg: 'bg',
      py: [3, 6, 8],
    }}
  >
    <ContainerMaxWidth
      ncss={{
        alignItems: ['center', 'initial'],
        flexDirection: ['column', 'row'],
        flexWrap: 'wrap',
        justifyContent: 'center',
        m: 'auto',
        px: [2, 5, 7],
        w: 1,
      }}
    >
      {props.children}
    </ContainerMaxWidth>
  </Box>
)
