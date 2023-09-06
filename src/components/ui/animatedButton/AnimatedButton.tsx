'use client'

// Framer
import { motion } from 'framer-motion'

// Extensions
import { textMotion, slashMotion } from './AnimatedButton.animations'

export interface AnimatedButtonProps {
  className: string
  text: string
  children: React.ReactNode
}

const AnimatedButton = (props: AnimatedButtonProps) => {
  return (
    <motion.button
      className={props.className}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div
        className="absolute top-[25%] left-0 opacity-0 translate-y-[-50%]"
        variants={slashMotion}
      >
        {props.children}
      </motion.div>
      <motion.h1 variants={textMotion}>{props.text}</motion.h1>
    </motion.button>
  )
}

export default AnimatedButton
