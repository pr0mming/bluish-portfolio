'use client'

// React
import { useEffect } from 'react'

// Framer
import { useAnimate, useInView } from 'framer-motion'

const useArrowAnimation = () => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })

  useEffect(() => {
    if (isInView) {
      animate(
        'path',
        { pathLength: 1, fill: '#5588A3', fillOpacity: 1 },
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
