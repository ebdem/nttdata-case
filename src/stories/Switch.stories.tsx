import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SwitchModeButton } from '../components/SwitchModeButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'NttData/SwitchModeButton',
  component: SwitchModeButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
        control: {
            type: 'select',
            options: ['primary', 'secondary', 'default', 'inherit'],
        }
    }
  },
} as ComponentMeta<typeof SwitchModeButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SwitchModeButton> = (args) => <SwitchModeButton {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
}

export const Default = Template.bind({})
Default.args = {
  color: 'default',
}
