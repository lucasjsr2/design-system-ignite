import { styled } from '../styles'
import type { ComponentProps } from 'react'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  background: '$gray800',
  border: '1px solid $gray600',
})

export interface BoxProps extends ComponentProps<typeof Box> {}
