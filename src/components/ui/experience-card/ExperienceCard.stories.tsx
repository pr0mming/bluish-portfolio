import { Meta, StoryFn } from '@storybook/react'
import ExperienceCard, { IExperienceCardProps } from './ExperienceCard'
import { mockProps } from './ExperienceCard.mock'

export default {
  title: 'Design System/UI/Experience Card',
  component: ExperienceCard,
  argTypes: {}
} as Meta<typeof ExperienceCard>

const Story: StoryFn<typeof ExperienceCard> = (arguments_) => (
  <ExperienceCard {...arguments_} />
)

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as IExperienceCardProps
