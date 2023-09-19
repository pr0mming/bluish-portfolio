'use client'

// React
import { ComponentType, useRef } from 'react'

// Framer
import { useInView } from 'framer-motion'

export interface IPageInViewProps {
  id: string
  Page: ComponentType
}

const PageInView = ({ id, Page }: IPageInViewProps) => {
  const pageRef = useRef<HTMLDivElement>(null)
  const pageInView = useInView(pageRef, { once: true })

  return (
    <section
      id={id}
      className="py-10 mx-6 md:px-20"
      style={{
        minHeight: 600
      }}
      onScroll={() => {
        console.log('sx')
      }}
    >
      <div
        className={`
          flex
          flex-col
          items-center
          transition duration-700 delay-300 ease-in-out
          ${pageInView ? 'opacity-100' : 'opacity-0'}
          ${pageInView ? 'transform-none' : 'transform -translate-x-[200px]'}
        `}
        ref={pageRef}
      >
        {pageInView && <Page />}
      </div>
    </section>
  )
}

export default PageInView
