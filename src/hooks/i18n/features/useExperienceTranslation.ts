// Modules
import getAllExperience from '@src/modules/features/pages/experience/application/getAllExperience'
import getWorkTime from '@src/modules/common/time/getWorkTime'

// i18n
import { useClientTranslation } from '../useClientTranslation'

const useExperienceTranslation = (lang: string) => {
  const workExperience = getAllExperience()

  const { t } = useClientTranslation(lang, 'experience')
  const i18nForTime = useClientTranslation(lang, 'others')

  return {
    title: t('title'),
    workExperience: workExperience.map((experiences) =>
      experiences.map((experience) => {
        const timeStr = getWorkTime({
          t: i18nForTime.t,
          lang,
          startDate: experience.time.startDate,
          endDate: experience.time.endDate
        })

        return {
          ...experience,
          position: t(experience.position),
          description: t(experience.description),
          detailsLabel: t(experience.detailsLabel),
          details: experience.details?.map((detail) => t(detail)),
          timeStr
        }
      })
    )
  }
}

export default useExperienceTranslation
