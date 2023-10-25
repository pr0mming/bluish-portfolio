// Modules
import getAllMeSkillLevels from '@src/modules/features/pages/me/application/getAllMeSkillLevels'

// i18n
import { useClientTranslation } from '../useClientTranslation'

const useSkillLevelsTranslation = (lang: string) => {
  const skillLevels = getAllMeSkillLevels()

  const { t } = useClientTranslation(lang, 'skillLevels')

  // I reuse the same object to translate all the necessary keys
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
