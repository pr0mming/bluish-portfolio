'use client'

// Next
import Link from 'next/link'

// React
import { useMemo } from 'react'

// Framer
import { m } from 'framer-motion'

// Modules
import { MenuTypeEnum } from '@src/modules/features/ui/navbar/domain/enums/MenuTypeEnum'

// Extensions
import {
  textMotion,
  slashMotion,
  selectedLinkMotion
} from './NavLink.animations'

// Store
import useAppStore from '@src/store/AppStore'

export interface INavLinkProps {
  className: string
  text: string
  path: string
  type: MenuTypeEnum
  children: React.ReactNode
}

const NavLink = ({ className, text, path, type, children }: INavLinkProps) => {
  const activeMenu = useAppStore((state) => state.activeMenu)
  const setOpenSidebar = useAppStore((state) => state.setOpenSidebar)

  const isActive = useMemo(() => path === activeMenu, [activeMenu, path])

  const handleClick = () => {
    //document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    if (type === MenuTypeEnum.SIDEBAR) setOpenSidebar(false)
  }

  return (
    <m.div
      className="relative"
      initial={isActive ? 'hover' : 'rest'}
      whileHover="hover"
      animate={isActive ? 'hover' : 'rest'}
    >
      <Link
        href={`#${path}`}
        className={className}
        onClick={() => handleClick()}
      >
        <m.div
          className="absolute left-0 translate-x-1/2 translate-y-1/2 opacity-0"
          variants={slashMotion}
        >
          {children}
        </m.div>
        <m.h1
          className="tracking-widest text-xs md:text-lg mr-7"
          variants={textMotion}
        >
          {text}
        </m.h1>
      </Link>

      {isActive && (
        <m.div
          className="absolute w-full bottom-0 left-0 h-full bg-secondary bg-opacity-70 rounded-md border-2 border-secondary shadow-custom-xs shadow-accent z-10"
          transition={selectedLinkMotion}
        />
      )}
    </m.div>
  )
}

export default NavLink
