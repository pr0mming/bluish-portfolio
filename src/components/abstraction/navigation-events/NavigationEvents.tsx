'use client'

// React
import { useEffect, useMemo } from 'react'

// Modules
import getAllMenus from '@src/modules/features/ui/navbar/application/getAllMenus'

// Store
import useBoundStore from '@src/store/AppStore'
import getDefaultMenu from '@src/modules/features/ui/navbar/application/getDefaultMenu'

const NavigationEvents = () => {
  const pagesLoaded = useBoundStore((state) => state.pagesLoaded)
  const setActiveMenu = useBoundStore((state) => state.setActiveMenu)
  const activeMenuToScroll = useBoundStore((state) => state.activeMenuToScroll)
  const setActiveMenuToScroll = useBoundStore(
    (state) => state.setActiveMenuToScroll
  )

  const defaultMenu = useMemo(() => getDefaultMenu().path, [])
  const pagesOrder = useMemo(() => getAllMenus().map((menu) => menu.text), [])

  const isActivePageToLoad = useMemo(
    () => pagesOrder.indexOf(activeMenuToScroll) === pagesLoaded.length - 1,
    [pagesOrder, pagesLoaded, activeMenuToScroll]
  )

  // This effect is to capture the menu from the URL in the first time (if the user enters by the URL directly)
  // If there is a pending menu to scroll is loaded all the components before it and then is scrolled
  useEffect(() => {
    const menu = window.location.hash.slice(1)

    const isValidMenu = pagesOrder.indexOf(menu) > -1

    if (menu && isValidMenu) {
      setActiveMenuToScroll(menu)
    }

    setActiveMenu(isValidMenu ? menu : defaultMenu)
  }, [defaultMenu, pagesOrder, setActiveMenuToScroll, setActiveMenu])

  // Here is known if the page has loaded the lazy pages and is scrolled to the pending menu
  useEffect(() => {
    if (isActivePageToLoad) {
      document
        .getElementById(activeMenuToScroll)
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [activeMenuToScroll, isActivePageToLoad])

  return null
}

export default NavigationEvents
