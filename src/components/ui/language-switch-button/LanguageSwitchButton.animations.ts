export const textMotion = {
  rest: {
    x: 10,
    color: '#E8E8E8',
    opacity: 0,
    transition: {
      delay: 0.1,
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn'
    }
  },
  active: {
    x: 0,
    color: '#E8E8E8',
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.2,
      type: 'tween',
      ease: 'easeOut'
    }
  }
}

export const slashMotion = {
  rest: {
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn'
    }
  },
  active: {
    x: -15,
    color: '#E8E8E8',
    transition: {
      delay: 0.1,
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn'
    }
  }
}
