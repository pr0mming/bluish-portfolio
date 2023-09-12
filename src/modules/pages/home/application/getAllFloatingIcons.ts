import FloatingIconEntity from '../domain/FloatingIconEntity'

const getAllFloatingIcons = (): FloatingIconEntity[][] => {
  return [
    [
      {
        iconPath: '/icons/dotnet_icon.svg',
        position: { top: 30 }
      },
      {
        iconPath: '/icons/golang_icon.svg',
        position: { top: 50 }
      },
      {
        iconPath: '/icons/solidity_icon.svg',
        position: { top: 30 }
      },
      {
        iconPath: '/icons/database_icon.svg',
        position: { top: 15, right: 10 }
      },
      {
        iconPath: '/icons/python_icon.svg',
        position: { bottom: 5, left: 10 }
      },
      {
        iconPath: '/icons/azure_icon.svg',
        position: { top: 20, right: 10 }
      },
      {
        iconPath: '/icons/aws_icon.svg',
        position: { bottom: 30, right: 10 }
      }
    ],
    [
      {
        iconPath: '/icons/git_icon.svg',
        position: { left: 10, top: 30 }
      },

      {
        iconPath: '/icons/firebase_icon.svg',
        position: { top: 30 }
      },
      {
        iconPath: '/icons/nextjs_icon.svg',
        position: { top: 40 }
      },
      {
        iconPath: '/icons/react_icon.svg',
        position: { top: 10, right: 10 }
      },
      {
        iconPath: '/icons/angular_icon.svg',
        position: { bottom: 5, right: 10 }
      },
      {
        iconPath: '/icons/js_icon.svg',
        position: { left: 20, top: 10 }
      },

      {
        iconPath: '/icons/linux_icon.svg',
        position: { right: 20, bottom: 5 }
      }
    ]
  ]
}

export default getAllFloatingIcons
