// Next
import Image from 'next/image'

// Modules
import getAllFloatingIcons from '@src/modules/ui/navbar/application/getAllFloatingIcons'

// Components
import FloatingIconsPanel from '@src/components/ui/floating-icons-panel/FloatingIconsPanel'

const [firstSetIcons, secondSetIcons] = getAllFloatingIcons()

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
                src="/colombia-flag.svg"
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
            className="top-10 -left-2 w-[40%] h-[30%] -z-10"
            icons={firstSetIcons}
          />
          <FloatingIconsPanel
            className="top-10 -right-16 w-[40%] h-[30%] -z-10"
            icons={secondSetIcons}
          />
          <Image
            src="/me/just-me-intro.png"
            alt="Just Me"
            width={373}
            height={581}
            priority={true}
          />
          <section className="absolute -left-0 md:-left-full w-[100vw] h-full -z-10">
            <div className="flex flex-col flex-wrap-reverse">
              <div className="h-20 w-[90%] -skew-x-6 -mb-2 bg-accent shadow-[15px_-15px_0_rgba(0,0,0,0)] shadow-accent/30 z-20"></div>
              <div className="h-20 w-[95%] -skew-x-6 -mb-2 bg-secondary shadow-[15px_-15px_0_rgba(0,0,0,0)] shadow-secondary/30 z-10"></div>
              <div className="h-20 w-full -skew-x-6 -mb-2 bg-white shadow-[15px_-15px_0_rgba(0,0,0,0)] shadow-white/30"></div>
            </div>
          </section>
        </div>
      </section>
    </section>
  )
}

export default HomePage
