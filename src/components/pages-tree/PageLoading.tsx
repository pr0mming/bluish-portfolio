// React
import { useEffect } from 'react'

// Store
import useBoundStore from '@src/store/AppStore'

export interface ILoadingProps {
  menuId: string
}

const PageLoading = ({ menuId }: ILoadingProps) => {
  const addPageLoaded = useBoundStore((state) => state.addPageLoaded)
  const removePageLoaded = useBoundStore((state) => state.removePageLoaded)

  // Each Lazy Page uses this component to verify if the page has finished the loading
  useEffect(() => {
    removePageLoaded(menuId)

    return () => {
      addPageLoaded(menuId)
    }
  }, [menuId, removePageLoaded, addPageLoaded])

  return null
}

export default PageLoading
