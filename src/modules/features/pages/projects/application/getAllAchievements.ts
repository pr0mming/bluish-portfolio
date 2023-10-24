import AchievementEntity from '../domain/AchievementEntity'

const getAllAchievements = (): AchievementEntity[] => {
  return [
    {
      id: 1,
      title: 'Project Euler',
      description: 'firstAchievements.description',
      platformUrl: 'https://projecteuler.net/',
      imgPath: '/projects/p_euler.png'
    },
    {
      id: 2,
      title: 'Hack The Box',
      description: 'secondAchievements.description',
      platformUrl: 'https://app.hackthebox.com/profile/21806',
      imgPath: '/projects/htb.png'
    },
    {
      id: 3,
      title: 'Hacker Rank',
      platformUrl: 'https://www.hackerrank.com/pr0mming',
      description: 'thirdAchievements.description'
    }
  ]
}

export default getAllAchievements
