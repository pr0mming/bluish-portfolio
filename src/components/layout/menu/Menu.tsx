'use client'

// React
import { useState } from 'react'

// Modules
import MenuEntity from '@src/modules/ui/navbar/domain/entities/MenuEntity'
import getAllMenus from '@src/modules/ui/navbar/application/getAllMenus'

// Components
import MobileSidebar from '@src/components/layout/menu/mobile-sidebar/MobileSidebar'
import Navbar from '@src/components/layout/menu/navbar/Navbar'

export interface IMenuProps {}

const Menu = () => {
  const menus: MenuEntity[] = getAllMenus()
  const [isOpenSidebar, setOpenSidebar] = useState(false)

  return (
    <header className="fixed w-full">
      <Navbar
        menus={menus}
        isOpenSidebar={isOpenSidebar}
        setOpenSidebar={setOpenSidebar}
      />
      <MobileSidebar menus={menus} isOpenSidebar={isOpenSidebar} />
    </header>
  )
}

export default Menu
