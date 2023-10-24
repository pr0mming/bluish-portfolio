import type { Preview } from '@storybook/react'
import '../src/styles/globals.css'
import i18n from './i18next'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    i18n
  }
}

export default preview
