/**
 * Component variation
 *
 * Component type: openerSection
 * Variation: Home pagina
 *
 */

import React, { Fragment } from 'react'
import { heading0Style } from '../../styles/heading'
import { Box, Flex } from '../../views/core-elements/grid'
import { Heading } from '../../views/core-elements/heading'
import { Image } from '../../views/image/image'
import { Navigation } from '../navigation/navigation'
import { OpenerSectionProps } from './opener-section'

export const OpenerSectionHomePaginaVar = (props: OpenerSectionProps) => {
  const image = props.image || props.page.image
  const heading = props.heading || props.page.heading

  return (
    <Fragment>
      <Box ncss={{ w: [1], height: [5, 5, 6, 6], position: 'relative' }}>
        <Box ncss={{ position: 'relative', h: '100%' }}>
          <Image image={image} objectFit="cover" height="100%" />
        </Box>
        <Flex
          ncss={{
            alignItems: 'center',
            height: '100%',
            justifyContent: 'center',
            position: 'absolute',
            px: ['20px', '200px'],
            textAlign: 'center',
            top: 0,
            w: 1,
          }}
        >
          <Heading ncss={heading0Style}>{heading}</Heading>
        </Flex>
        <Flex
          ncss={{
            left: 0,
            position: 'absolute',
            top: 0,
            w: 1,
          }}
        >
          <Navigation pages={props.navigation.pages} />
        </Flex>
      </Box>
    </Fragment>
  )
}