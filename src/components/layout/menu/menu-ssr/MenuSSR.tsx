// i18n
import getMenuTranslation from '@src/hooks/i18n/features/getMenuTranslation'

// Components
import Menu from '../Menu'

export interface IMenuSSRProps {
  lang: string
}

const MenuSSR = async ({ lang }: IMenuSSRProps) => {
  const menus = await getMenuTranslation(lang)

  return <Menu lang={lang} menus={menus} />
}

export default MenuSSR
