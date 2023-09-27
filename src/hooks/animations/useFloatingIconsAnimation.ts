// React
import { useEffect } from 'react'

// Framer
import { useAnimate } from 'framer-motion'

const useFloatingIconsAnimation = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(scope.current, { opacity: 1 }, { duration: 0.3, ease: 'easeInOut' })
    animate(
      scope.current,
      { y: ['2rem', '3rem', '2rem'] },
      { duration: 3, ease: 'easeInOut', repeat: Infinity }
    )
  })

  return { scope }
}

export default useFloatingIconsAnimation
