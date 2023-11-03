import FavTechEntity from '../domain/entities/FavTechEntity'

const getAllFavTech = (): FavTechEntity[] => {
  return [
    {
      name: 'Figma',
      iconPath: '/icons/figma-icon.svg'
    },
    {
      name: 'Next',
      iconPath: '/icons/nextjs-icon.svg'
    },
    {
      name: 'Tailwind CSS',
      iconPath: '/icons/tailwindcss-icon.svg'
    }
  ]
}

export default getAllFavTech
