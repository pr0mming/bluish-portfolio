'use client'

// Next
import dynamic from 'next/dynamic'

// React
import { useRef } from 'react'

// Framer
import { useInView } from 'framer-motion'

// Components
import HomePresentationPanel from './home-presentation-panel/HomePresentationPanel'

// Lazy
const HomeIntroPanel = dynamic(
  () => import('./home-intro-panel/HomeIntroPanel')
)

export interface IHomePageProps {}

const HomePage = () => {
  const homePanelRef = useRef(null)
  const isInView = useInView(homePanelRef, { once: true })

  return (
    <section
      className="flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-20"
      style={{ marginBottom: 340 }}
    >
      <HomePresentationPanel />

      <section ref={homePanelRef} className="w-auto lg:w-[550px] lg:h-[500px]">
        {isInView && <HomeIntroPanel />}
      </section>
    </section>
  )
}

export default HomePage
