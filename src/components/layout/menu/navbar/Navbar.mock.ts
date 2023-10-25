import getAllMenus from '@src/modules/features/ui/navbar/application/getAllMenus'
import { INavbarProps } from './Navbar'
import { fallbackLng } from '@src/app/i18n/settings'

const base: INavbarProps = {
  lang: fallbackLng,
  menus: getAllMenus()
}

export const mockProps = {
  base
}
