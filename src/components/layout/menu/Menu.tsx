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
  faArrowTrendUp
} from '@fortawesome/free-solid-svg-icons'

// Components
import Navbar from '@src/components/layout/menu/navbar/Navbar'

// Lazy
const MobileSidebar = dynamic(
  () => import('@src/components/layout/menu/mobile-sidebar/MobileSidebar')
)

// Store
import useBoundStore from '@src/store/AppStore'

// Modules
import MenuEntity from '@src/modules/features/ui/navbar/domain/entities/MenuEntity'

// Load icons for normal/responsive menu
library.add(faHome, faSmileBeam, faBriefcase, faArrowTrendUp)

export interface IMenuProps {
  lang: string
  menus: MenuEntity[]
}

const Menu = ({ lang, menus }: IMenuProps) => {
  const isOpenSidebar = useBoundStore((state) => state.isOpenSidebar)

  return (
    <header className="fixed w-full z-10">
      <Navbar lang={lang} menus={menus} />
      <AnimatePresence>
        {isOpenSidebar && <MobileSidebar lang={lang} menus={menus} />}
      </AnimatePresence>
    </header>
  )
}

export default Menu
