// Framer
import { m } from 'framer-motion'

// Modules
import MenuEntity from '@src/modules/features/ui/navbar/domain/entities/MenuEntity'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'

// Components
import NavLink from '@src/components/ui/nav-link/NavLink'

// Extensions
import { backdropMotion, sidebarMotion } from './MobileSidebar.animations'

export interface IMobileSidebarProps {
  menus: MenuEntity[]
}

const MobileSidebar = ({ menus }: IMobileSidebarProps) => {
  return (
    <m.section
      className="block md:hidden fixed w-screen h-screen bg-accent-900 bg-opacity-40 backdrop-blur-sm"
      initial="closed"
      animate="open"
      exit="closed"
      variants={backdropMotion}
    >
      <m.nav
        className="absolute -right-1/2 w-3/6 sm:w-5/12 h-screen bg-primary border-s-accent border-opacity-70 overflow-auto"
        variants={sidebarMotion}
        style={{ borderInlineStartWidth: '1px' }}
      >
        <div className="flex flex-nowrap items-center justify-between mx-auto p-5">
          <div className="shrink-1 w-full">
            <ul className="flex flex-col gap-10 p-4">
              {menus.map((menu) => (
                <li key={menu.type}>
                  <NavLink
                    text={menu.text}
                    path={menu.path}
                    className="relative inline-block w-full p-3 text-white text-opacity-70 text-sm font-medium uppercase z-20"
                  >
                    <FontAwesomeIcon icon={menu.icon as IconName} size="lg" />
                  </NavLink>
                </li>
              ))}
              <li>
                <button
                  className="transition ease-in-out delay-50 text-white text-opacity-70 hover:scale-125 hover:text-white duration-200 px-3"
                  type="button"
                  aria-label="Change Language"
                >
                  <FontAwesomeIcon icon={'globe'} size="2x" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </m.nav>
    </m.section>
  )
}

export default MobileSidebar
