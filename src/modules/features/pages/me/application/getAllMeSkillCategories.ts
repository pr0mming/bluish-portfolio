import MeSkillCategoryEntity from '../domain/MeSkillCategoryEntity'
import { SkillCategoryEnum } from '../domain/enums/SkillCategoryEnum'

const getAllMeSkillCategories = (): MeSkillCategoryEntity[] => {
  return [
    {
      id: 1,
      name: 'Frontend',
      icon: 'pencil',
      type: SkillCategoryEnum.FRONTEND
    },
    {
      id: 2,
      name: 'Backend',
      icon: 'brain',
      type: SkillCategoryEnum.BACKEND
    },
    {
      id: 3,
      name: 'Database',
      icon: 'database',
      type: SkillCategoryEnum.DATABASE
    },
    {
      id: 4,
      name: 'Cloud',
      icon: 'cloud',
      type: SkillCategoryEnum.CLOUD
    },
    {
      id: 5,
      name: 'Misc',
      icon: 'puzzle-piece',
      type: SkillCategoryEnum.MISC
    }
  ]
}

export default getAllMeSkillCategories
