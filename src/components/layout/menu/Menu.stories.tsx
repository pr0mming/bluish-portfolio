import { Meta, StoryFn } from '@storybook/react'
import Menu, { IMenuProps } from './Menu'
import { mockProps } from './Menu.mock'

export default {
  title: 'Design System/Layout/Menu',
  component: Menu,
  argTypes: {}
} as Meta<typeof Menu>

const Story: StoryFn<typeof Menu> = (arguments_) => (
  <Menu {...(arguments_ as IMenuProps)} />
)

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as IMenuProps
