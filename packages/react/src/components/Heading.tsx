import { styled } from '../styles'
import type { ComponentProps, ElementType } from 'react'
import type { DefaultTheme } from 'styled-components'

export type HeadingSize =
  | 'sm'
  | 'md'
  | 'lg'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'

const headingSizeToFontSize: Record<
  HeadingSize,
  keyof DefaultTheme['fontSizes']
> = {
  sm: 'xl',
  md: '2xl',
  lg: '4xl',
  '2xl': '5xl',
  '3xl': '6xl',
  '4xl': '7xl',
  '5xl': '8xl',
  '6xl': '9xl',
}

export const Heading = styled.h2<{ $size?: HeadingSize }>`
  font-family: ${({ theme }) => theme.fonts.default};
  line-height: ${({ theme }) => theme.lineHeights.shorter};
  margin: 0;
  color: ${({ theme }) => theme.colors.gray100};
  font-size: ${({ theme, $size = 'md' }) =>
    theme.fontSizes[headingSizeToFontSize[$size]]};
`

export type HeadingProps = ComponentProps<typeof Heading> & {
  as?: ElementType
}

Heading.displayName = 'Heading'
