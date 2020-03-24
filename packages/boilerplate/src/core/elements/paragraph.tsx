/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { defaultParagraphStyle } from '../styles/paragraph'
import { NcssProps } from './types'

export interface ParagraphProps {
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: NcssProps
}

export const Paragraph = (props: ParagraphProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId

  return (
    <p
      css={systemCss(
        { ncss: { ...defaultParagraphStyle, ...props.ncss } },
        currentThemeId
      )}
    >
      {props.children}
    </p>
  )
}
