import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes, styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root)`
  all: unset;
  width: ${({ theme }) => theme.space[6]};
  height: ${({ theme }) => theme.space[6]};
  background: ${({ theme }) => theme.colors.gray900};
  line-height: 0;
  border-radius: ${({ theme }) => theme.radii.xs};
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.gray900};

  &[data-state='checked'] {
    background: ${({ theme }) => theme.colors.ignite300};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.ignite300};
  }
`

const slideIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

const slideOut = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${({ theme }) => theme.colors.white};
  width: ${({ theme }) => theme.space[4]};
  height: ${({ theme }) => theme.space[4]};

  &[data-state='checked'] {
    animation: ${slideIn} 200ms ease-in-out;
  }

  &[data-state='unchecked'] {
    animation: ${slideOut} 200ms ease-in-out;
  }
`
