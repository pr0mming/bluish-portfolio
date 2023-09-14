// Next
import Image from 'next/image'

// Modules
import MenuEntity from '@src/modules/features/ui/navbar/domain/entities/MenuEntity'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faSmileBeam,
  faBriefcase,
  faAddressBook,
  faGlobe
} from '@fortawesome/free-solid-svg-icons'

// Components
import AnimatedNavLink from '@src/components/ui/animated-nav-link/AnimatedNavLink'
import MenuSwitcher from '@src/components/ui/menu-switcher/MenuSwitcher'

library.add(faHome, faSmileBeam, faBriefcase, faAddressBook, faGlobe)

export interface INavbarProps {
  menus: MenuEntity[]
}

const Navbar = ({ menus }: INavbarProps) => {
  return (
    <nav className="block bg-primary border-b-[1px] border-b-accent border-opacity-70">
      <div className="w-full flex flex-nowrap items-center justify-between mx-auto px-4 py-6">
        <a
          href="/"
          className="flex flex-1 justify-start items-center px-5 lg:px-10"
        >
          <Image
            src="/me/me-logo.svg"
            alt="App Logo"
            width={150}
            height={65}
            priority
          />
        </a>

        <MenuSwitcher />

        <div className="hidden w-full md:flex justify-center md:w-auto">
          <ul className="flex flex-col gap-10 mt-4 p-4 md:flex-row xl:space-x-8 md:mt-0 md:p-0">
            {menus.map((menu) => (
              <li key={menu.type}>
                <AnimatedNavLink
                  text={menu.text}
                  path={menu.path}
                  className="relative inline-block w-full p-3 text-white text-opacity-70 text-sm xl:text-lg font-medium uppercase z-20"
                >
                  <FontAwesomeIcon icon={['fas', menu.icon as IconName]} />
                </AnimatedNavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden flex-1 w-full md:flex justify-center md:w-auto">
          <button
            className="transition ease-in-out delay-50 text-white text-opacity-70 hover:scale-125 hover:text-white duration-200"
            type="button"
            aria-label="Change Language"
          >
            <FontAwesomeIcon icon={['fas', 'globe']} size="2x" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
