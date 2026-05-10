import type { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled.textarea`
  background: ${({ theme }) => theme.colors.gray900};
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  border-radius: ${({ theme }) => theme.radii.sm};
  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.colors.gray900};
  display: flex;
  align-items: baseline;
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  resize: vertical;
  min-height: 80px;

  &:focus {
    outline: 0;
    border-color: ${({ theme }) => theme.colors.ignite300};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`

export type TextAreaProps = ComponentProps<typeof TextArea>

TextArea.displayName = 'TextArea'
