// React
import { ComponentType } from 'react'

// Framer
import { useInView } from 'framer-motion'

// Hooks
import usePageScroll from '@src/hooks/usePageScroll'

export interface IPageInViewProps {
  lang: string
  menuId: string
  PageFn: ComponentType<{ lang: string }>
}

const PageWrapper = ({ lang, menuId, PageFn }: IPageInViewProps) => {
  const { pageRef } = usePageScroll({ menuId, pxUnitOffset: 56 })
  const pageInView = useInView(pageRef, { once: true })

  return (
    <section
      id={menuId}
      className="py-10 mx-6 md:px-20"
      style={{ minHeight: 950 }}
    >
      <div
        className={`
          flex
          flex-col
          items-center
          transition duration-700 delay-300 ease-in-out
          ${pageInView ? 'opacity-100' : 'opacity-0'}
          ${pageInView ? 'transform-none' : 'transform -translate-x-52'}
        `}
        ref={pageRef}
      >
        <PageFn lang={lang} />
      </div>
    </section>
  )
}

export default PageWrapper
