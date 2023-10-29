// React
import { useEffect, useMemo, useState } from 'react'

// Modules
import getAllMenus from '@src/modules/features/ui/navbar/application/getAllMenus'

// Store
import useBoundStore from '@src/store/AppStore'

export interface IUsePageLoader {
  menuOrder: number
}

const usePageLoader = ({ menuOrder }: IUsePageLoader) => {
  const activeMenuToScroll = useBoundStore((state) => state.activeMenuToScroll)

  const [loadLazyPage, setLoadLazyPage] = useState(false)

  const pagesOrder = useMemo(() => getAllMenus().map((menu) => menu.text), [])
  const activeMenuOrder = useMemo(
    () => pagesOrder.indexOf(activeMenuToScroll),
    [pagesOrder, activeMenuToScroll]
  )

  // Each Lazy Page verifies if should be loaded or not
  // If the page to load is visually before the active page is lazy loaded
  useEffect(() => {
    if (!loadLazyPage && menuOrder <= activeMenuOrder) {
      setLoadLazyPage(true)
    }
  }, [loadLazyPage, menuOrder, activeMenuOrder, setLoadLazyPage])

  return { loadLazyPage }
}

export default usePageLoader
