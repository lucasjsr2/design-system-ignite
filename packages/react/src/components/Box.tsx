import { styled } from '../styles'
import type { ComponentProps } from 'react'

export const Box = styled.div`
  padding: ${({ theme }) => theme.space[4]};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.gray800};
  border: 1px solid ${({ theme }) => theme.colors.gray600};
`

export type BoxProps = ComponentProps<typeof Box>

Box.displayName = 'Box'
