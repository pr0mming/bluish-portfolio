import { createContext } from 'react'

export interface AppContextValue {
  isOpenSidebar: boolean
  setOpenSidebar: (value: boolean) => void
  activeMenu: string
  setActiveMenu: (value: string) => void
}

const AppContext = createContext<AppContextValue>({
  isOpenSidebar: false,
  setActiveMenu: () => {},
  activeMenu: '',
  setOpenSidebar: () => {}
})

export default AppContext
