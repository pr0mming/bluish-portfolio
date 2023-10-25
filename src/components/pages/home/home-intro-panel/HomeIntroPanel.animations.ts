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
    x: '100vw'
  },
  animate: {
    x: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.7,
      delay: 0.2
    }
  }
}
