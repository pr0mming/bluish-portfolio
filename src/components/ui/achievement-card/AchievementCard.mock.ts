import getAllAchievements from '@src/modules/features/pages/projects/application/getAllAchievements'
import { IAchievementCardProps } from './AchievementCard'

const achievements = getAllAchievements()

const base: IAchievementCardProps = {
  achievement: achievements[0],
  isLast: false
}

export const mockProps = {
  base
}
