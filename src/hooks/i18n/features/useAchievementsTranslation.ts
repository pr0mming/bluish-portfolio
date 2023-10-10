// Modules
import getAllAchievements from '@src/modules/features/pages/projects/application/getAllAchievements'

// i18n
import { useClientTranslation } from '../useClientTranslation'

const useAchievementsTranslation = (lang: string) => {
  const achievements = getAllAchievements()

  const { t } = useClientTranslation(lang, 'achievements')

  return {
    title: t('title'),
    description: t('description'),
    achievements: achievements.map((achievement) => ({
      ...achievement,
      description: t(achievement.description)
    }))
  }
}

export default useAchievementsTranslation
