// Next
import Image from 'next/image'

// Components
import SocialMediaBar from '@src/components/ui/social-media-bar/SocialMediaBar'

const HomePresentationPanel = () => {
  return (
    <header className="flex flex-col mx-5 md:ms-20 mt-5">
      <hgroup className="text-center lg:text-start">
        <span className="text-white font-semibold text-3xl my-2">
          Hello, I&apos;m
        </span>
        <h1 className="text-white font-extrabold text-6xl md:text-7xl lg:text-8xl text-shadow-secondary-sm my-2">
          Julián Bernal
        </h1>
        <h2 className="inline-flex items-center justify-center flex-wrap md:flex-nowrap text-white font-semibold text-xl md:text-2xl lg:text-4xl my-2">
          Software Engineer
          <div className="relative flex items-center md:w-10 md:h-10 ml-2">
            <Image
              src="/icons/colombia-rounded-icon.svg"
              alt="Colombia"
              width={25}
              height={25}
              priority
            />
          </div>
        </h2>
      </hgroup>
      <p className="text-white font-normal text-lg lg:text-2xl text-center md:text-start  mt-2">
        And welcome to my <strong>first</strong> portfolio website version :)
      </p>

      <div className="mt-10">
        <SocialMediaBar type="default" />
      </div>
    </header>
  )
}

export default HomePresentationPanel
