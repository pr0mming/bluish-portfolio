import MenuEntity from '../domain/entities/MenuEntity'
import { MenuEnum } from '../domain/enums/MenuEnum'

const getAllMenus = (): MenuEntity[] => {
  return [
    {
      type: MenuEnum.HOME,
      text: 'Home',
      redirect: 'home',
      icon: 'house'
    },
    {
      type: MenuEnum.ME,
      text: 'Me',
      redirect: 'me',
      icon: 'face-smile-beam'
    },
    {
      type: MenuEnum.PROJECTS,
      text: 'Projects',
      redirect: 'projects',
      icon: 'briefcase'
    },
    {
      type: MenuEnum.CONTACT,
      text: 'Contact',
      redirect: 'contact',
      icon: 'address-book'
    }
  ]
}

export default getAllMenus
