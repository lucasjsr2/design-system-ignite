import { Box, BoxProps, Text } from '@lucasjsr/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o elemento BOX</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: { type: 'null' },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
