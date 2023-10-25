import { fallbackLng } from '@src/app/i18n/settings'
import { IMenuSSRProps } from './MenuSSR'

const base: IMenuSSRProps = {
  lang: fallbackLng
}

export const mockProps = {
  base
}
