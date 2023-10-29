export interface IAppSlice {
  isOpenSidebar: boolean // To control the sidebar in the Mobile view
  activeMenu: string // To control the active menu is the user on
  pagesLoaded: string[] // To save the lazy pages full rendered
  activeMenuToScroll: string // To save the menu that has been requested but hasn't loaded
  setOpenSidebar: (value: boolean) => void
  setActiveMenu: (value: string) => void
  addPageLoaded: (value: string) => void
  removePageLoaded: (value: string) => void
  setActiveMenuToScroll: (value: string) => void
}
