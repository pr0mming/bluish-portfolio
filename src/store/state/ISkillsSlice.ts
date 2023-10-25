// Modules
import MeSkillCatalogEntity from '@src/modules/features/pages/me/domain/MeSkillCatalogEntity'

// Enums
import { SkillLevelEnum } from '@src/modules/features/pages/me/domain/enums/SkillLevelEnum'

export interface ISkillFilters {
  isFavorite: boolean
  levels: SkillLevelEnum[]
}

export interface ISkillsSlice {
  skillsFilters: ISkillFilters
  initialSkills: MeSkillCatalogEntity[]
  skillsFiltered: MeSkillCatalogEntity[]
  setSkillsFilters: (value: ISkillFilters) => void
  setInitialSkills: (value: MeSkillCatalogEntity[]) => void
  addSkillFilter: (value: SkillLevelEnum) => void
  removeSkillFilter: (value: SkillLevelEnum) => void
  addFavSkillFilter: () => void
  removeFavSkillFilter: () => void
}
