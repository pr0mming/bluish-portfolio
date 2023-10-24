'use client'

// React
import { useEffect, useState } from 'react'

const usePageHash = () => {
  const [menu, setMenu] = useState('')

  const hashChangeHandler = () => {
    setMenu(window.location.hash.slice(1))
  }

  useEffect(() => {
    setMenu(window.location.hash.slice(1))

    window.addEventListener('hashchange', hashChangeHandler)

    return () => {
      window.removeEventListener('hashchange', hashChangeHandler)
    }
  }, [])

  useEffect(() => {
    let pageScrollTimer: ReturnType<typeof setTimeout> | undefined = undefined

    if (menu) {
      pageScrollTimer = setTimeout(() => {
        const id = menu

        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 900)
    }

    return () => {
      if (pageScrollTimer) clearTimeout(pageScrollTimer)
    }
  }, [menu])

  return { menu }
}

export default usePageHash
