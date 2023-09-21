'use client'

// Components
import PageInView from './PageInView'

// Extensions
import getCustomPages from './lazy-definition'

const pages = getCustomPages()

const PagesTree = () => {
  return (
    <>
      {pages.map((page) => (
        <PageInView key={page.id} id={page.id} Page={page.componentFn} />
      ))}
    </>
  )
}

export default PagesTree
