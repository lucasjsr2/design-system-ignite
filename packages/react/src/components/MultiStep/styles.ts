import { styled } from '../../styles'
import { Text } from '../Text'

export const MultiStepContainer = styled.div``

export const Label = styled(Text).attrs({ $size: 'xs' as const })`
  color: ${({ theme }) => theme.colors.gray200};
`

export const Steps = styled.div<{ $size: number }>`
  --steps-size: ${({ $size }) => $size};
  display: grid;
  grid-template-columns: repeat(var(--steps-size), 1fr);
  gap: ${({ theme }) => theme.space[2]};
  margin-top: ${({ theme }) => theme.space[1]};
`

export const Step = styled.div<{ $active?: boolean }>`
  height: ${({ theme }) => theme.space[1]};
  border-radius: ${({ theme }) => theme.radii.px};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.gray100 : theme.colors.gray600};
`
