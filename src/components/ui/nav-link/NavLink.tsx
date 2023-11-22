'use client'

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
import useBoundStore from '@src/store/AppStore'

export interface INavLinkProps {
  className: string
  text: string
  path: string
  type: MenuTypeEnum
  children: React.ReactNode
}

const NavLink = ({ className, text, path, type, children }: INavLinkProps) => {
  const activeMenu = useBoundStore((state) => state.activeMenu)
  const setOpenSidebar = useBoundStore((state) => state.setOpenSidebar)

  const isActive = useMemo(() => path === activeMenu, [activeMenu, path])

  const handleClick = () => {
    // I decided to use this approach instead the classic Next Link + URL Hash
    // This due I had a weird behaviour after a time doing the scroll navigation
    document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' })

    if (type === MenuTypeEnum.SIDEBAR) setOpenSidebar(false)
  }

  return (
    <m.div
      className="relative mr-5"
      initial={isActive ? 'hover' : 'rest'}
      whileHover="hover"
      animate={isActive ? 'hover' : 'rest'}
    >
      <button type="button" className={className} onClick={() => handleClick()}>
        <m.div className="relative" variants={slashMotion}>
          {children}
        </m.div>
        <m.h1
          className="tracking-widest text-xs lg:text-lg"
          style={{ marginRight: 10 }}
          variants={textMotion}
        >
          {text}
        </m.h1>
      </button>

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
