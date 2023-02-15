import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Card from '../components/Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'NttData/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    images: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    price: {
      control: {
        type: 'number',
      },
    },
  },
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  images:'#',
  title: 'Lorem ipsum dolor sit amet consectetur',
  price: 100,
}
