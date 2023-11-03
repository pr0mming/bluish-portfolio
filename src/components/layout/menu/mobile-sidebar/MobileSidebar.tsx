// Framer
import { m } from 'framer-motion'

// Modules
import MenuEntity from '@src/modules/features/ui/navbar/domain/entities/MenuEntity'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'

// Components
import LanguageSwitchButton from '@src/components/ui/language-switch-button/LanguageSwitchButton'
import NavLink from '@src/components/ui/nav-link/NavLink'

// Modules
import { MenuTypeEnum } from '@src/modules/features/ui/navbar/domain/enums/MenuTypeEnum'

// Extensions
import { backdropMotion, sidebarMotion } from './MobileSidebar.animations'

export interface IMobileSidebarProps {
  lang: string
  className?: string
  menus: MenuEntity[]
}

const MobileSidebar = ({ lang, className, menus }: IMobileSidebarProps) => {
  return (
    <m.section
      className={`block lg:hidden fixed w-screen h-screen bg-accent-900 bg-opacity-40 backdrop-blur-sm ${className}`}
      initial="closed"
      animate="open"
      exit="closed"
      variants={backdropMotion}
    >
      <m.nav
        className="absolute -right-1/2 h-screen bg-primary border-s-accent border-opacity-70 overflow-auto"
        variants={sidebarMotion}
        style={{ width: 230, borderInlineStartWidth: '1px' }}
      >
        <div className="flex flex-nowrap items-center justify-between mx-auto py-5 px-0 md:px-1">
          <div className="shrink-1 w-full">
            <ul className="flex flex-col gap-10 p-4">
              {menus.map((menu) => (
                <li key={menu.type}>
                  <NavLink
                    text={menu.text}
                    path={menu.path}
                    type={MenuTypeEnum.SIDEBAR}
                    className="relative flex items-center p-3 text-white text-opacity-70 text-sm font-medium uppercase z-20"
                  >
                    <FontAwesomeIcon icon={menu.icon as IconName} />
                  </NavLink>
                </li>
              ))}
              <li className="ps-3">
                <LanguageSwitchButton lang={lang} type={MenuTypeEnum.SIDEBAR} />
              </li>
            </ul>
          </div>
        </div>
      </m.nav>
    </m.section>
  )
}

export default MobileSidebar
