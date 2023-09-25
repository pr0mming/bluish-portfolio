// Components
import HomePage from '@src/components/pages/home/HomePage'
import PagesTree from '@src/components/pages/pages-tree/PagesTree'
import Footer from '@src/components/layout/footer/Footer'

export default function App() {
  return (
    <div className="grid gap-10 overflow-hidden" id="home">
      <section className="flex flex-col items-center mt-32">
        <HomePage />
      </section>

      <PagesTree />

      <Footer />
    </div>
  )
}
