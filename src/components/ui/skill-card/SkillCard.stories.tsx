import { Meta, StoryFn } from '@storybook/react'
import SkillCard, { ISkillCardProps } from './SkillCard'
import { mockProps } from './SkillCard.mock'

export default {
  title: 'Design System/UI/Skill Card',
  component: SkillCard,
  argTypes: {}
} as Meta<typeof SkillCard>

const Story: StoryFn<typeof SkillCard> = (arguments_) => (
  <SkillCard {...arguments_} />
)

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as ISkillCardProps
