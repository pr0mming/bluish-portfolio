import FloatingIconEntity from '../domain/FloatingIconEntity'

const getAllFloatingIcons = (): FloatingIconEntity[] => {
  return [
    {
      iconPath: '/icons/dotnet-icon.svg',
      name: 'Dotnet',
      durationAnimation: 7
    },
    {
      iconPath: '/icons/golang-icon.svg',
      name: 'Golang',
      durationAnimation: 8
    },
    {
      iconPath: '/icons/database-icon.svg',
      name: 'Database',
      durationAnimation: 9
    },
    {
      iconPath: '/icons/python-icon.svg',
      name: 'Python',
      durationAnimation: 7
    },
    {
      iconPath: '/icons/azure-icon.svg',
      name: 'Azure',
      durationAnimation: 8
    },
    {
      iconPath: '/icons/aws-icon.svg',
      name: 'AWS',
      durationAnimation: 8
    },
    {
      iconPath: '/icons/git-icon.svg',
      name: 'Git',
      durationAnimation: 9
    },
    {
      iconPath: '/icons/firebase-icon.svg',
      name: 'Firebase',
      durationAnimation: 7
    },
    {
      iconPath: '/icons/tailwindcss-icon.svg',
      name: 'Tailwind',
      durationAnimation: 9
    },
    {
      iconPath: '/icons/bootstrap-icon.svg',
      name: 'Bootstrap',
      durationAnimation: 8
    },
    {
      iconPath: '/icons/nextjs-icon.svg',
      name: 'Next.js',
      durationAnimation: 7
    },
    {
      iconPath: '/icons/react-icon.svg',
      name: 'React',
      durationAnimation: 8
    },
    {
      iconPath: '/icons/angular-icon.svg',
      name: 'Angular',
      durationAnimation: 9
    },
    {
      iconPath: '/icons/js-icon.svg',
      name: 'JavaScript',
      durationAnimation: 8
    }
  ]
}

export default getAllFloatingIcons
