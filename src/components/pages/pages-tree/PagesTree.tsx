'use client'

// Next
import dynamic from 'next/dynamic'

// React
import { useRef } from 'react'

// Framer
import { useInView } from 'framer-motion'

// Lazy
const MePage = dynamic(() => import('@src/components/pages/me/MePage'))

const PagesTree = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      id="me"
      ref={ref}
      className={`
        flex
        flex-col
        items-center
        py-10
        mx-6 md:px-20
        transition duration-700 delay-500 ease-in-out
        ${isInView ? 'opacity-100' : 'opacity-0'}
        ${isInView ? 'transform-none' : 'transform -translate-x-[200px]'}
      `}
      style={{
        minHeight: 800
      }}
    >
      {isInView && <MePage />}
    </section>
  )
}

export default PagesTree
