import MeSkillLevelEntity from '../domain/MeSkillLevelEntity'
import { SkillLevelEnum } from '../domain/enums/SkillLevelEnum'

const getAllMeSkillLevels = (): MeSkillLevelEntity[] => {
  return [
    {
      id: 1,
      title: 'Enthusiast',
      description: `I've used the skill for a time, but I feel that I need master it`,
      workExperience: '1 year or less',
      type: SkillLevelEnum.ENTHUSIAST,
      icon: 'face-smile'
    },
    {
      id: 2,
      title: 'Confident',
      description: `I have more experience and I can use the skill without problems`,
      workExperience: '2 years',
      type: SkillLevelEnum.CONFIDENT,
      icon: 'fa-face-laugh-beam'
    },
    {
      id: 3,
      title: '"Reposaito"',
      description: `I've worked with the skill almost all of my life and I've faced hard problems`,
      workExperience: '3 years or more',
      type: SkillLevelEnum.REPOSAITO,
      icon: 'face-kiss'
    },
    {
      id: 4,
      title: 'My Favorite',
      description: `It's just a flag for mark my favorite skills to use regardless of my expertice`,
      icon: 'heart'
    }
  ]
}

export default getAllMeSkillLevels
