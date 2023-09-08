// Next
import Image from 'next/image'

const HomePage = () => {
  return (
    <section className="flex flex-col md:flex-row flex-1 items-center gap-20 py-24">
      <section className="flex flex-col flex-1 gap-4 mx-5">
        <h3 className="text-white font-semibold text-4xl">Hello, I&apos;m</h3>
        <h1 className="text-white font-extrabold text-8xl text-shadow-sm-secondary">
          Julián Bernal
        </h1>
        <h5 className="inline-flex text-white font-semibold text-5xl flex-nowrap">
          Software Engineer
          <Image
            className="ml-4"
            src="/colombia-flag.svg"
            alt="Colombia"
            width={50}
            height={50}
          />
        </h5>
        <p className="text-white font-normal text-2xl">
          And welcome to my <strong>first</strong> portfolio website version :)
        </p>
      </section>
      <section className="mx-5">
        <Image
          src="/me/just-me-intro.png"
          alt="Just Me"
          width={373}
          height={581}
          priority={true}
        />
      </section>
    </section>
  )
}

export default HomePage
