import { Meta, StoryFn } from '@storybook/react'
import Footer, { IFooterProps } from './Footer'
import { mockProps } from './Footer.mock'

export default {
  title: 'Design System/Layout/Footer',
  component: Footer,
  argTypes: {}
} as Meta<typeof Footer>

const Story: StoryFn<typeof Footer> = (arguments_) => <Footer {...arguments_} />

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as IFooterProps
