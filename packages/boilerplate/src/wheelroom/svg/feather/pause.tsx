import React, { SVGProps } from 'react'
import { Wheel } from '../../wheels/types'
import { styledSystem } from '@wheelroom/styled-system'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any
  wheel: Wheel
}
const componentId = 'svg-pause'
export const SvgPause = (props: IconProps) => {
  const strokeWidth = props.strokeWidth || 2
  const css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: props.ncss,
  })
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pause_svg__feather pause_svg__feather-pause"
      css={css}
      id={componentId}
      width="100%"
    >
      <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
    </svg>
  )
}
