import { MenuEnum } from '../enums/MenuEnum'

type MenuEntity = {
  type: MenuEnum
  text: string
  redirect: string
  icon: string
}

export default MenuEntity
