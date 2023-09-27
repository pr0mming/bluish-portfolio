'use client'

// React
import { useEffect } from 'react'

// Components
import PageInView from './PageInView'

// Extensions
import getCustomPages from './lazy-definition'

// Store
import useAppStore from '@src/store/AppStore'

// Hooks
import usePageHash from '@src/hooks/usePageHash'

const pages = getCustomPages()

const PagesTree = () => {
  const setActiveMenu = useAppStore((state) => state.setActiveMenu)

  const { menu } = usePageHash()

  useEffect(() => {
    setActiveMenu(menu)
  }, [menu, setActiveMenu])

  return (
    <div className="lg:mt-10">
      {pages.map((page) => (
        <PageInView key={page.id} menuId={page.id} Page={page.componentFn} />
      ))}
    </div>
  )
}

export default PagesTree
