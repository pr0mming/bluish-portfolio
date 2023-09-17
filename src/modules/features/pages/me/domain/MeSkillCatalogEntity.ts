import MeSkillEntity from './MeSkillEntity'
import { SkillCategoryEnum } from './enums/SkillCategoryEnum'

type MeSkillCatalogEntity = {
  id: number
  categoryType: SkillCategoryEnum
  skillList: MeSkillEntity[]
}

export default MeSkillCatalogEntity
