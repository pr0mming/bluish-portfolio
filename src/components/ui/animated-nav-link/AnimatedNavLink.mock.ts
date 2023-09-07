import { IAnimatedNavLinkProps } from './AnimatedNavLink'

const base: IAnimatedNavLinkProps = {
  className:
    'relative inline-block w-full p-3 text-white text-opacity-70 text-sm xl:text-lg font-medium uppercase z-20',
  text: 'Hello!',
  path: 'home',
  children: null
}

export const mockProps = {
  base
}
