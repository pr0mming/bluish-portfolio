'use client'

// Module
import getAllMenus from '@src/modules/ui/navbar/application/getAllMenus'
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

// Next
import Image from 'next/image'

// Components
import AnimatedLink from '@src/components/ui/animatedLink/AnimatedLink'

library.add(faHome, faSmileBeam, faBriefcase, faAddressBook, faGlobe, faBars)

export interface INavbarProps {}

const Navbar = () => {
  const menus: MenuEntity[] = getAllMenus()

  return (
    <header>
      <nav className="bg-primary border-b-[1px] border-b-accent border-opacity-70">
        <div className="max-w-screen-xl flex flex-nowrap items-center justify-between mx-auto px-4 py-6">
          <a
            href="https://google.com"
            className="flex flex-1 justify-start items-center mx-5"
          >
            <Image
              src="/me/me-logo.svg"
              alt="App Logo"
              width={150}
              height={65}
              priority={true}
            />
          </a>

          <button
            className="inline-flex items-center justify-center md:hidden p-2 w-10 h-10 text-white text-opacity-70 scale-150"
            type="button"
          >
            <FontAwesomeIcon icon={['fas', 'bars']} />
          </button>

          <div className="hidden shrink-1 w-full md:flex justify-center md:w-auto">
            <ul className="flex flex-col gap-10 mt-4 p-4 md:flex-row xl:space-x-8 md:mt-0 md:p-0">
              {menus.map((menu, i) => (
                <>
                  <li key={menu.type}>
                    {/* <Link
                      href={`${menu.redirect}#`}
                      className="block p-3 text-white text-opacity-70 text-sm xl:text-lg font-medium uppercase transition ease-in-out delay-50 hover:scale-125 hover:text-opacity-100 duration-100"
                    >
                      <span className="mr-4">{menu.text}</span>
                      <FontAwesomeIcon icon={['fas', menu.icon as IconName]} />
                    </Link> */}
                    <AnimatedLink
                      href={`${menu.redirect}#`}
                      text={menu.text}
                      className="relative inline-block p-3 text-white text-opacity-70 text-sm xl:text-lg font-medium uppercase"
                    >
                      <FontAwesomeIcon
                        icon={['fas', menu.icon as IconName]}
                        size="lg"
                      />
                    </AnimatedLink>
                  </li>
                  {i < menus.length - 1 && (
                    <li>
                      <div className="h-full border-[1px] border-accent border-opacity-70"></div>
                    </li>
                  )}
                </>
              ))}
            </ul>
          </div>

          <div className="hidden flex-1 w-full md:flex justify-center md:w-auto">
            <button
              className="transition ease-in-out delay-50 text-white text-opacity-70 hover:scale-125 hover:text-white duration-150"
              type="button"
            >
              <FontAwesomeIcon icon={['fas', 'globe']} size="xl" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
