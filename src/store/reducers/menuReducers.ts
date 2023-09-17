// Modules
import getDefaultMenu from '@src/modules/features/ui/navbar/application/getDefaultMenu'

export const setActiveMenu = (value: string) => ({
  activeMenu: !value ? getDefaultMenu().path : value
})
