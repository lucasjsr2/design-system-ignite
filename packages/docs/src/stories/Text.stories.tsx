import { Text, TextProps } from '@lucasjsr/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,

  argTypes: {
    size: {
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    size: 'md',
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
