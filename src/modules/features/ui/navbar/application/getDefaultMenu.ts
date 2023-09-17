import MenuEntity from '../domain/entities/MenuEntity'
import { MenuEnum } from '../domain/enums/MenuEnum'

const getDefaultMenu = (): MenuEntity => {
  return {
    type: MenuEnum.HOME,
    text: 'Home',
    path: '#home',
    icon: 'house'
  }
}

export default getDefaultMenu
