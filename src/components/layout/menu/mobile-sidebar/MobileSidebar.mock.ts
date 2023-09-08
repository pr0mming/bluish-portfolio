import getAllMenus from '@src/modules/ui/navbar/application/getAllMenus'
import { IMobileSidebarProps } from './MobileSidebar'

const base: IMobileSidebarProps = {
  menus: getAllMenus(),
  isOpenSidebar: true
}

export const mockProps = {
  base
}
