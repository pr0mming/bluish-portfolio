import MenuEntity from '../domain/entities/MenuEntity'
import { MenuEnum } from '../domain/enums/MenuEnum'

const getAllMenus = (): MenuEntity[] => {
  return [
    {
      type: MenuEnum.HOME,
      text: 'Home',
      path: '#home',
      icon: 'house',
      isDefault: true
    },
    {
      type: MenuEnum.ME,
      text: 'Me',
      path: '#me',
      icon: 'face-smile-beam',
      isDefault: false
    },
    {
      type: MenuEnum.PROJECTS,
      text: 'Projects',
      path: '#projects',
      icon: 'briefcase',
      isDefault: false
    },
    {
      type: MenuEnum.CONTACT,
      text: 'Contact',
      path: '#contact',
      icon: 'address-book',
      isDefault: false
    }
  ]
}

export default getAllMenus
