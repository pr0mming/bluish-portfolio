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

  const { hash } = usePageHash()

  useEffect(() => {
    setActiveMenu(hash)
  }, [hash, setActiveMenu])

  return (
    <div className="lg:mt-10">
      {pages.map((page) => (
        <PageInView key={page.id} id={page.id} Page={page.componentFn} />
      ))}
    </div>
  )
}

export default PagesTree
