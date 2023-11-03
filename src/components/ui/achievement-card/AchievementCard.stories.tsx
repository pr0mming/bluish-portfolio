import { Meta, StoryFn } from '@storybook/react'
import Achievements, { IAchievementCardProps } from './AchievementCard'
import { mockProps } from './AchievementCard.mock'

export default {
  title: 'Design System/UI/Achievement Card',
  component: Achievements,
  argTypes: {}
} as Meta<typeof Achievements>

const Story: StoryFn<typeof Achievements> = (arguments_) => (
  <Achievements {...arguments_} />
)

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as IAchievementCardProps
