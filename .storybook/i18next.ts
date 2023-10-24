// i18next
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

// i18n Plugins
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

// i18n config
import { fallbackLng, getOptions } from '../src/app/i18n/settings'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`@src/app/i18n/locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: fallbackLng
  })

export default i18next
