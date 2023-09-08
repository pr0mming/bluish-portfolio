'use client'

// Next
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Framer
import { motion } from 'framer-motion'

// Extensions
import {
  textMotion,
  slashMotion,
  selectedLinkMotion
} from './AnimatedNavLink.animations'

// Modules
import getAllMenus from '@src/modules/ui/navbar/application/getAllMenus'

const menuDefault = getAllMenus().find((menu) => menu.isDefault)?.path ?? ''

export interface IAnimatedNavLinkProps {
  className: string
  text: string
  path: string
  children: React.ReactNode
}

const AnimatedNavLink = (props: IAnimatedNavLinkProps) => {
  let pathname = usePathname()

  if (pathname === '/') {
    pathname = menuDefault
  }

  const isActive = props.path === pathname

  return (
    <motion.div
      className="relative"
      initial={isActive ? 'hover' : 'rest'}
      whileHover="hover"
      animate={isActive ? 'hover' : 'rest'}
    >
      <Link href={props.path} className={props.className}>
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

      {isActive && (
        <motion.div
          className="absolute w-full bottom-0 left-0 h-full bg-secondary bg-opacity-70 rounded-md border-2 border-secondary shadow-sm-accent z-10"
          transition={selectedLinkMotion}
        />
      )}
    </motion.div>
  )
}

export default AnimatedNavLink
