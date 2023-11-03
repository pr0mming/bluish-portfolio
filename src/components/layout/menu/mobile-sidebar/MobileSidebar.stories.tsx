import { Meta, StoryFn } from '@storybook/react'
import MobileSidebar, { IMobileSidebarProps } from './MobileSidebar'
import { mockProps } from './MobileSidebar.mock'

export default {
  title: 'Design System/Layout/Mobile Sidebar',
  component: MobileSidebar,
  argTypes: {}
} as Meta<typeof MobileSidebar>

const Story: StoryFn<typeof MobileSidebar> = (arguments_) => (
  <MobileSidebar {...arguments_} />
)

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as IMobileSidebarProps
