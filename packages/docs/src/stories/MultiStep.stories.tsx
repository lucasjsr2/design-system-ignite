import { Box, MultiStep, MultiStepProps, Text } from '@lucasjsr/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
      >
        <Text $size="sm">Multi step</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
