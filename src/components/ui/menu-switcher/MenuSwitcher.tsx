'use client'

// Framer
import { m, LazyMotion, domAnimation } from 'framer-motion'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

// Hooks
import useAppContext from '@src/hooks/useAppContext'

library.add(faBars, faXmark)

const MenuSwitcher = () => {
  const { isOpenSidebar, changeOpenSidebar } = useAppContext()

  return (
    <LazyMotion features={domAnimation}>
      <m.button
        className="inline-flex items-center justify-center md:hidden p-2 w-10 h-10 text-white text-opacity-70"
        type="button"
        onClick={() => changeOpenSidebar(!isOpenSidebar)}
        whileTap={{ scale: 0.9 }}
        aria-label="Switch Sidebar"
      >
        <m.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FontAwesomeIcon
            icon={['fas', isOpenSidebar ? 'xmark' : 'bars']}
            size="2x"
          />
        </m.span>
      </m.button>
    </LazyMotion>
  )
}

export default MenuSwitcher
