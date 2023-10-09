// Next
import { Metadata } from 'next'

// Components
import HomePage from '@src/components/pages/home/HomePage'
import PagesTree from '@src/components/pages/pages-tree/PagesTree'

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
  const { t } = await getServerTranslation(lang, 'metadata')

  return {
    title: t('title'),
    description: t('description'),
    manifest: '/manifest.json',
    themeColor: '#e8e8e8'
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
