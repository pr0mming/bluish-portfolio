import { Meta, StoryFn } from '@storybook/react'
import SkillLevelButton, { ISkillLevelButtonProps } from './SkillLevelButton'
import { mockProps } from './SkillLevelButton.mock'

export default {
  title: 'Design System/UI/Skill Level Button',
  component: SkillLevelButton,
  argTypes: {}
} as Meta<typeof SkillLevelButton>

const Story: StoryFn<typeof SkillLevelButton> = (arguments_) => (
  <SkillLevelButton {...arguments_} />
)

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as ISkillLevelButtonProps
