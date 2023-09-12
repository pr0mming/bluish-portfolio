'use client'

// Next
import Image from 'next/image'

// Framer
import { motion } from 'framer-motion'

// Modules
import getAllFloatingIcons from '@src/modules/pages/home/application/getAllFloatingIcons'

// Components
import FloatingIconsPanel from '@src/components/ui/floating-icons-panel/FloatingIconsPanel'

// Extensions
import { barsMotion, justMeMotion } from './HomePage.animations'

const [firstSetIcons, secondSetIcons] = getAllFloatingIcons()

export interface IHomePageProps {}

const HomePage = () => {
  return (
    <section className="flex flex-col md:flex-row flex-1 justify-center items-center gap-10 lg:gap-20">
      <header className="flex flex-col mx-5 md:mx-10 mt-5">
        <hgroup className="text-center md:text-start">
          <span className="text-white font-semibold text-4xl my-2">
            Hello, I&apos;m
          </span>
          <h1 className="text-white font-extrabold text-6xl md:text-7xl lg:text-8xl text-shadow-secondary-sm my-2">
            Julián Bernal
          </h1>
          <h2 className="inline-flex text-white font-semibold text-xl md:text-2xl lg:text-4xl items-center justify-center flex-wrap md:flex-nowrap my-2">
            Software Engineer
            <div className="relative w-[25px] h-[25px] md:w-[40px] md:h-[40px] ml-2">
              <Image
                src="/icons/colombia_rounded_icon.svg"
                alt="Colombia"
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto'
                }}
                width={40}
                height={40}
              />
            </div>
          </h2>
        </hgroup>
        <p className="text-white font-normal text-lg lg:text-2xl text-center md:text-start  mt-2">
          And welcome to my <strong>first</strong> portfolio website version :)
        </p>
      </header>
      <section className="flex mx-10 md:mx-20">
        <div className="relative">
          <FloatingIconsPanel
            className="top-0 -left-10 w-[50%] h-[30%] -z-10"
            icons={firstSetIcons}
          />
          <FloatingIconsPanel
            className="top-0 -right-1/3 w-[50%] h-[30%] -z-10"
            icons={secondSetIcons}
          />
          <motion.div
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
              priority={true}
            />
          </motion.div>
          <motion.section
            className="absolute left-[100vw] md:left-[80vw] w-[100vw] h-full -z-10"
            initial="initial"
            animate="animate"
            variants={barsMotion}
          >
            <div className="flex flex-col flex-wrap-reverse">
              <div className="h-20 w-[90%] -skew-x-6 -mb-2 bg-accent shadow-[15px_-15px_0_rgba(0,0,0,0)] shadow-accent/30 z-20"></div>
              <div className="h-20 w-[95%] -skew-x-6 -mb-2 bg-secondary shadow-[15px_-15px_0_rgba(0,0,0,0)] shadow-secondary/30 z-10"></div>
              <div className="h-20 w-full -skew-x-6 -mb-2 bg-white shadow-[15px_-15px_0_rgba(0,0,0,0)] shadow-white/30"></div>
            </div>
          </motion.section>
        </div>
      </section>
    </section>
  )
}

export default HomePage
