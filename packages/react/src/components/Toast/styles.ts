import * as ToastComponent from '@radix-ui/react-toast'
import { styled } from '../../styles'
import { Heading } from '../Heading'
import { Text } from '../Text'

export const ToastContainer = styled(ToastComponent.Root)`
  background: ${({ theme }) => theme.colors.gray600};
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[5]}`};
  border-radius: ${({ theme }) => theme.radii.sm};
  position: relative;
  width: 360px;
`

export const ToastCloseButton = styled(ToastComponent.Close)`
  all: unset;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray200};
  position: absolute;
  top: ${({ theme }) => theme.space[4]};
  right: ${({ theme }) => theme.space[3]};
`

export const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.lineHeights.base};
  margin-bottom: ${({ theme }) => theme.space[1]};
`

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray200};
`
