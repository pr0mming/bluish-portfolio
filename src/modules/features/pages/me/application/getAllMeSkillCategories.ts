import MeSkillCategoryEntity from '../domain/MeSkillCategoryEntity'
import { SkillCategoryEnum } from '../domain/enums/SkillCategoryEnum'

const getAllMeSkillCategories = (): MeSkillCategoryEntity[] => {
  return [
    {
      id: 1,
      name: 'firstCategory.title',
      icon: 'pencil',
      type: SkillCategoryEnum.FRONTEND
    },
    {
      id: 2,
      name: 'secondCategory.title',
      icon: 'brain',
      type: SkillCategoryEnum.BACKEND
    },
    {
      id: 3,
      name: 'thirdCategory.title',
      icon: 'database',
      type: SkillCategoryEnum.DATABASE
    },
    {
      id: 4,
      name: 'fourthCategory.title',
      icon: 'cloud',
      type: SkillCategoryEnum.CLOUD
    },
    {
      id: 5,
      name: 'fifthCategory.title',
      icon: 'puzzle-piece',
      type: SkillCategoryEnum.OTHERS
    }
  ]
}

export default getAllMeSkillCategories
