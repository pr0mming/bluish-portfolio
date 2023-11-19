// Next
import { Metadata } from 'next'

// Components
import HomePage from '@src/components/pages/home/HomePage'
import PagesTree from '@src/components/pages-tree/PagesTree'

// i18n
import { getServerTranslation } from '@src/app/i18n/getServerTranslation'
import { fallbackLng, languages } from '../i18n/settings'

export async function generateMetadata({
  params: { lang }
}: {
  params: {
    lang: string
  }
}): Promise<Metadata> {
  // Here is translated the page metadata
  const { t } = await getServerTranslation(lang, 'metadata')

  return {
    title: t('title'),
    description: t('description'),
    manifest: '/manifest.json',
    themeColor: '#00334e',
    keywords: [
      'pr0mming',
      'Julián Bernal',
      'Full Stack Developer',
      'Software Engineer',
      'Hack The Box',
      'Hacker Rank'
    ],
    alternates: {
      canonical: process.env.PORTFOLIO_DOMAIN ?? '',
      languages: languages.reduce(
        (acc, lang) => {
          acc[lang] = `${process.env.PORTFOLIO_DOMAIN}/${lang}`
          return acc
        },
        {} as Record<string, string>
      )
    },
    verification: {
      google: process.env.GOOGLE_VERIFICATION_ID
    }
  }
}

export default async function App({
  params: { lang }
}: {
  params: {
    lang: string
  }
}) {
  if (languages.indexOf(lang) < 0) lang = fallbackLng

  return (
    <div className="grid gap-10 overflow-hidden" id="home">
      <HomePage lang={lang} />
      <PagesTree lang={lang} />
    </div>
  )
}
