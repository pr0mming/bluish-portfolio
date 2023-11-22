export interface IAppSlice {
  isOpenSidebar: boolean // To control the sidebar in the Mobile view
  activeMenu: string // To control the active menu is the user on
  setOpenSidebar: (value: boolean) => void
  setActiveMenu: (value: string) => void
}
