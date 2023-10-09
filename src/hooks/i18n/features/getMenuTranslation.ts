import getAllMenus from '@src/modules/features/ui/navbar/application/getAllMenus'
import { getServerTranslation } from '@src/app/i18n/getServerTranslation'

const getMenuTranslation = async (lang: string) => {
  const menus = getAllMenus()

  const { t } = await getServerTranslation(lang, 'menu')

  return menus.map((menu) => ({
    ...menu,
    text: t(menu.text)
  }))
}

export default getMenuTranslation
