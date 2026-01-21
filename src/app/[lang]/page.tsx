// Next
import { Metadata, Viewport } from 'next'

// Components
import HomePage from '@src/components/pages/home/HomePage'
import PagesTree from '@src/components/pages-tree/PagesTree'

// i18n
import { useTranslation } from '@src/app/i18n/useTranslation'
import { fallbackLng, languages } from '../i18n/settings'

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params

  // Here is translated the page metadata
  const { t } = await useTranslation(lang, 'metadata')

  return {
    title: t('title'),
    description: t('description'),
    manifest: '/manifest.json',
    keywords: [
      'pr0mming',
      'Julián Bernal',
      'Full Stack Developer',
      'Software Engineer',
      'Hack The Box',
      'Hacker Rank'
    ],
    alternates: {
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

export const viewport: Viewport = {
  themeColor: '#00334e'
}

export default async function App({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  let { lang } = await params

  if (languages.indexOf(lang) < 0) lang = fallbackLng

  return (
    <div className="grid gap-10 overflow-hidden" id="home">
      <HomePage lang={lang} />
      <PagesTree lang={lang} />
    </div>
  )
}
