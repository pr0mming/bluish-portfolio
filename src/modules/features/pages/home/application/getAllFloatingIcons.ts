import FloatingIconEntity from '../domain/FloatingIconEntity'

const getAllFloatingIcons = (): FloatingIconEntity[][] => {
  return [
    [
      {
        iconPath: '/icons/dotnet-icon.svg',
        position: { top: 30 }
      },
      {
        iconPath: '/icons/golang-icon.svg',
        position: { top: 50 }
      },
      {
        iconPath: '/icons/solidity-icon.svg',
        position: { top: 30 }
      },
      {
        iconPath: '/icons/database-icon.svg',
        position: { top: 15, right: 10 }
      },
      {
        iconPath: '/icons/python-icon.svg',
        position: { bottom: 5, left: 10 }
      },
      {
        iconPath: '/icons/azure-icon.svg',
        position: { top: 20, right: 10 }
      },
      {
        iconPath: '/icons/aws-icon.svg',
        position: { bottom: 30, right: 10 }
      }
    ],
    [
      {
        iconPath: '/icons/git-icon.svg',
        position: { left: 10, top: 30 }
      },

      {
        iconPath: '/icons/firebase-icon.svg',
        position: { top: 30 }
      },
      {
        iconPath: '/icons/nextjs-icon.svg',
        position: { top: 40 }
      },
      {
        iconPath: '/icons/react-icon.svg',
        position: { top: 10, right: 10 }
      },
      {
        iconPath: '/icons/angular-icon.svg',
        position: { bottom: 5, right: 10 }
      },
      {
        iconPath: '/icons/js-icon.svg',
        position: { left: 20, top: 10 }
      },

      {
        iconPath: '/icons/linux-icon.svg',
        position: { right: 20, bottom: 5 }
      }
    ]
  ]
}

export default getAllFloatingIcons
