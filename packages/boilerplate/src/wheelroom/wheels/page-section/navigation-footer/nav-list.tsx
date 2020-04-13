import { List } from '../../elements/list'
import React from 'react'
import { NavLinks } from './nav-links'
import { PageProps } from '../../../../models/page/page'
import { NavListPreset } from './presets/nav-list-preset'
import { Wheel } from '../../types'

interface NavListWheel extends Wheel {
  style: NavListPreset
}

export const NavList = (props: { pages: PageProps[]; wheel: NavListWheel }) => {
  return (
    <List is="ul" ncss={props.wheel.style.list.ncss} wheel={props.wheel}>
      <NavLinks
        pages={props.pages}
        wheel={{ ...props.wheel, style: props.wheel.style }}
      />
    </List>
  )
}