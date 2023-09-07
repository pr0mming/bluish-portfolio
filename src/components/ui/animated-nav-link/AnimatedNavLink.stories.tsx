import { Meta, StoryFn } from '@storybook/react'
import AnimatedNavLink, { IAnimatedNavLinkProps } from './AnimatedNavLink'
import { mockProps } from './AnimatedNavLink.mock'

export default {
  title: 'Design System/UI/AnimatedNavLink',
  component: AnimatedNavLink,
  argTypes: {}
} as Meta<typeof AnimatedNavLink>

const Story: StoryFn<typeof AnimatedNavLink> = (arguments_) => (
  <AnimatedNavLink {...arguments_} />
)

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as IAnimatedNavLinkProps
