import MeSkillCatalogEntity from '../domain/MeSkillCatalogEntity'
import { SkillCategoryEnum } from '../domain/enums/SkillCategoryEnum'
import { SkillLevelEnum } from '../domain/enums/SkillLevelEnum'

const getAllMeSkillsCatalog = (): MeSkillCatalogEntity[] => {
  return [
    {
      id: 1,
      categoryType: SkillCategoryEnum.FRONTEND,
      skillList: [
        {
          id: 1,
          name: 'Angular',
          imgPath: '/skills/angular.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: true
        },
        {
          id: 2,
          name: 'React',
          imgPath: '/skills/react.png',
          level: SkillLevelEnum.ENTHUSIAST,
          isFavorite: false
        },
        {
          id: 3,
          name: 'Next',
          imgPath: '/skills/next.png',
          level: SkillLevelEnum.ENTHUSIAST,
          isFavorite: true
        },
        {
          id: 4,
          name: 'TypeScript',
          imgPath: '/skills/typescript.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: true
        },
        {
          id: 5,
          name: 'JavaScript',
          imgPath: '/skills/javascript.png',
          level: SkillLevelEnum.REPOSAITO,
          isFavorite: false
        },
        {
          id: 6,
          name: 'HTML',
          imgPath: '/skills/html.png',
          level: SkillLevelEnum.REPOSAITO,
          isFavorite: false
        },
        {
          id: 7,
          name: 'CSS',
          imgPath: '/skills/css.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: false
        },
        {
          id: 8,
          name: 'Bootstrap',
          imgPath: '/skills/bootstrap.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: false
        },
        {
          id: 9,
          name: 'Tailwind',
          imgPath: '/skills/tailwind.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: true
        },
        {
          id: 10,
          name: 'MUI',
          imgPath: '/skills/mui.png',
          level: SkillLevelEnum.ENTHUSIAST,
          isFavorite: false
        }
      ]
    }
  ]
}

export default getAllMeSkillsCatalog
