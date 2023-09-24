// Components
import ExperienceCard from '@src/components/ui/experience-card/ExperienceCard'

// Modules
import ExperienceEntity from '@src/modules/features/pages/experience/domain/ExperienceEntity'

// Components
import ExperienceMiniArrow from '@src/components/ui/experience-mini-arrow/ExperienceMiniArrow'

export interface IExperienceRoleProps {
  type: 'left' | 'right'
  isFirstItem: boolean
  isLastItem: boolean
  experience: ExperienceEntity
}

const ExperienceRole = ({
  type,
  isFirstItem,
  isLastItem,
  experience
}: IExperienceRoleProps) => {
  const isLeft = type === 'left'
  const justifyDirection = isLeft ? 'lg:justify-start' : 'lg:justify-end'

  return (
    <div
      className={`flex justify-center ${justifyDirection} ${
        isFirstItem ? 'lg:mt-16' : ''
      }`}
    >
      <div className="flex flex-col items-center">
        <ExperienceCard experience={experience} />

        {!isLastItem && <ExperienceMiniArrow />}
      </div>
    </div>
  )
}

export default ExperienceRole
