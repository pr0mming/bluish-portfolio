import { Meta, StoryFn } from '@storybook/react'
import MePage, { IMePageProps } from './MePage'
import { mockProps } from './MePage.mock'

export default {
  title: 'Design System/Pages/Me',
  component: MePage,
  argTypes: {}
} as Meta<typeof MePage>

const Story: StoryFn<typeof MePage> = (arguments_) => <MePage {...arguments_} />

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as IMePageProps
