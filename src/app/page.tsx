import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Image from 'next/image'
config.autoAddCss = false

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hello my friend!</p>

      <a
        href="https://google.com"
        className="flex flex-1 justify-start items-center px-5 lg:px-10"
      >
        <Image
          src="/me/me-logo.svg"
          alt="App Logo"
          width={150}
          height={65}
          priority={true}
        />
      </a>
    </main>
  )
}
