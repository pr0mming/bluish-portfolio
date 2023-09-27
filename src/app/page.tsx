// Components
import Menu from '@src/components/layout/menu/Menu'
import HomePage from '@src/components/pages/home/HomePage'
import PagesTree from '@src/components/pages/pages-tree/PagesTree'
import Footer from '@src/components/layout/footer/Footer'

export default function App() {
  return (
    <div className="grid gap-10 overflow-hidden" id="home">
      <Menu />

      <HomePage />

      <PagesTree />

      <Footer />
    </div>
  )
}
