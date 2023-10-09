'use client'

// React
import { useEffect, useState } from 'react'

const usePageHash = () => {
  const [menu, setMenu] = useState('')
  const [scrollFirstTime, setScrollFirstTime] = useState(true)

  useEffect(() => {
    setMenu(() => window.location.hash.slice(1))

    window.addEventListener('hashchange', hashChangeHandler)

    return () => {
      window.removeEventListener('hashchange', hashChangeHandler)
    }
  }, [])

  useEffect(() => {
    if (menu) {
      setTimeout(() => {
        const id = menu

        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 600)

      setScrollFirstTime(false)
    }
  }, [menu, scrollFirstTime])

  const hashChangeHandler = () => {
    setMenu(window.location.hash.slice(1))
  }

  return { menu }
}

export default usePageHash
