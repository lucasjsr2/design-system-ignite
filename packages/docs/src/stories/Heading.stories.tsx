import { Heading, HeadingProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'H1 heading',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `H2`, mas podemos alterar issso com a propriedade `as`',
      },
    },
  },
}
