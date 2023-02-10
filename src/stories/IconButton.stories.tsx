import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import IconButton from '../components/Buttons/IconButtons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'NttData/IconButton',
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    bgColor: { control: 'color' },
    margin: { control: 'text' },
    padding: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    color: { control: 'color' },
    variant: { control: 'text' },
    children: { control: 'text' },
  },
} as ComponentMeta<typeof IconButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  bgColor: '#000',
  color: '#fff',
  children: '🦀',
  width: '110px',
  margin: '10px 0',
  padding: '0',
  variant: 'contained',
  height: '40px',
}
