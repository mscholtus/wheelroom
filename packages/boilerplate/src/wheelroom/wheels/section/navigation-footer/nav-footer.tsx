import React, { Fragment } from 'react'
import { NavigationSegmentProps } from '../../../../models/navigation-segment'
import { Container, Flex, Fluid, Wrapper } from '../../element/grid'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../../../../models/page-section'
import { NavFooterSocialList } from './nav-footer-social-list'
import { NavFooterList } from './nav-footer-list'
import { LegalFooter } from './legal-footer'
import { NavFooterWheelStyle } from './presets/nav-footer-preset'
import { Wheel } from '../../types'

interface PageSectionNavigationFooterWheel extends Wheel {
  style: NavFooterWheelStyle
}

export const PageSectionNavigationFooter = (props: {
  pageSection: PageSectionProps
  wheel: PageSectionNavigationFooterWheel
  containerStyle: 'container' | 'fluid'
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasNavigationSegment) {
    return null
  }

  if (!pageSectionInfo.hasNavigationSegment) {
    return null
  }
  const navSegment = props.pageSection.navigation[0]
    .segments[0] as NavigationSegmentProps
  const siteMetadata = props.pageSection.siteMetadata

  const ContainerType = props.containerStyle === 'container' ? Container : Fluid

  return (
    <Fragment>
      <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
        <ContainerType
          wheel={{ ...props.wheel, style: props.wheel.style.container }}
        >
          <Flex
            is={'nav'}
            wheel={{ ...props.wheel, style: props.wheel.style.navFooter }}
          >
            <NavFooterList
              wheel={{
                ...props.wheel,
                style: props.wheel.style.navFooter.list,
              }}
              actions={navSegment.actions}
            />
            {pageSectionInfo.hasTopic && (
              <NavFooterSocialList
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.navFooter.socialList,
                }}
                topics={props.pageSection.topics}
              />
            )}
          </Flex>
        </ContainerType>
      </Wrapper>
      <LegalFooter
        siteMetadata={siteMetadata}
        containerStyle={props.containerStyle}
        wheel={{ ...props.wheel, style: props.wheel.style.legalFooter }}
      />
    </Fragment>
  )
}
