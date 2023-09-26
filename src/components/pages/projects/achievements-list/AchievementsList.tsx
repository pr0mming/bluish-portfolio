import AchievementCard from '@src/components/ui/achievement-card/AchievementCard'
import getAllAchievements from '@src/modules/features/pages/projects/application/getAllAchievements'

const AchievementsList = () => {
  const achievements = getAllAchievements()

  return (
    <section>
      <h3 className="text-secondary text-3xl text-center font-bold tracking-wider uppercase mb-10">
        Other Achievements
      </h3>
      <p className="text-center text-md md:text-xl font-semibold text-secondary">
        I&apos;ve dedicated part of my free time in other platforms to improve
        my skills
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </section>
  )
}

export default AchievementsList
