import { ISkillCardProps } from './SkillCard'
import getAllMeSkillsCatalog from '@src/modules/features/pages/me/application/getAllMeSkillsCatalog'

const skills = getAllMeSkillsCatalog()

const base: ISkillCardProps = {
  skill: skills[0].skillList[0],
  initialAnimation: 'show'
}

export const mockProps = {
  base
}
