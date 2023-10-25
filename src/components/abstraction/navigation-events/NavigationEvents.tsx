'use client'

// React
import { useEffect } from 'react'

// Store
import useBoundStore from '@src/store/AppStore'

const NavigationEvents = () => {
  const setActiveMenu = useBoundStore((state) => state.setActiveMenu)

  // This effect is to capture the menu from the URL in the first time
  // Due some components are lazy loaded I have to use a setTimeout to scroll to the right page
  useEffect(() => {
    const menu = window.location.hash.slice(1) ?? 'home'

    let pageScrollTimer: ReturnType<typeof setTimeout> | undefined = undefined

    pageScrollTimer = setTimeout(() => {
      document.getElementById(menu)?.scrollIntoView({ behavior: 'smooth' })
    }, 850)

    setActiveMenu(menu)

    return () => {
      if (pageScrollTimer) clearTimeout(pageScrollTimer)
    }
  }, [setActiveMenu])

  return null
}

export default NavigationEvents
