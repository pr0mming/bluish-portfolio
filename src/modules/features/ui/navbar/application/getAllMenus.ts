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
      type: MenuEnum.EXPERIENCE,
      text: 'Experience',
      path: '#experience',
      icon: 'arrow-trend-up'
    },
    {
      type: MenuEnum.PROJECTS,
      text: 'Projects',
      path: '#projects',
      icon: 'briefcase'
    }
  ]
}

export default getAllMenus
