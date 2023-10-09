import MenuEntity from '../domain/entities/MenuEntity'
import { MenuEnum } from '../domain/enums/MenuEnum'

const getAllMenus = (): MenuEntity[] => {
  return [
    {
      type: MenuEnum.HOME,
      text: 'home',
      path: 'home',
      icon: 'house'
    },
    {
      type: MenuEnum.ME,
      text: 'me',
      path: 'me',
      icon: 'face-smile-beam'
    },
    {
      type: MenuEnum.EXPERIENCE,
      text: 'experience',
      path: 'experience',
      icon: 'arrow-trend-up'
    },
    {
      type: MenuEnum.PROJECTS,
      text: 'projects',
      path: 'projects',
      icon: 'briefcase'
    }
  ]
}

export default getAllMenus
