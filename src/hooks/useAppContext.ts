// React
import { useContext } from 'react'

// Extensions
import AppContext from '@src/contexts/AppContext'
import getAllMenus from '@src/modules/features/ui/navbar/application/getAllMenus'

const useAppContext = () => {
  const { isOpenSidebar, setOpenSidebar, activeMenu, setActiveMenu } =
    useContext(AppContext)

  const changeActiveMenu = (value: string) => {
    if (value === '') {
      value = getAllMenus().find((menu) => menu.isDefault)?.path ?? ''
    }

    setActiveMenu(value)
  }

  const changeOpenSidebar = (value: boolean) => setOpenSidebar(value)

  return { isOpenSidebar, changeOpenSidebar, activeMenu, changeActiveMenu }
}

export default useAppContext
