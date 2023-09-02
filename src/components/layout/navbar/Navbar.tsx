import Image from 'next/image'

export interface INavbarProps {}

const Navbar = () => {
  return (
    <header>
      <nav className="bg-primary border-b-[1px] border-b-accent border-opacity-70">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://google.com" className="flex items-center">
            <Image
              src="/me/me-logo.svg"
              alt="App Logo"
              width={235}
              height={63}
            />
          </a>

          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col pl-4 md:p-0 mt-4">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4">
                  Home 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
