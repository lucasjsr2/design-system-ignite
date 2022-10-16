import { Text, TextProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum incidunt facere facilis quos vel reiciendis natus dolores suscipit commodi inventore, exercitationem nostrum accusamus at debitis. Dicta porro maxime libero repudiandae.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'Strong text',
  },
}
