// Framer
import { AnimatePresence, motion } from 'framer-motion'

// Modules
import MenuEntity from '@src/modules/ui/navbar/domain/entities/MenuEntity'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faSmileBeam,
  faBriefcase,
  faAddressBook,
  faBars,
  faGlobe
} from '@fortawesome/free-solid-svg-icons'

// Components
import AnimatedNavLink from '@src/components/ui/animated-nav-link/AnimatedNavLink'

// Extensions
import { backdropMotion, sidebarMotion } from './MobileSidebar.animations'

library.add(faHome, faSmileBeam, faBriefcase, faAddressBook, faGlobe, faBars)

export interface IMobileSidebarProps {
  menus: MenuEntity[]
  isOpenSidebar: boolean
}

const MobileSidebar = ({ menus, isOpenSidebar }: IMobileSidebarProps) => {
  return (
    <AnimatePresence>
      {isOpenSidebar && (
        <motion.section
          className="block md:hidden fixed w-screen h-screen bg-accent-900 bg-opacity-40 backdrop-blur-sm"
          initial="closed"
          animate="open"
          exit="closed"
          variants={backdropMotion}
        >
          <motion.nav
            className="absolute -right-1/2 w-3/6 sm:w-5/12 h-screen bg-primary border-s-[1px] border-s-accent border-opacity-70 overflow-auto"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarMotion}
          >
            <div className="flex flex-nowrap items-center justify-between mx-auto px-4 py-6">
              <div className="shrink-1 w-full">
                <ul className="flex flex-col gap-10 mt-4 p-4">
                  {menus.map((menu) => (
                    <li key={menu.type}>
                      <AnimatedNavLink
                        text={menu.text}
                        path={menu.path}
                        className="relative inline-block w-full p-3 text-white text-opacity-70 text-sm font-medium uppercase z-20"
                      >
                        <FontAwesomeIcon
                          icon={['fas', menu.icon as IconName]}
                          size="lg"
                        />
                      </AnimatedNavLink>
                    </li>
                  ))}
                  <li>
                    <button
                      className="transition ease-in-out delay-50 text-white text-opacity-70 hover:scale-125 hover:text-white duration-200 px-3"
                      type="button"
                    >
                      <FontAwesomeIcon icon={['fas', 'globe']} size="2x" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </motion.nav>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default MobileSidebar
