// Styles
import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Next
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

// Font Awesome
import { config } from '@fortawesome/fontawesome-svg-core'

// Components
import Menu from '@src/components/layout/menu/Menu'

config.autoAddCss = false

const font = Montserrat({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Julián Bernal | @pr0mming',
  description: 'Welcome to the first version of my portfolio'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </head>
      <body
        className={`${font.className} custom-background-primary h-full min-h-screen`}
      >
        <Menu />
        {children}
      </body>
    </html>
  )
}
