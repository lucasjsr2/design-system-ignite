import { Box, Text, Checkbox, CheckboxProps } from '@lucasjsr/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => (
      <Box as="label" style={{ display: 'flex', gap: '0.75rem' }}>
        {Story()}
        <Text $size="sm">Accept terms of use</Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
