import { Meta, StoryFn } from '@storybook/react'
import ProjectsPage, { IProjectsPageProps } from './ProjectsPage'
import { mockProps } from './ProjectsPage.mock'

export default {
  title: 'Design System/Pages/Projects',
  component: ProjectsPage,
  argTypes: {}
} as Meta<typeof ProjectsPage>

const Story: StoryFn<typeof ProjectsPage> = (arguments_) => (
  <ProjectsPage {...arguments_} />
)

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as IProjectsPageProps
