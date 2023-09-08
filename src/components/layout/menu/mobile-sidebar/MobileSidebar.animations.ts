export const sidebarMotion = {
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

export const backdropMotion = {
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
