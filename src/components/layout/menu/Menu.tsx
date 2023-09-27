'use client'

// Next
import dynamic from 'next/dynamic'

// Framer
import { AnimatePresence } from 'framer-motion'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faSmileBeam,
  faBriefcase,
  faArrowTrendUp,
  faGlobe
} from '@fortawesome/free-solid-svg-icons'

// Modules
import MenuEntity from '@src/modules/features/ui/navbar/domain/entities/MenuEntity'
import getAllMenus from '@src/modules/features/ui/navbar/application/getAllMenus'

// Components
import Navbar from '@src/components/layout/menu/navbar/Navbar'

// Lazy
const MobileSidebar = dynamic(
  () => import('@src/components/layout/menu/mobile-sidebar/MobileSidebar')
)

// Store
import useAppStore from '@src/store/AppStore'

// Load icons for normal/responsive menu
library.add(faHome, faSmileBeam, faBriefcase, faArrowTrendUp, faGlobe)

export interface IMenuProps {}

const Menu = () => {
  const menus: MenuEntity[] = getAllMenus()

  const isOpenSidebar = useAppStore((state) => state.isOpenSidebar)

  return (
    <header className="fixed w-full z-10">
      <Navbar menus={menus} />
      <AnimatePresence>
        {isOpenSidebar && <MobileSidebar menus={menus} />}
      </AnimatePresence>
    </header>
  )
}

export default Menu
