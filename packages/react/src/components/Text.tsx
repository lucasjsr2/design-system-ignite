import { styled } from '../styles'
import type { ComponentProps, ElementType } from 'react'

export type TextSize =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'

export const Text = styled.p<{ $size?: TextSize }>`
  font-family: ${({ theme }) => theme.fonts.default};
  line-height: ${({ theme }) => theme.lineHeights.base};
  margin: 0;
  color: ${({ theme }) => theme.colors.gray100};
  font-size: ${({ theme, $size = 'md' }) => theme.fontSizes[$size]};
`

export type TextProps = ComponentProps<typeof Text> & {
  as?: ElementType
}

Text.displayName = 'Text'
