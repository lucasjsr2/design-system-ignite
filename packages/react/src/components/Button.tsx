import type { ComponentProps, ElementType } from 'react'
import { css, styled } from '../styles'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
export type ButtonSize = 'sm' | 'md'

const buttonVariants: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.ignite500};

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.colors.ignite300};
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.gray200};
    }
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.ignite300};
    border: 2px solid ${({ theme }) => theme.colors.ignite500};

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.colors.ignite500};
      color: ${({ theme }) => theme.colors.white};
    }

    &:disabled {
      color: ${({ theme }) => theme.colors.gray200};
      border-color: ${({ theme }) => theme.colors.gray200};
    }
  `,
  tertiary: css`
    color: ${({ theme }) => theme.colors.gray100};

    &:not(:disabled):hover {
      color: ${({ theme }) => theme.colors.white};
    }

    &:disabled {
      border-color: ${({ theme }) => theme.colors.gray600};
    }
  `,
}

const buttonSizes: Record<ButtonSize, ReturnType<typeof css>> = {
  sm: css`
    height: 38px;
  `,
  md: css`
    padding: 0 ${({ theme }) => theme.space[4]};
    height: 46px;
  `,
}

export const Button = styled.button<{
  $variant?: ButtonVariant
  $size?: ButtonSize
}>`
  all: unset;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fonts.default};
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  min-width: 120px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};
  transition: all 0.2s ease-in-out;

  cursor: pointer;

  svg {
    width: ${({ theme }) => theme.space[4]};
    height: ${({ theme }) => theme.space[4]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ $variant = 'primary' }) => buttonVariants[$variant]}
  ${({ $size = 'md' }) => buttonSizes[$size]}
`

export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType
}

Button.displayName = 'Button'
