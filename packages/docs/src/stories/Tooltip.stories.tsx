import { Box, Button, Text, Tooltip, TooltipProps } from '@lucasjsr/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    text: '👀 You can see me!',
    side: 'top',
  },
  decorators: [
    (Story) => (
      <Box css={{ display: 'grid', placeItems: 'center', height: '164px' }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    triggerElement: {
      control: {
        type: null,
      },
    },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TooltipProps>

export const TooltipPrimary: StoryObj<TooltipProps> = {
  args: {
    triggerElement: <Button onClick={() => {}}>Hover me</Button>,
  },
}

export const TooltipWithText: StoryObj<TooltipProps> = {
  args: {
    triggerElement: <Text as="span">Hover me</Text>,
  },
}
