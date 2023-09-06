// Styles
import './globals.css'

// Next
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

// Components
import Navbar from '@src/components/layout/navbar/Navbar'

const inter = Montserrat({ subsets: ['latin'] })

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
      <body className={`${inter.className} custom-background-primary`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
