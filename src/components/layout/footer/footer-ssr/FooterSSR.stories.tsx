import { Meta, StoryFn } from '@storybook/react'
import Menu, { IFooterSSRProps } from './FooterSSR'
import { mockProps } from './FooterSSR.mock'

export default {
  title: 'Design System/Layout/Footer',
  component: Menu,
  argTypes: {}
} as Meta<typeof Menu>

const Story: StoryFn<typeof Menu> = (arguments_) => <Menu {...arguments_} />

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as IFooterSSRProps
