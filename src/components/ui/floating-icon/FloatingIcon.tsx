// Next
import Image from 'next/image'

// Hooks
import useFloatingIconsAnimation from '@src/hooks/animations/useFloatingIconsAnimation'

// Modules
import FloatingIconEntity from '@src/modules/features/pages/home/domain/FloatingIconEntity'

export interface IFloatingIconProps {
  icon: FloatingIconEntity
  delayOffset: number
}

const FloatingIcon = ({ icon, delayOffset }: IFloatingIconProps) => {
  const { name, iconPath, durationAnimation } = icon

  const { scope } = useFloatingIconsAnimation({
    durationAnimation,
    delayOffset
  })

  return (
    <div ref={scope} className="opacity-0">
      <Image src={iconPath} alt={name} width={55} height={55} priority />
    </div>
  )
}

export default FloatingIcon
