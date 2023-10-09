import { MetadataRoute } from 'next'

import { languages } from './i18n/settings'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: languages.map((lang) => `/${lang}`)
    },
    sitemap: 'http://localhost:3000/sitemap.xml'
  }
}
