import { Meta, StoryFn } from '@storybook/react'
import ProjectCard, { IProjectCardProps } from './ProjectCard'
import { mockProps } from './ProjectCard.mock'

export default {
  title: 'Design System/UI/Project Card',
  component: ProjectCard,
  argTypes: {}
} as Meta<typeof ProjectCard>

const Story: StoryFn<typeof ProjectCard> = (arguments_) => (
  <ProjectCard {...arguments_} />
)

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as IProjectCardProps
