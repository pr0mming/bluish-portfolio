import { Meta, StoryFn } from '@storybook/react'
import ExperiencePage, { IExperiencePageProps } from './ExperiencePage'
import { mockProps } from './ExperiencePage.mock'

export default {
  title: 'Design System/Pages/Experience',
  component: ExperiencePage,
  argTypes: {}
} as Meta<typeof ExperiencePage>

const Story: StoryFn<typeof ExperiencePage> = (arguments_) => (
  <ExperiencePage {...arguments_} />
)

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as IExperiencePageProps
