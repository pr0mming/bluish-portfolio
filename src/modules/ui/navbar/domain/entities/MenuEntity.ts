import { MenuEnum } from '../enums/MenuEnum'

type MenuEntity = {
  type: MenuEnum
  text: string
  path: string
  icon: string
  isDefault: boolean
}

export default MenuEntity
