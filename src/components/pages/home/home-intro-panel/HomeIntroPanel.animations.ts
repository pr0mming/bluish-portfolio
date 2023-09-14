export const barsMotion = {
  initial: {
    x: 0
  },
  animate: {
    x: '-100vw',
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
}

export const justMeMotion = {
  initial: {
    x: 0
  },
  animate: {
    x: '-100vw',
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      delay: 0.3
    }
  }
}
