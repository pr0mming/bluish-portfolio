import { Meta, StoryFn } from '@storybook/react'
import NavLink, { INavLinkProps } from './NavLink'
import { mockProps } from './NavLink.mock'

export default {
  title: 'Design System/UI/NavLink',
  component: NavLink,
  argTypes: {}
} as Meta<typeof NavLink>

const Story: StoryFn<typeof NavLink> = (arguments_) => (
  <NavLink {...arguments_} />
)

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as INavLinkProps
