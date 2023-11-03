import { Meta, StoryFn } from '@storybook/react'
import MainLink, { IMainLinkProps } from './MainLink'
import { mockProps } from './MainLink.mock'

export default {
  title: 'Design System/UI/Main Link',
  component: MainLink,
  argTypes: {}
} as Meta<typeof MainLink>

const Story: StoryFn<typeof MainLink> = (arguments_) => (
  <MainLink {...arguments_} />
)

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as IMainLinkProps
