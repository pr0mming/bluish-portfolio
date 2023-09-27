'use client'

// Next
import dynamic from 'next/dynamic'

// React
import { useRef } from 'react'

// Framer
import { useInView } from 'framer-motion'

// Components
import HomePresentationPanel from './home-presentation-panel/HomePresentationPanel'

// Hooks
import usePageScroll from '@src/hooks/usePageScroll'

// Lazy
const HomeIntroPanel = dynamic(
  () => import('./home-intro-panel/HomeIntroPanel')
)

export interface IHomePageProps {}

const HomePage = () => {
  const homeIntroPanelRef = useRef(null)
  const pageInView = useInView(homeIntroPanelRef, { once: true })

  const { pageRef } = usePageScroll({
    menuId: 'home',
    pxUnitOffset: 20
  })

  return (
    <section
      ref={pageRef}
      className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20"
      style={{ marginTop: 130, marginBottom: 250 }}
    >
      <HomePresentationPanel />

      <section
        ref={homeIntroPanelRef}
        className="w-auto lg:w-[550px] lg:h-[500px]"
      >
        {pageInView && <HomeIntroPanel />}
      </section>
    </section>
  )
}

export default HomePage
