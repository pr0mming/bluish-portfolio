'use client'

// Components
import PageInView from './PageInView'

// Extensions
import getCustomPages from './lazy-definition'

const pages = getCustomPages()

const PagesTree = () => {
  return (
    <div className="lg:mt-10">
      {pages.map((page) => (
        <PageInView key={page.id} id={page.id} Page={page.componentFn} />
      ))}
    </div>
  )
}

export default PagesTree
