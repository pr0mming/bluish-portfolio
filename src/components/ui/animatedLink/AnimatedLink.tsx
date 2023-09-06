'use client'

// Next
import Link from 'next/link'

// Framer
import { motion } from 'framer-motion'

// Extensions
import { textMotion, slashMotion } from './AnimatedLink.animations'

export interface AnimatedLinkProps {
  className: string
  text: string
  href: string
  children: React.ReactNode
}

const AnimatedLink = (props: AnimatedLinkProps) => {
  return (
    <motion.div initial="rest" whileHover="hover" animate="rest">
      <Link href={props.href} className={props.className}>
        <motion.div
          className="absolute top-[25%] left-0 opacity-0 translate-y-[-50%]"
          variants={slashMotion}
        >
          {props.children}
        </motion.div>
        <motion.h1 variants={textMotion}>{props.text}</motion.h1>
      </Link>
    </motion.div>
  )
}

export default AnimatedLink
