'use client'

// React
import { useEffect } from 'react'

// Store
import useAppStore from '@src/store/AppStore'

const NavigationEvents = () => {
  const setActiveMenu = useAppStore((state) => state.setActiveMenu)

  useEffect(() => {
    const menu = window.location.hash.slice(1) ?? 'home'

    let pageScrollTimer: ReturnType<typeof setTimeout> | undefined = undefined

    if (menu) {
      pageScrollTimer = setTimeout(() => {
        document.getElementById(menu)?.scrollIntoView({ behavior: 'smooth' })
      }, 850)
    }

    setActiveMenu(menu)

    return () => {
      if (pageScrollTimer) clearTimeout(pageScrollTimer)
    }
  }, [setActiveMenu])

  return null
}

export default NavigationEvents
