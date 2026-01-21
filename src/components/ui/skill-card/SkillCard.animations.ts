import { Variants } from "motion";

export const skillCardMotion: Variants = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
}
