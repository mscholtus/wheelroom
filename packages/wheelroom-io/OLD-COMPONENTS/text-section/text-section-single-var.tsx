/* eslint-disable react/display-name */
/**
 * Component variation
 *
 * Component type: textSection
 * Variation: Single
 *
 */

import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, Document, MARKS } from '@contentful/rich-text-types'
import React, { Fragment } from 'react'
import {
  heading1Style,
  heading2Style,
  heading3Style,
  heading4Style,
  heading5Style,
  heading6Style,
} from '../../styles/heading'
import { paragraph1Style } from '../../styles/paragraph'
import { simpleLinkStyle } from '../../styles/simple-link'
import { ALink } from '../../views/core-elements/a-link'
import { GLink } from '../../views/core-elements/g-link'
import { Box, Container, Flex } from '../../views/core-elements/grid'
import { H1, H2, H3, H4, H5, H6 } from '../../views/core-elements/heading'
import { Paragraph } from '../../views/core-elements/paragraph'
import { FluidImage, Image } from '../../views/image/image'
import { TextSectionProps } from './text-section'
import { Any } from '../../views/core-elements/any'
import { List } from '../../views/core-elements/list'
import { getLocalizedValue } from './get-localized-value'
import { SvgStack } from './stack'

type Node = any
type Children = any

const ImageBox = (props: { image: FluidImage }) => (
  <Fragment>
    <Image caption image={props.image} my={[4, 5]} />
  </Fragment>
)

export const TextSectionSingleVar = (props: TextSectionProps) => {
  const textSectionProps = props
  const wrapperStyle = {
    label: 'Wrapper',
    bg: 'bg',
  }

  const containerStyle = {
    label: 'Container',
    height: '100%',
    justifyContent: 'space-between',
  }

  const options = {
    renderText: text => {
      return text
        .split('\n')
        .reduce((children: Children, textSegment, index) => {
          return [...children, index > 0 && <br key={index} />, textSegment]
        }, [])
    },
    renderMark: {
      [MARKS.BOLD]: text => (
        <Any
          is="b"
          ncss={{
            fontWeight: 5,
          }}
        >
          {text}
        </Any>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: Node, children: Children) => {
        return <Paragraph ncss={{ ...paragraph1Style }}>{children}</Paragraph>
      },
      [BLOCKS.UL_LIST]: (_node: Node, children: Children) => {
        return (
          <List is="ul" ncss={{ ...paragraph1Style }}>
            {children}
          </List>
        )
      },
      [BLOCKS.LIST_ITEM]: (_node: Node, children: Children) => {
        return (
          <List is="li" ncss={{ ...paragraph1Style }}>
            {children}
          </List>
        )
      },
      [INLINES.HYPERLINK]: (node: Node, children: Children) => {
        const uri = node.data.uri
        return (
          <ALink href={uri} ncss={{ ...simpleLinkStyle }}>
            {children}
          </ALink>
        )
      },
      [INLINES.ENTRY_HYPERLINK]: (node: Node, children: Children) => {
        const internalPath =
          node.data.target.fields &&
          node.data.target.fields.path[textSectionProps.locale]
        return (
          <GLink ncss={{ ...simpleLinkStyle }} to={internalPath}>
            {children}
          </GLink>
        )
      },
      [BLOCKS.HEADING_1]: (_node: Node, children: Children) => (
        <H1 ncss={{ ...heading1Style }}>{children}</H1>
      ),
      [BLOCKS.HEADING_2]: (_node: Node, children: Children) => (
        <H2 ncss={{ ...heading2Style, mt: 3 }}>{children}</H2>
      ),
      [BLOCKS.HEADING_3]: (_node: Node, children: Children) => (
        <H3 ncss={{ ...heading3Style, mt: 3 }}>{children}</H3>
      ),
      [BLOCKS.HEADING_4]: (_node: Node, children: Children) => (
        <H4 ncss={{ ...heading4Style, mt: 3 }}>{children}</H4>
      ),
      [BLOCKS.HEADING_5]: (_node: Node, children: Children) => (
        <H5 ncss={{ ...heading5Style, mt: 3 }}>{children}</H5>
      ),
      [BLOCKS.HEADING_6]: (_node: Node, children: Children) => (
        <H6 ncss={{ ...heading6Style, mt: 3 }}>{children}</H6>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
        const fields = node.data.target.fields
        const image = {
          title: getLocalizedValue(textSectionProps.locale, fields.title),
          description: getLocalizedValue(
            textSectionProps.locale,
            fields.description
          ),
          fluid: {
            src:
              getLocalizedValue(textSectionProps.locale, fields.file).url +
              '?w=2560&q=50',
          },
        } as FluidImage
        return <ImageBox image={image} key={node.data.target.id} />
      },
    },
  } as Options

  return (
    <Box is="div" ncss={wrapperStyle}>
      <Container is="div" ncss={containerStyle}>
        <Flex
          is="div"
          ncss={{
            label: 'text',
            mx: 'auto',
            my: 7,
            maxWidth: '640px',
          }}
        >
          {documentToReactComponents(
            (props.text.json as unknown) as Document,
            options
          )}
        </Flex>
      </Container>
      {/* Demo Flex element, should be removed here */}
      <Any
        is="div"
        ncss={{
          label: 'demo-figure',
          mx: 'auto',
          py: 7,
          w: [1 / 2, 1 / 2, 1 / 3, 1 / 4],
        }}
      >
        <SvgStack />
      </Any>
      {/* End of demo Flex element, should be removed here */}
    </Box>
  )
}