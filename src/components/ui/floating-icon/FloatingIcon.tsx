// Next
import Image from 'next/image'

// Hooks
import useFloatingIconsAnimation from '@src/hooks/animations/useFloatingIconsAnimation'

export interface IFloatingIconProps {
  durationAnimation: number
  delayOffset: number
  iconPath: string
}

const FloatingIcon = ({
  durationAnimation,
  delayOffset,
  iconPath
}: IFloatingIconProps) => {
  const { scope } = useFloatingIconsAnimation({
    durationAnimation,
    delayOffset
  })

  return (
    <div ref={scope} className="opacity-0">
      <Image src={iconPath} alt="Tech Icon" width={55} height={55} priority />
    </div>
  )
}

export default FloatingIcon
