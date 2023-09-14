'use client'

// Next
import Image from 'next/image'

// Framer
import { m, LazyMotion, domAnimation } from 'framer-motion'

// Components
import FloatingIconsPanel from '@src/components/ui/floating-icons-panel/FloatingIconsPanel'

// Extensions
import { barsMotion, justMeMotion } from './HomeIntroPanel.animations'

// Modules
import getAllFloatingIcons from '@src/modules/features/pages/home/application/getAllFloatingIcons'

const [firstSetIcons, secondSetIcons] = getAllFloatingIcons()

const HomeIntroPanel = () => {
  return (
    <section className="flex mx-16 md:mx-20">
      <div className="relative">
        <FloatingIconsPanel
          className="top-0 -left-10 w-[50%] h-[30%] -z-10"
          icons={firstSetIcons}
        />
        <FloatingIconsPanel
          className="top-0 -right-1/3 w-[50%] h-[30%] -z-10"
          icons={secondSetIcons}
        />
        <LazyMotion features={domAnimation}>
          <m.div
            className="relative left-[100vw]"
            initial="initial"
            animate="animate"
            variants={justMeMotion}
          >
            <Image
              src="/me/just-me-intro.png"
              alt="Just Me"
              width={373}
              height={581}
              quality={70}
              priority
            />
          </m.div>
          <m.section
            className="absolute left-[100vw] md:left-[80vw] w-[100vw] h-auto -z-10"
            initial="initial"
            animate="animate"
            variants={barsMotion}
          >
            <div className="flex flex-col flex-wrap-reverse">
              <div className="h-20 w-[90%] -skew-x-6 -mb-2 bg-accent shadow-[15px_-15px_0_rgba(0,0,0,0)] shadow-accent/30 z-20"></div>
              <div className="h-20 w-[95%] -skew-x-6 -mb-2 bg-secondary shadow-[15px_-15px_0_rgba(0,0,0,0)] shadow-secondary/30 z-10"></div>
              <div className="h-20 w-full -skew-x-6 -mb-2 bg-white shadow-[15px_-15px_0_rgba(0,0,0,0)] shadow-white/30"></div>
            </div>
          </m.section>
        </LazyMotion>
      </div>
    </section>
  )
}

export default HomeIntroPanel
