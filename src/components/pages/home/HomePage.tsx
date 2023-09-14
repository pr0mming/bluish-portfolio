// Next
import Image from 'next/image'

// Components
import HomeIntroPanel from './home-intro-panel/HomeIntroPanel'
import MainButton from '@src/components/ui/main-button/MainButton'

export interface IHomePageProps {}

const HomePage = () => {
  return (
    <section
      className="flex flex-col md:flex-row flex-1 justify-center items-center gap-10 lg:gap-20"
      style={{ marginBottom: 216 }}
    >
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
          <MainButton type="secondary" ariaLabel="Check Experience">
            <span>Check experience</span>
          </MainButton>
        </div>
      </header>

      <HomeIntroPanel />
    </section>
  )
}

export default HomePage
