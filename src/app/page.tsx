// Font Awesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import HomePage from '@src/components/pages/home/HomePage'

config.autoAddCss = false

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen py-28 overflow-hidden">
      <HomePage />
    </main>
  )
}
