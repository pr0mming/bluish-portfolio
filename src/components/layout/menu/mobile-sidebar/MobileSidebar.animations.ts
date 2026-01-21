import { Variants } from "motion"

export const sidebarMotion: Variants = {
  open: {
    x: '-50vw',
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  closed: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
}

export const backdropMotion: Variants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
}
