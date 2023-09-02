import { Meta, StoryFn } from '@storybook/react'
import Navbar, { INavbarProps } from './Navbar'
import { mockProps } from './Navbar.mock'

export default {
  title: 'Design System/Layout/Navbar',
  component: Navbar,
  argTypes: {}
} as Meta<typeof Navbar>

const Story: StoryFn<typeof Navbar> = (arguments_) => (
  <Navbar {...(arguments_ as INavbarProps)} />
)

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as INavbarProps
