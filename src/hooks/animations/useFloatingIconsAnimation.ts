'use client'

// React
import { useEffect } from 'react'

// Framer
import { useAnimate } from 'framer-motion'

export interface IUseFloatingIconsAnimationProps {
  durationAnimation: number
  delayOffset: number
}

const useFloatingIconsAnimation = ({
  durationAnimation,
  delayOffset
}: IUseFloatingIconsAnimationProps) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      scope.current,
      { opacity: 1 },
      { delay: 0.2 + delayOffset / 10, ease: 'easeInOut' }
    )
    animate(
      scope.current,
      { y: ['2rem', '3rem', '2rem'] },
      { duration: durationAnimation, ease: 'easeInOut', repeat: Infinity }
    )
  })

  return { scope }
}

export default useFloatingIconsAnimation
