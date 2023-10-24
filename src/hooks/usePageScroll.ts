'use client'

// React
import { useEffect, useRef, useState } from 'react'

// Store
import useAppStore from '@src/store/AppStore'

export interface IUsePageScroll {
  menuId: string
  pxUnitOffset: number
}

const usePageScroll = ({ menuId, pxUnitOffset }: IUsePageScroll) => {
  const pageRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const activeMenu = useAppStore((state) => state.activeMenu)
  const setActiveMenu = useAppStore((state) => state.setActiveMenu)

  const handleScroll = () => {
    if (pageRef.current) {
      const offsetTop = pageRef.current.offsetTop - pxUnitOffset * 2
      const offsetBottom =
        pageRef.current.offsetTop -
        pxUnitOffset * 2 +
        (pageRef.current.clientHeight - pxUnitOffset * 4)

      const isInViewport =
        window.scrollY >= offsetTop && window.scrollY <= offsetBottom

      setIsScrolled(isInViewport)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  useEffect(() => {
    if (isScrolled && activeMenu != menuId) {
      setActiveMenu(menuId)

      history.replaceState(null, '', `#${menuId}`)
    }
  }, [isScrolled, activeMenu, menuId, setActiveMenu])

  return { pageRef }
}

export default usePageScroll
