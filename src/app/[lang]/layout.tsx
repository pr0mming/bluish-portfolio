// Styles
import '../../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Next
import { Montserrat } from 'next/font/google'

// Font Awesome
import { config } from '@fortawesome/fontawesome-svg-core'

// Components
import FramerWrapper from '@src/components/framer-motion/framer-wrapper'
import MenuSSR from '@src/components/layout/menu/menu-ssr/MenuSSR'
import FooterSSR from '@src/components/layout/footer/footer-ssr/FooterSSR'

// i18n
import { languages } from '../i18n/settings'
import { dir } from 'i18next'

config.autoAddCss = false

const font = Montserrat({ subsets: ['latin'], display: 'swap' })

// Generate SSG routes
export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

export default async function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: {
    lang: string
  }
}) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <body
        className={`${font.className} custom-background-primary h-full min-h-screen`}
      >
        <FramerWrapper>
          <MenuSSR lang={lang} />
          {children}
          <FooterSSR lang={lang} />
        </FramerWrapper>
      </body>
    </html>
  )
}
