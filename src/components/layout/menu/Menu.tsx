'use client'

// Next
import dynamic from 'next/dynamic'

// React
import { useEffect } from 'react'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faSmileBeam,
  faBriefcase,
  faAddressBook,
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
import useStore from '@src/store/AppStore'
import useHash from '@src/hooks/useHash'

// Load icons for normal/responsive menu
library.add(faHome, faSmileBeam, faBriefcase, faAddressBook, faGlobe)

export interface IMenuProps {}

const Menu = () => {
  const menus: MenuEntity[] = getAllMenus()
  const setActiveMenu = useStore((state) => state.setActiveMenu)

  const { hash } = useHash()

  useEffect(() => {
    setActiveMenu(hash)
  }, [hash])

  return (
    <header className="fixed w-full z-10">
      <Navbar menus={menus} />
      <MobileSidebar menus={menus} />
    </header>
  )
}

export default Menu
