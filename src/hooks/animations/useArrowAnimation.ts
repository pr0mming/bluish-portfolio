// React
import { useEffect } from 'react'

// Framer
import { useAnimate, useInView } from 'framer-motion'

// Tailwind Config
import getTailwindConfig from '@src/modules/common/getTailwindConfig'

const accentColor = getTailwindConfig().theme?.colors?.accent as {
  [key: string]: string
}

const useArrowAnimation = () => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })

  useEffect(() => {
    if (isInView) {
      animate(
        'path',
        { pathLength: 1, fill: accentColor['DEFAULT'], fillOpacity: 1 },
        {
          delay: 0.3,
          duration: 2,
          ease: 'easeInOut'
        }
      )
    }
  }, [isInView, animate])

  return { scope }
}

export default useArrowAnimation
