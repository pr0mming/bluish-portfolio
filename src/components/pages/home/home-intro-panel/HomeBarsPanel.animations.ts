import { Variants } from "motion";

export const barsMotion: Variants = {
  initial: {
    x: '100vw'
  },
  animate: {
    x: '25vw',
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
}
