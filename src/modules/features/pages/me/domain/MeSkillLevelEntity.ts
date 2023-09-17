import { SkillLevelEnum } from './enums/SkillLevelEnum'

type MeSkillLevelEntity = {
  id: number
  title: string
  description: string
  workExperience?: string
  type?: SkillLevelEnum
  icon: string
}

export default MeSkillLevelEntity
