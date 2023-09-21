import { Meta, StoryFn } from '@storybook/react'
import { IHomePageProps } from './HomePage'
import HomePage from './HomePage'
import { mockProps } from './HomePage.mock'

export default {
  title: 'Design System/Pages/Home',
  component: HomePage,
  argTypes: {}
} as Meta<typeof HomePage>

const Story: StoryFn<typeof HomePage> = (arguments_) => (
  <HomePage {...(arguments_ as IHomePageProps)} />
)

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as IHomePageProps
