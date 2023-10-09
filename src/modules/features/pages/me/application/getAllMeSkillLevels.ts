import MeSkillLevelEntity from '../domain/MeSkillLevelEntity'
import { SkillLevelEnum } from '../domain/enums/SkillLevelEnum'

const getAllMeSkillLevels = (): MeSkillLevelEntity[] => {
  const workExperienceLabel = 'workExperienceLabel'

  return [
    {
      id: 1,
      title: 'firstLevel.title',
      description: 'firstLevel.description',
      workExperience: 'firstLevel.workExperience',
      workExperienceLabel,
      type: SkillLevelEnum.ENTHUSIAST,
      icon: 'face-smile'
    },
    {
      id: 2,
      title: 'secondLevel.title',
      description: 'secondLevel.description',
      workExperience: 'secondLevel.workExperience',
      workExperienceLabel,
      type: SkillLevelEnum.CONFIDENT,
      icon: 'fa-face-laugh-beam'
    },
    {
      id: 3,
      title: 'thirdLevel.title',
      description: 'thirdLevel.description',
      workExperience: 'thirdLevel.workExperience',
      workExperienceLabel,
      type: SkillLevelEnum.REPOSAITO,
      icon: 'face-kiss'
    },
    {
      id: 4,
      title: 'fourthLevel.title',
      description: 'fourthLevel.description',
      icon: 'heart'
    }
  ]
}

export default getAllMeSkillLevels
