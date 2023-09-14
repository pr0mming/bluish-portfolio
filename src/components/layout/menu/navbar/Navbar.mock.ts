import getAllMenus from '@src/modules/features/ui/navbar/application/getAllMenus'
import { INavbarProps } from './Navbar'

const base: INavbarProps = {
  menus: getAllMenus()
}

export const mockProps = {
  base
}
