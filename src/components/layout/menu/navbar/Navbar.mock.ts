import getAllMenus from '@src/modules/ui/navbar/application/getAllMenus'
import { INavbarProps } from './Navbar'

const base: INavbarProps = {
  menus: getAllMenus(),
  isOpenSidebar: false,
  setOpenSidebar: () => {}
}

export const mockProps = {
  base
}
