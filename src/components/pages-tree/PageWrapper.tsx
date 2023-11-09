// React
import { ComponentType, useMemo } from 'react'

// Framer
import { useInView } from 'framer-motion'

// Hooks
import usePageScroll from '@src/hooks/usePageScroll'
import usePageLoader from '@src/hooks/usePageLoader'

// Modules
import { MenuEnum } from '@src/modules/features/ui/navbar/domain/enums/MenuEnum'

export interface IPageInViewProps {
  lang: string
  menuId: string
  menuOrder: number
  PageFn: ComponentType<{ lang: string }>
}

const PageWrapper = ({ lang, menuId, menuOrder, PageFn }: IPageInViewProps) => {
  const { pageRef } = usePageScroll({ menuId, pxUnitOffset: 56 })
  const { loadLazyPage } = usePageLoader({ menuOrder })

  const pageInView = useInView(pageRef, { once: true })
  const loadPage = useMemo(
    () => menuOrder === MenuEnum.ME || pageInView || loadLazyPage,
    [menuOrder, pageInView, loadLazyPage]
  )

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
        {loadPage && <PageFn lang={lang} />}
      </div>
    </section>
  )
}

export default PageWrapper
