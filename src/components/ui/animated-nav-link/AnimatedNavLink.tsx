'use client'

// Next
import Link from 'next/link'

// Framer
import { m, LazyMotion, domAnimation } from 'framer-motion'

// Extensions
import {
  textMotion,
  slashMotion,
  selectedLinkMotion
} from './AnimatedNavLink.animations'

// Modules
import useAppContext from '@src/hooks/useAppContext'

export interface IAnimatedNavLinkProps {
  className: string
  text: string
  path: string
  children: React.ReactNode
}

const AnimatedNavLink = (props: IAnimatedNavLinkProps) => {
  const { activeMenu, changeActiveMenu } = useAppContext()
  const isActive = props.path === activeMenu

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="relative"
        initial={isActive ? 'hover' : 'rest'}
        whileHover="hover"
        animate={isActive ? 'hover' : 'rest'}
      >
        <Link
          href={props.path}
          className={props.className}
          onClick={() => {
            changeActiveMenu(props.path)
          }}
        >
          <m.div
            className="absolute left-0 translate-x-1/2 translate-y-1/2 opacity-0"
            variants={slashMotion}
          >
            {props.children}
          </m.div>
          <m.h1 className="tracking-widest mr-7" variants={textMotion}>
            {props.text}
          </m.h1>
        </Link>

        {isActive && (
          <m.div
            className="absolute w-full bottom-0 left-0 h-full bg-secondary bg-opacity-70 rounded-md border-2 border-secondary shadow-custom-xs shadow-accent z-10"
            transition={selectedLinkMotion}
          />
        )}
      </m.div>
    </LazyMotion>
  )
}

export default AnimatedNavLink
