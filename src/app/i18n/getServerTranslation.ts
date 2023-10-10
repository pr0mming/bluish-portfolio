// Taken from: https://locize.com/blog/next-13-app-dir-i18n/

import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

// i18n config
import { getOptions } from './settings'

const initI18next = async (lang: string, ns: string) => {
  // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@src/app/i18n/locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lang, ns))
  return i18nInstance
}

export async function getServerTranslation(
  lang: string,
  ns: string,
  // eslint-disable-next-line
  options: any = {}
) {
  const i18nextInstance = await initI18next(lang, ns)
  return {
    t: i18nextInstance.getFixedT(
      lang,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nextInstance
  }
}
