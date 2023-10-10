'use client'

// Framer
import { m } from 'framer-motion'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

// Store
import useAppStore from '@src/store/AppStore'

library.add(faBars, faXmark)

const MenuSwitcher = () => {
  const isOpenSidebar = useAppStore((state) => state.isOpenSidebar)
  const setOpenSidebar = useAppStore((state) => state.setOpenSidebar)

  return (
    <m.button
      className="inline-flex items-center justify-center lg:hidden p-2 w-10 h-10 text-white text-opacity-70"
      type="button"
      onClick={() => setOpenSidebar(!isOpenSidebar)}
      whileTap={{ scale: 0.9 }}
      aria-label="Switch Sidebar"
    >
      <m.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <FontAwesomeIcon icon={isOpenSidebar ? 'xmark' : 'bars'} size="2x" />
      </m.span>
    </m.button>
  )
}

export default MenuSwitcher
