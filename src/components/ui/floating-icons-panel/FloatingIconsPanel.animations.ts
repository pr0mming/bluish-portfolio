import { AnimationPlaybackControls, AnimationScope } from 'framer-motion'

/* eslint-disable */
const runFloatMotion = async (
  scope: AnimationScope<unknown>,
  animate: (...args: any) => AnimationPlaybackControls
) => {
  await animate(
    scope.current,
    { opacity: 1 },
    { duration: 0.3, ease: 'easeInOut' }
  )
  await animate(
    scope.current,
    { y: ['2rem', '3rem', '2rem'] },
    { duration: 3, ease: 'easeInOut', repeat: Infinity }
  )
}

export default runFloatMotion
