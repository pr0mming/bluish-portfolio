import { ISkillLevelButtonProps } from './SkillLevelButton'
import getAllMeSkillLevels from '@src/modules/features/pages/me/application/getAllMeSkillLevels'

const experience = getAllMeSkillLevels()

const base: ISkillLevelButtonProps = {
  level: experience[0],
  children: null
}

export const mockProps = {
  base
}
