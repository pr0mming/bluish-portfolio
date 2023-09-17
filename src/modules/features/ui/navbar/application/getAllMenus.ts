import MenuEntity from '../domain/entities/MenuEntity'
import { MenuEnum } from '../domain/enums/MenuEnum'

const getAllMenus = (): MenuEntity[] => {
  return [
    {
      type: MenuEnum.HOME,
      text: 'Home',
      path: '#home',
      icon: 'house'
    },
    {
      type: MenuEnum.ME,
      text: 'Me',
      path: '#me',
      icon: 'face-smile-beam'
    },
    {
      type: MenuEnum.PROJECTS,
      text: 'Projects',
      path: '#projects',
      icon: 'briefcase'
    },
    {
      type: MenuEnum.CONTACT,
      text: 'Contact',
      path: '#contact',
      icon: 'address-book'
    }
  ]
}

export default getAllMenus
