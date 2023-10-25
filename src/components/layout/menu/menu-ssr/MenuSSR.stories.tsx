import { Meta, StoryFn } from '@storybook/react'
import Menu, { IMenuSSRProps } from './MenuSSR'
import { mockProps } from './MenuSSR.mock'

export default {
  title: 'Design System/Layout/Menu',
  component: Menu,
  argTypes: {}
} as Meta<typeof Menu>

const Story: StoryFn<typeof Menu> = (arguments_) => <Menu {...arguments_} />

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as IMenuSSRProps
