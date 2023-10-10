// Components
import AchievementCard from '@src/components/ui/achievement-card/AchievementCard'

// Hooks
import useAchievementsTranslation from '@src/hooks/i18n/features/useAchievementsTranslation'

export interface IAchievementsListProps {
  lang: string
}

const AchievementsList = ({ lang }: IAchievementsListProps) => {
  const { title, description, achievements } = useAchievementsTranslation(lang)

  return (
    <section>
      <h3 className="text-secondary text-2xl lg:text-3xl text-center font-bold tracking-wider uppercase mb-10">
        {title}
      </h3>
      <p className="text-center text-md md:text-xl font-semibold text-secondary">
        {description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {achievements.map((achievement, i) => (
          <AchievementCard
            key={achievement.id}
            isLast={i === achievements.length - 1}
            achievement={achievement}
          />
        ))}
      </div>
    </section>
  )
}

export default AchievementsList
