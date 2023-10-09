export const fallbackLng = 'en'
export const languages = [fallbackLng, 'es']
export const defaultNS = 'home'
export const cookieName = 'i18next'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    //debug: true,
    supportedLangs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}
