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
  // And if there is a pending menu to scroll it'll be done
  useEffect(() => {
    const menu = window.location.hash.slice(1)

    const isValidMenu = pagesOrder.indexOf(menu) > -1

    if (menu && isValidMenu) {
      // Due the pages is lazy loaded (in the SSR too) it takes a time to render
      // This timeout is a workaround to scroll to the loaded page (from the URL)
      const pageScrollTimer = setTimeout(
        () =>
          document
            .getElementById(menu)
            ?.scrollIntoView({ block: 'start', behavior: 'smooth' }),
        850
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
