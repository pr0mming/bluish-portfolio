// Next
import Image from 'next/image'

// Framer
import { m } from 'framer-motion'

// Components
import FloatingIconsPanel from '@src/components/ui/floating-icons-panel/FloatingIconsPanel'

// Extensions
import { barsMotion, justMeMotion } from './HomeIntroPanel.animations'

// Modules
import getAllFloatingIcons from '@src/modules/features/pages/home/application/getAllFloatingIcons'

const HomeIntroPanel = () => {
  const [firstSetIcons, secondSetIcons] = getAllFloatingIcons()

  return (
    <section className="flex mx-16 md:mx-20">
      <div className="relative">
        <FloatingIconsPanel
          className="top-0 -left-10 w-3/6 h-3/6 -z-10"
          icons={firstSetIcons}
        />
        <FloatingIconsPanel
          className="top-0 -right-1/3 w-3/6 h-3/6 -z-10"
          icons={secondSetIcons}
        />
        <m.div
          className="relative"
          initial="initial"
          animate="animate"
          variants={justMeMotion}
          style={{ left: '100vw' }}
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
          className="absolute left-[100vw] md:left-[80vw] h-auto -z-10"
          initial="initial"
          animate="animate"
          variants={barsMotion}
          style={{ width: '100vw' }}
        >
          <div className="flex flex-col flex-wrap-reverse">
            <div
              className="h-20 -skew-x-6 -mb-2 bg-accent custom-up-right-md shadow-accent/30 z-20"
              style={{ width: '90%' }}
            ></div>
            <div
              className="h-20 -skew-x-6 -mb-2 bg-secondary custom-up-right-md shadow-secondary/30 z-10"
              style={{ width: '95%' }}
            ></div>
            <div className="h-20 w-full -skew-x-6 -mb-2 bg-white custom-up-right-md shadow-white/30"></div>
          </div>
        </m.section>
      </div>
    </section>
  )
}

export default HomeIntroPanel
