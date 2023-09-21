// Next
import Image from 'next/image'

// Components
import ExperienceCard from '@src/components/ui/experience-card/ExperienceCard'

// Modules
import ExperienceEntity from '@src/modules/features/pages/experience/domain/ExperienceEntity'

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

        {!isLastItem && (
          <div className="mt-2">
            <Image
              src="/misc/mini-arrow.svg"
              alt="Mini Arrow"
              width={60}
              height={0}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ExperienceRole
