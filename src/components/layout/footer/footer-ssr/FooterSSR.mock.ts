import { fallbackLng } from '@src/app/i18n/settings'
import { IFooterSSRProps } from './FooterSSR'

const base: IFooterSSRProps = {
  lang: fallbackLng
}

export const mockProps = {
  base
}
