import SocialMediaEntity from '../domain/SocialMediaEntity'

const getAllSocialMedia = (): SocialMediaEntity[] => {
  return [
    {
      id: 1,
      imgPath: '/icons/github-icon.svg',
      url: 'https://github.com/pr0mming'
    },
    {
      id: 2,
      imgPath: '/icons/linkedin-icon.svg',
      url: 'https://www.linkedin.com/in/julian-bernal-09b393207/'
    },
    {
      id: 3,
      imgPath: '/icons/hackthebox-icon.svg',
      url: 'https://app.hackthebox.com/profile/21806'
    },
    {
      id: 4,
      imgPath: '/icons/hackerrank-icon.svg',
      url: 'https://www.hackerrank.com/pr0mming'
    }
  ]
}

export default getAllSocialMedia
