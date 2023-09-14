// Font Awesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Components
import HomePage from '@src/components/pages/home/HomePage'
import MePage from '@src/components/pages/me/MePage'

config.autoAddCss = false

export default function Home() {
  return (
    <div className="grid gap-20 overflow-hidden" id="home">
      <section className="flex flex-col items-center mt-32">
        <HomePage />
      </section>
      <section id="me" className="flex flex-col items-center py-10">
        <MePage />
      </section>
    </div>
  )
}
