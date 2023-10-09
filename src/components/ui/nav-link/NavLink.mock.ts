import { MenuTypeEnum } from '@src/modules/features/ui/navbar/domain/enums/MenuTypeEnum'
import { INavLinkProps } from './NavLink'

const base: INavLinkProps = {
  className:
    'relative inline-block w-full p-3 text-white text-opacity-70 text-sm xl:text-lg font-medium uppercase z-20',
  text: 'Hello!',
  path: 'home',
  type: MenuTypeEnum.NAVBAR,
  children: null
}

export const mockProps = {
  base
}
