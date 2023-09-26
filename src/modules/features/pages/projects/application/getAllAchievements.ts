import AchievementEntity from '../domain/AchievementEntity'

const getAllAchievements = (): AchievementEntity[] => {
  return [
    {
      id: 1,
      title: 'Eulerian',
      description:
        "An awesome platform to solve coding challenges, it's a bit different because every challenge combines <strong>math</strong> and programming.",
      platformUrl: 'https://projecteuler.net/',
      imgPath: 'https://projecteuler.net/profile/pr0mming.png'
    },
    {
      id: 2,
      title: 'HTB Player',
      description:
        "Ever since I met HTB I discovered another way to squeeze your brain and It's a good platform to get involved with <strong>OWASP</strong>.",
      platformUrl: 'https://app.hackthebox.com/profile/21806',
      imgPath: 'https://hackthebox.com/badge/image/21806'
    },
    {
      id: 3,
      title: 'Hacker Rank',
      platformUrl: 'https://www.hackerrank.com/pr0mming',
      description:
        'I like to solve the classic Hacker Rank problems, It turned out in a good way to <strong>study algorithms</strong>, a good preparation for technical tests and a bit of <strong>optimization</strong>.'
    }
  ]
}

export default getAllAchievements
