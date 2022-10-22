import { Box, Toast, ToastProps } from '@lucasjsr/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  decorators: [
    (Story) => (
      <Box css={{ display: 'grid', placeItems: 'center', height: '240px' }}>
        <Story />
      </Box>
    ),
  ],
  args: {
    title: 'Toast title',
    description: 'Toast description',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
