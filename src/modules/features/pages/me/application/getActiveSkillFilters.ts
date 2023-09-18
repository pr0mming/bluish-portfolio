import { SkillLevelEnum } from '../domain/enums/SkillLevelEnum'

const getActiveSkillFilters = () => {
  return [
    SkillLevelEnum.CONFIDENT,
    SkillLevelEnum.ENTHUSIAST,
    SkillLevelEnum.REPOSAITO
  ]
}

export default getActiveSkillFilters
