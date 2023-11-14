import SocialMediaEntity from '../domain/SocialMediaEntity'

const getAllSocialMedia = (): SocialMediaEntity[] => {
  return [
    {
      id: 1,
      name: 'Github',
      imgPath: '/icons/github-icon.svg',
      url: 'https://github.com/pr0mming'
    },
    {
      id: 2,
      name: 'LinkedIn',
      imgPath: '/icons/linkedin-icon.svg',
      url: 'https://www.linkedin.com/in/pr0mming'
    },
    {
      id: 3,
      name: 'Hack The Box',
      imgPath: '/icons/hackthebox-icon.svg',
      url: 'https://app.hackthebox.com/profile/21806'
    },
    {
      id: 4,
      name: 'Hacker Rank',
      imgPath: '/icons/hackerrank-icon.svg',
      url: 'https://www.hackerrank.com/pr0mming'
    }
  ]
}

export default getAllSocialMedia
