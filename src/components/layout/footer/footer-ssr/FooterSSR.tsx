// i18n
import { getServerTranslation } from '@src/app/i18n/getServerTranslation'

// Components
import Footer from '../Footer'

export interface IFooterSSRProps {
  lang: string
}

const FooterSSR = async ({ lang }: IFooterSSRProps) => {
  const { t } = await getServerTranslation(lang, 'footer')

  return <Footer legend={t('legend')} />
}

export default FooterSSR
