export const textMotion = {
  rest: {
    color: '#E8E8E8',
    opacity: 0.7,
    x: 0,
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn'
    }
  },
  hover: {
    color: '#E8E8E8',
    opacity: 1,
    x: 26,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut'
    }
  }
}

export const slashMotion = {
  rest: {
    opacity: 0,
    ease: 'easeOut',
    duration: 0.2,
    type: 'tween'
  },
  hover: {
    color: '#E8E8E8',
    opacity: 1,
    x: 12,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn'
    }
  }
}

export const selectedLinkMotion = {
  type: 'spring',
  bounce: 0.25,
  stiffness: 130,
  damping: 9,
  duration: 0.3
}
