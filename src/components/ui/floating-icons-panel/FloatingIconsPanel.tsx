// Next
import Image from 'next/image'

// React
import { useEffect } from 'react'

// Framer
import { motion, useAnimate } from 'framer-motion'

// Modules
import FloatingIconEntity from '@src/modules/pages/home/domain/FloatingIconEntity'

// Extensions
import runFloatMotion from './FloatingIconsPanel.animations'

export interface IFloatingIconsPanelProps {
  className: string
  icons: FloatingIconEntity[]
}

const FloatingIconsPanel = ({ className, icons }: IFloatingIconsPanelProps) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    runFloatMotion(scope, animate)
  })

  return (
    <motion.div
      ref={scope}
      className={`absolute flex flex-row flex-wrap opacity-0 gap-1 ${className}`}
    >
      {icons.map((icon) => (
        <div key={icon.iconPath}>
          <Image
            className="flex-1"
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
          />
        </div>
      ))}
    </motion.div>
  )
}

export default FloatingIconsPanel
