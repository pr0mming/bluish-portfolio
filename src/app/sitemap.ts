// Next
import { MetadataRoute } from 'next'

// i18n
import { languages } from './i18n/settings'

export default function sitemap(): MetadataRoute.Sitemap {
  return languages.map((lang) => {
    return {
      url: `${process.env.PORTFOLIO_DOMAIN}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    }
  })
}
