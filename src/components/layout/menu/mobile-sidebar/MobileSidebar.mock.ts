import getAllMenus from '@src/modules/features/ui/navbar/application/getAllMenus'
import { IMobileSidebarProps } from './MobileSidebar'
import { fallbackLng } from '@src/app/i18n/settings'

const base: IMobileSidebarProps = {
  lang: fallbackLng,
  menus: getAllMenus()
}

export const mockProps = {
  base
}
