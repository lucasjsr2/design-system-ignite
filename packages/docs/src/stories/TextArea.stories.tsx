import { Box, Text, TextArea, TextAreaProps } from '@lucasjsr/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
      >
        <Text $size="sm">Observations</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations here',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
