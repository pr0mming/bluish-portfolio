// Components
import HomePage from '@src/components/pages/home/HomePage'
import MePage from '@src/components/pages/me/MePage'

export default function App() {
  return (
    <div className="grid gap-20 overflow-hidden" id="home">
      <section className="flex flex-col items-center mt-32">
        <HomePage />
      </section>
      <section
        id="me"
        className="flex flex-col items-center py-10 mx-6 md:px-20"
      >
        <MePage />
      </section>
    </div>
  )
}
