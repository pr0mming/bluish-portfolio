'use client'

// Next
import dynamic from 'next/dynamic'

// Components
import HomePresentationPanel from './home-presentation-panel/HomePresentationPanel'

// Hooks
import usePageScroll from '@src/hooks/usePageScroll'

import { useRef } from 'react'
import { useInView } from 'framer-motion'

// Lazy
const HomeBarsPanel = dynamic(() => import('./home-intro-panel/HomeBarsPanel'))
const HomeIconsPanel = dynamic(
  () => import('@src/components/ui/home-icons-panel/HomeIconsPanel')
)

export interface IHomePageProps {
  lang: string
}

const HomePage = ({ lang }: IHomePageProps) => {
  const homeRef = useRef(null)
  const isHomeInView = useInView(homeRef, { once: true })

  const { pageRef } = usePageScroll({
    menuId: 'home',
    pxUnitOffset: 20
  })

  return (
    <div ref={pageRef}>
      <section
        ref={homeRef}
        className="flex flex-col justify-center items-center gap-10"
        style={{ marginTop: 130 }}
      >
        <HomePresentationPanel lang={lang} />

        <section className="w-auto h-auto lg:h-[150px]">
          {isHomeInView && <HomeIconsPanel />}
        </section>
      </section>

      <section style={{ height: 216 }}>
        {isHomeInView && <HomeBarsPanel />}
      </section>
    </div>
  )
}

export default HomePage
