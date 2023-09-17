import { SkillLevelEnum } from '../domain/enums/SkillLevelEnum'

export const getActiveSkillFilters = () => {
  return [
    SkillLevelEnum.CONFIDENT,
    SkillLevelEnum.ENTHUSIAST,
    SkillLevelEnum.REPOSAITO
  ]
}
