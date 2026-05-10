import { Box, Text, TextInput, TextInputProps } from '@lucasjsr/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
      >
        <Text $size="sm">E-mail</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Your name',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
