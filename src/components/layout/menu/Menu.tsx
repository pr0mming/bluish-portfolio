'use client'

// Next
import dynamic from 'next/dynamic'

// React
import { useEffect } from 'react'

// Modules
import MenuEntity from '@src/modules/features/ui/navbar/domain/entities/MenuEntity'
import getAllMenus from '@src/modules/features/ui/navbar/application/getAllMenus'

// Components
import Navbar from '@src/components/layout/menu/navbar/Navbar'
const MobileSidebar = dynamic(
  () => import('@src/components/layout/menu/mobile-sidebar/MobileSidebar')
)

// Hooks
import useAppContext from '@src/hooks/useAppContext'

const menus: MenuEntity[] = getAllMenus()

export interface IMenuProps {}

const Menu = () => {
  const { isOpenSidebar, activeMenu, changeActiveMenu } = useAppContext()

  useEffect(() => {
    if (!activeMenu) {
      changeActiveMenu(window.location.hash)
    }
  }, [activeMenu, changeActiveMenu])

  return (
    <header className="fixed w-full z-10">
      <Navbar menus={menus} />
      {isOpenSidebar && <MobileSidebar menus={menus} />}
    </header>
  )
}

export default Menu
