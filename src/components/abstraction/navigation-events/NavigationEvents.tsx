'use client'

// React
import { useEffect, useMemo } from 'react'

// Modules
import getAllMenus from '@src/modules/features/ui/navbar/application/getAllMenus'
import getDefaultMenu from '@src/modules/features/ui/navbar/application/getDefaultMenu'

// Store
import useBoundStore from '@src/store/AppStore'

const NavigationEvents = () => {
  const setActiveMenu = useBoundStore((state) => state.setActiveMenu)

  const defaultMenu = useMemo(() => getDefaultMenu().path, [])
  const pagesOrder = useMemo(() => getAllMenus().map((menu) => menu.text), [])

  // This effect is to capture the menu from the URL in the first time (if the user enters by the URL directly)
  // And if there is a pending menu to scroll it'll be done, the timeout is to give time to the lazy components to load
  useEffect(() => {
    const menu = window.location.hash.slice(1)

    const isValidMenu = pagesOrder.indexOf(menu) > -1

    if (menu && isValidMenu) {
      const pageScrollTimer = setTimeout(
        () =>
          document.getElementById(menu)?.scrollIntoView({ behavior: 'smooth' }),
        650
      )

      return () => {
        if (pageScrollTimer) clearTimeout(pageScrollTimer)
      }
    }

    setActiveMenu(isValidMenu ? menu : defaultMenu)
  }, [defaultMenu, pagesOrder, setActiveMenu])

  return null
}

export default NavigationEvents
