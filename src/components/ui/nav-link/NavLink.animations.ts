import { Transition, Variants } from "motion"

export const textMotion: Variants = {
  rest: {
    x: 0,
    color: '#E8E8E8',
    opacity: 0.7,
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn'
    }
  },
  hover: {
    x: 10,
    color: '#E8E8E8',
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut'
    }
  }
}

export const slashMotion: Variants = {
  rest: {
    x: -10,
    opacity: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.2,
      type: 'tween'
    }
  },
  hover: {
    x: 0,
    color: '#E8E8E8',
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn'
    }
  }
}

export const selectedLinkMotion: Transition = {
  type: 'spring',
  bounce: 0.25,
  stiffness: 130,
  damping: 9,
  duration: 0.3
}
