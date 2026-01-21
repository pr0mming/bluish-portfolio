// Next
import Image from 'next/image'

// Framer
import * as m from "motion/react-m"

// Modules
import FloatingIconEntity from '@src/modules/features/pages/home/domain/FloatingIconEntity'

export interface IFloatingIconProps {
  icon: FloatingIconEntity
  delayOffset: number
}

const FloatingIcon = ({ icon, delayOffset }: IFloatingIconProps) => {
  const { name, iconPath, durationAnimation } = icon

  // const { scope } = useFloatingIconsAnimation({
  //   durationAnimation,
  //   delayOffset
  // })

  return (
    <m.div
      className="opacity-0"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: ['2rem', '3rem', '2rem']
      }}
      transition={{
        opacity: {
          delay: 0.3 + delayOffset / 100,
          ease: 'easeInOut'
        },
        y: {
          duration: durationAnimation,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }
      }}
    >
      <Image src={iconPath} alt={name} width={55} height={55} priority />
    </m.div>
  )
}

export default FloatingIcon
