import getAllMenus from '@src/modules/features/ui/navbar/application/getAllMenus'
import { IMobileSidebarProps } from './MobileSidebar'

const base: IMobileSidebarProps = {
  menus: getAllMenus()
}

export const mockProps = {
  base
}
