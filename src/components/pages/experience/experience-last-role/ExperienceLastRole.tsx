// Next
import dynamic from 'next/dynamic'

// Components
import ExperienceCard from '@src/components/ui/experience-card/ExperienceCard'

// Modules
import ExperienceEntity from '@src/modules/features/pages/experience/domain/ExperienceEntity'

// Components
const ExperienceCurvedArrow = dynamic(
  () =>
    import('@src/components/ui/experience-curved-arrow/ExperienceCurvedArrow')
)
const ExperienceTwistedArrow = dynamic(
  () =>
    import('@src/components/ui/experience-twisted-arrow/ExperienceTwistedArrow')
)

export interface IExperienceLastRoleProps {
  type: 'left' | 'right'
  isFirstItem: boolean
  isLastItem: boolean
  experience: ExperienceEntity
}

const ExperienceLastRole = ({
  type,
  isFirstItem,
  isLastItem,
  experience
}: IExperienceLastRoleProps) => {
  if (type === 'left') {
    return (
      <div
        className={`flex flex-col items-center lg:flex-row lg:items-end lg:justify-start gap-2 ${
          isFirstItem ? 'lg:mt-16' : ''
        }`}
      >
        <ExperienceCard experience={experience} />

        {!isLastItem && (
          <>
            <ExperienceCurvedArrow isFlipped={false} />{' '}
            <ExperienceTwistedArrow />
          </>
        )}
      </div>
    )
  }

  if (type === 'right') {
    return (
      <div
        className={`flex flex-col-reverse items-center lg:flex-row lg:items-end lg:justify-end gap-2 ${
          isFirstItem ? 'lg:mt-16' : ''
        }`}
      >
        {!isLastItem && (
          <>
            <ExperienceCurvedArrow isFlipped={true} />
            <ExperienceTwistedArrow />
          </>
        )}

        <ExperienceCard experience={experience} />
      </div>
    )
  }

  return null
}

export default ExperienceLastRole
