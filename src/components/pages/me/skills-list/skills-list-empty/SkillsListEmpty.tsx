// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faFaceFlushed } from '@fortawesome/free-solid-svg-icons'
import { useClientTranslation } from '@src/hooks/i18n/useClientTranslation'

library.add(faFaceFlushed)

export interface ISkillsListEmptyProps {
  lang: string
}

const SkillsListEmpty = ({ lang }: ISkillsListEmptyProps) => {
  const { t } = useClientTranslation(lang, 'others')

  return (
    <section className="flex gap-2 justify-center text-center text-secondary font-medium text-xl">
      <p>{t('thereIsNothing')}</p>
      <FontAwesomeIcon icon={'face-flushed'} className="text-3xl" />
    </section>
  )
}

export default SkillsListEmpty
