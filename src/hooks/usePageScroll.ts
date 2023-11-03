'use client'

// React
import { useCallback, useEffect, useRef, useState } from 'react'

// Store
import useBoundStore from '@src/store/AppStore'

export interface IUsePageScroll {
  menuId: string
  pxUnitOffset: number
}

/**
 * This custom hook is to check if the page (using the name of the page) is in the viewport
 * this is an alternative for 'useInView' (from Framer Motion),
 * but the main difference is that you can use a custom offset pixel value to make the calculation
 * @param {string} menuId is the name of the page
 * @param {number} pxUnitOffset is the pixel offset to use in the top and the bottom of the screen
 * @returns a React Ref to hook with the page
 */
const usePageScroll = ({ menuId, pxUnitOffset }: IUsePageScroll) => {
  const pageRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  // If the scroll is in the viewport I need it to show the new active menu to the user
  const activeMenu = useBoundStore((state) => state.activeMenu)
  const setActiveMenu = useBoundStore((state) => state.setActiveMenu)

  const handleScroll = useCallback(() => {
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
  }, [pxUnitOffset, setIsScrolled])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    if (isScrolled && activeMenu != menuId) {
      setActiveMenu(menuId)

      // This changes the URL (it avoids add a new history record in the user's browser
      history.replaceState(null, '', `#${menuId}`)
    }
  }, [isScrolled, activeMenu, menuId, setActiveMenu])

  return { pageRef }
}

export default usePageScroll
