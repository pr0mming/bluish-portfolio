'use client'

// Next
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// React
import { useRef } from 'react'

// Framer
import { useInView } from 'framer-motion'

// Components
import MainButton from '@src/components/ui/main-button/MainButton'

// Lazy (Load the JS animation later)
const HomeIntroPanel = dynamic(
  () => import('./home-intro-panel/HomeIntroPanel')
)

export interface IHomePageProps {}

const HomePage = () => {
  const router = useRouter()
  const homePanelRef = useRef(null)
  const isInView = useInView(homePanelRef, { once: true })

  const handleExperienceClick = () => {
    router.push('#experience')
  }

  return (
    <section
      className="flex flex-col md:flex-row flex-1 justify-center items-center gap-10 lg:gap-20"
      style={{ marginBottom: 280 }}
    >
      <header className="flex flex-col mx-2 md:ms-20 lg:ms-10 mt-5">
        <hgroup className="text-center md:text-start">
          <span className="text-white font-semibold text-3xl my-2">
            Hello, I&apos;m
          </span>
          <h1 className="text-white font-extrabold text-6xl md:text-7xl lg:text-8xl text-shadow-secondary-sm my-2">
            Julián Bernal
          </h1>
          <h2 className="inline-flex text-white font-semibold text-xl md:text-2xl lg:text-4xl items-center justify-center flex-wrap md:flex-nowrap my-2">
            Software Engineer
            <div
              className="relative md:w-10 md:h-10 ml-2"
              style={{ width: '25px', height: '25px' }}
            >
              <Image
                src="/icons/colombia-rounded-icon.svg"
                alt="Colombia"
                sizes="40px"
                fill
                style={{
                  objectFit: 'contain'
                }}
                priority
              />
            </div>
          </h2>
        </hgroup>
        <p className="text-white font-normal text-lg lg:text-2xl text-center md:text-start  mt-2">
          And welcome to my <strong>first</strong> portfolio website version :)
        </p>

        <div className="mt-10 md:mt-20 flex justify-center md:block">
          <MainButton
            type="secondary"
            ariaLabel="Check Experience"
            handleClick={() => handleExperienceClick()}
          >
            <span>Check experience</span>
          </MainButton>
        </div>
      </header>

      <section ref={homePanelRef} className="w-auto lg:w-[500px] lg:h-[500px]">
        {isInView && <HomeIntroPanel />}
      </section>
    </section>
  )
}

export default HomePage
