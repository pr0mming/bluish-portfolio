import getAllExperience from '@src/modules/features/pages/experience/application/getAllExperience'
import { useClientTranslation } from '../useClientTranslation'
import getWorkTime from '@src/modules/common/time/getWorkTime'

const useExperienceTranslation = (lang: string) => {
  const workExperience = getAllExperience()

  const { t } = useClientTranslation(lang, 'experience')
  const i18nForTime = useClientTranslation(lang, 'time')

  return {
    title: t('experience.title'),
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
          details: experience.details?.map((detail) => t(detail)),
          timeStr
        }
      })
    )
  }
}

export default useExperienceTranslation
