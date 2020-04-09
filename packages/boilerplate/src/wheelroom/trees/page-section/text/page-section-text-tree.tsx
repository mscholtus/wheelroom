import React from 'react'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { Box, Container, ContainerMaxWidth } from '../../../elements/grid'
import { PageSectionTextTreeStyle } from './page-section-text-tree-style'
import { TextTree } from '../../text/text-tree'

export const PageSectionTextTree = (props: {
  /** Contains the topic to render */
  pageSection: PageSectionProps
  /** Styles to use */
  treeStyle: PageSectionTextTreeStyle
  /** Use a max width or fluid container */
  containerStyle: 'maxWidth' | 'fluid'
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasText) {
    return null
  }
  const ContainerType =
    props.containerStyle === 'maxWidth' ? ContainerMaxWidth : Container
  return (
    <Box is="div" ncss={props.treeStyle.wrapper.ncss}>
      <ContainerType ncss={props.treeStyle.container.ncss}>
        <TextTree
          {...props.pageSection.text}
          locale={props.pageSection.locale}
          treeStyle={props.treeStyle.text}
          text={props.pageSection.text}
        />
      </ContainerType>
    </Box>
  )
}
