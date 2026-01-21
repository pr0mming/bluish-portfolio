'use client'

// Framer
import * as m from "motion/react-m"

// Extensions
import { barsMotion } from './HomeBarsPanel.animations'

const HomeBarsPanel = () => {
  return (
    <section className="mx-16 md:mx-20 mt-20 lg:mt-5">
      <div className="relative">
        <m.section
          className="absolute -z-10"
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

export default HomeBarsPanel
