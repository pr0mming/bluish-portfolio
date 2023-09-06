// Tailwind Config
import getTailwindConfig from '@src/modules/common/getTailwindConfig'

const whiteColor = getTailwindConfig().theme?.colors?.white as {
  [key: string]: string
}

export const textMotion = {
  rest: {
    color: whiteColor['DEFAULT'],
    opacity: 0.7,
    x: 0,
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn'
    }
  },
  hover: {
    color: whiteColor['DEFAULT'],
    opacity: 1,
    x: 10,
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
    color: whiteColor['DEFAULT'],
    opacity: 1,
    x: -10,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn'
    }
  }
}
