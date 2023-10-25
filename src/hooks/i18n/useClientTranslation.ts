'use client'

// Hook taken from: https://locize.com/blog/next-13-app-dir-i18n/

// React
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

// i18next
import i18next from 'i18next'
import {
  initReactI18next,
  useTranslation as useTranslationOrg
} from 'react-i18next'

// i18n Plugins
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

// i18n config
import { getOptions, languages, cookieName } from '@src/app/i18n/settings'

const runsOnServerSide = typeof window === 'undefined'

// on client side the normal singleton is ok
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
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator']
    },
    preload: runsOnServerSide ? languages : []
  })

/**
 * This hook manage the i18next instance for the Client React Components,
 * but is also executed when is done the SSG
 * @param {string} lang is the target language to use
 * @param {string} ns is the namespace
 * @returns the react-i18next instance ready to use
 */
export function useClientTranslation(lang: string, ns: string) {
  const [cookies, setCookie] = useCookies([cookieName])
  const { t, i18n } = useTranslationOrg(ns)

  if (i18n.resolvedLanguage !== lang) {
    i18n.changeLanguage(lang)
  }

  if (runsOnServerSide) {
    return { t }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (activeLng != i18n.resolvedLanguage) setActiveLng(i18n.resolvedLanguage)
  }, [activeLng, i18n.resolvedLanguage])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (lang && i18n.resolvedLanguage !== lang) i18n.changeLanguage(lang)
  }, [lang, i18n.resolvedLanguage, i18n])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (cookies.i18next !== lang) {
      setCookie(cookieName, lang, { path: '/' })
    }
  }, [lang, cookies.i18next, setCookie])

  return { t }
}
