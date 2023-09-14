'use client'

// React
import { useMemo, useState } from 'react'

// Contexts
import AppContext from '@src/contexts/AppContext'

export interface IAppContextProviderProps {
  children: React.ReactNode
}

const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [isOpenSidebar, setOpenSidebar] = useState(false)
  const [activeMenu, setActiveMenu] = useState('')

  const contextValue = useMemo(
    () => ({
      isOpenSidebar,
      setOpenSidebar,
      activeMenu,
      setActiveMenu
    }),
    [isOpenSidebar, setOpenSidebar, activeMenu, setActiveMenu]
  )

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

export default AppContextProvider
