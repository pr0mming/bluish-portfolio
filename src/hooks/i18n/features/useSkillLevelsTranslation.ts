import { useClientTranslation } from '../useClientTranslation'
import getAllMeSkillLevels from '@src/modules/features/pages/me/application/getAllMeSkillLevels'

const useSkillLevelsTranslation = (lang: string) => {
  const skillLevels = getAllMeSkillLevels()

  const { t } = useClientTranslation(lang, 'skillLevels')

  return skillLevels.map((level) => ({
    ...level,
    title: t(level.title),
    description: t(level.description),
    workExperience: level.workExperience ? t(level.workExperience) : '',
    workExperienceLabel: level.workExperienceLabel
      ? t(level.workExperienceLabel)
      : ''
  }))
}

export default useSkillLevelsTranslation
