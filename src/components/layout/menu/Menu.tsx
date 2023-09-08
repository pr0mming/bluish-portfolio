'use client'

// Next
import dynamic from 'next/dynamic'

// React
import { useState } from 'react'

// Modules
import MenuEntity from '@src/modules/ui/navbar/domain/entities/MenuEntity'
import getAllMenus from '@src/modules/ui/navbar/application/getAllMenus'

// Components
import Navbar from '@src/components/layout/menu/navbar/Navbar'
const MobileSidebar = dynamic(
  () => import('@src/components/layout/menu/mobile-sidebar/MobileSidebar')
)

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
      {isOpenSidebar && <MobileSidebar menus={menus} />}
    </header>
  )
}

export default Menu
