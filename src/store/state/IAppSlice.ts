export interface IAppSlice {
  isOpenSidebar: boolean
  activeMenu: string
  setOpenSidebar: (value: boolean) => void
  setActiveMenu: (value: string) => void
}
