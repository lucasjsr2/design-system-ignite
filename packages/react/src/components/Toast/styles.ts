import * as ToastComponent from '@radix-ui/react-toast'

import { styled } from '../../styles'
import { Heading } from '../Heading'
import { Text } from '../Text'

export const ToastContainer = styled(ToastComponent.Root, {
  background: '$gray600',
  padding: '$3 $5',
  borderRadius: '$sm',
  position: 'relative',
  width: '360px',
})

export const ToastCloseButton = styled(ToastComponent.Close, {
  all: 'unset',
  cursor: 'pointer',
  color: '$gray200',
  position: 'absolute',
  top: '$4',
  right: '$3',
})

export const StyledHeading = styled(Heading, {
  color: '$white',
  lineHeight: '$base',
  marginBottom: '$1',
})

export const StyledText = styled(Text, {
  color: '$gray200',
})
