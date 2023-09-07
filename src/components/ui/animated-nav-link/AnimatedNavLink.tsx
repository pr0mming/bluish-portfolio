'use client'

// Next
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// React
import { useState } from 'react'

// Framer
import { motion } from 'framer-motion'

// Extensions
import { textMotion, slashMotion } from './AnimatedNavLink.animations'

export interface IAnimatedNavLinkProps {
  className: string
  text: string
  path: string
  children: React.ReactNode
}

const AnimatedNavLink = (props: IAnimatedNavLinkProps) => {
  const pathname = usePathname()

  const [hoveredPath, setHoveredPath] = useState(pathname)

  return (
    <motion.div
      className="relative"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <Link
        href={props.path}
        className={props.className}
        onMouseOver={() => setHoveredPath(props.path)}
        onMouseLeave={() => setHoveredPath(pathname)}
      >
        <motion.div
          className="absolute left-0 translate-x-1/2 translate-y-1/2 opacity-0"
          variants={slashMotion}
        >
          {props.children}
        </motion.div>
        <motion.h1 className="tracking-widest mr-7" variants={textMotion}>
          {props.text}
        </motion.h1>
      </Link>

      {props.path === hoveredPath && (
        <motion.div
          className="absolute w-full bottom-0 left-0 h-full bg-secondary bg-opacity-70 rounded-md border-2 border-secondary shadow-sm-accent z-10"
          layoutId="navbar"
          aria-hidden="true"
          transition={{
            type: 'spring',
            bounce: 0.25,
            stiffness: 130,
            damping: 9,
            duration: 0.3
          }}
        />
      )}
    </motion.div>
  )
}

export default AnimatedNavLink
