import { Meta, StoryFn } from '@storybook/react'
import FloatingIconsPanel, {
  IFloatingIconsPanelProps
} from './FloatingIconsPanel'
import { mockProps } from './FloatingIconsPanel.mock'

export default {
  title: 'Design System/UI/FloatingIconsPanel',
  component: FloatingIconsPanel,
  argTypes: {}
} as Meta<typeof FloatingIconsPanel>

const Story: StoryFn<typeof FloatingIconsPanel> = (arguments_) => (
  <FloatingIconsPanel {...arguments_} />
)

export const Component = Story.bind({})

Component.args = {
  ...mockProps.base
} as IFloatingIconsPanelProps
