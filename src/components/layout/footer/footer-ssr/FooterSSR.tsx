// i18n
import { useTranslation } from '@src/app/i18n/useTranslation'

// Components
import Footer from '../Footer'

export interface IFooterSSRProps {
  lang: string
}

const FooterSSR = async ({ lang }: IFooterSSRProps) => {
  const { t } = await useTranslation(lang, 'footer')

  return <Footer legend={t('legend')} />
}

export default FooterSSR
