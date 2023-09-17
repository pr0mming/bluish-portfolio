import { SkillLevelEnum } from './enums/SkillLevelEnum'

type MeSkillEntity = {
  id: number
  name: string
  imgPath: string
  level: SkillLevelEnum
  isFavorite: boolean
}

export default MeSkillEntity
