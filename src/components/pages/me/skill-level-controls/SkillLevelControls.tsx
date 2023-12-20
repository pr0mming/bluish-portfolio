// Next
import dynamic from 'next/dynamic'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, library } from '@fortawesome/fontawesome-svg-core'
import {
  faFaceSmile,
  faFaceLaughBeam,
  faFaceKiss,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

// Components
const SkillLevelButton = dynamic(
  () => import('@src/components/ui/skills-level-button/SkillLevelButton')
)

// Hooks
import { useClientTranslation } from '@src/hooks/i18n/useClientTranslation'
import useSkillLevelsTranslation from '@src/hooks/i18n/features/useSkillLevelsTranslation'

library.add(faFaceSmile, faFaceLaughBeam, faFaceKiss, faHeart)

export interface ISkillLevelControlsProps {
  lang: string
}

const SkillLevelControls = ({ lang }: ISkillLevelControlsProps) => {
  const skillLevels = useSkillLevelsTranslation(lang)

  const { t } = useClientTranslation(lang, 'skills')

  return (
    <article className="mt-10 md:mt-20">
      <h3 className="text-secondary text-2xl lg:text-3xl text-center font-bold tracking-wider uppercase mb-10">
        {t('title')}
      </h3>
      <p
        className="text-center text-md md:text-xl font-medium text-secondary mx-5"
        dangerouslySetInnerHTML={{ __html: t('description') }}
      />
      <section className="grid grid-cols-2 gap-5 w-fit items-stretch mx-auto my-10">
        {skillLevels.map((level) => (
          <SkillLevelButton key={level.id} level={level}>
            <FontAwesomeIcon icon={level.icon as IconName} size="2x" />
          </SkillLevelButton>
        ))}
      </section>
    </article>
  )
}

export default SkillLevelControls
