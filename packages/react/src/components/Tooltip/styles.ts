import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Tooltip.Content)`
  background-color: ${({ theme }) => theme.colors.gray900};
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  border-radius: ${({ theme }) => theme.radii.xs};
`

export const TooltipArrow = styled(Tooltip.Arrow)`
  fill: ${({ theme }) => theme.colors.gray900};
`
