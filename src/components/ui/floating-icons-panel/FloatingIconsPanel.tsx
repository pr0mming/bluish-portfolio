// Next
import Image from 'next/image'

// Framer
import { m } from 'framer-motion'

// Modules
import FloatingIconEntity from '@src/modules/features/pages/home/domain/FloatingIconEntity'

// Hooks
import useFloatingIconsAnimation from '@src/hooks/animations/useFloatingIconsAnimation'

export interface IFloatingIconsPanelProps {
  className: string
  icons: FloatingIconEntity[]
}

const FloatingIconsPanel = ({ className, icons }: IFloatingIconsPanelProps) => {
  const { scope } = useFloatingIconsAnimation()

  return (
    <m.div
      ref={scope}
      className={`absolute flex flex-row flex-wrap opacity-0 gap-1 ${className}`}
    >
      {icons.map((icon) => (
        <div key={icon.iconPath}>
          <Image
            style={{
              marginTop: icon.position.top,
              marginBottom: icon.position.bottom,
              marginLeft: icon.position.left,
              marginRight: icon.position.right
            }}
            src={icon.iconPath}
            alt="Tech Icon"
            width={55}
            height={55}
            priority
          />
        </div>
      ))}
    </m.div>
  )
}

export default FloatingIconsPanel
