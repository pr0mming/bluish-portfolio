// Next
import Image from 'next/image'

// Components
import ExperienceCard from '@src/components/ui/experience-card/ExperienceCard'

// Modules
import ExperienceEntity from '@src/modules/features/pages/experience/domain/ExperienceEntity'

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
            <div className="relative hidden lg:block -bottom-16 pe-2">
              <Image
                src="/misc/curved-arrow.svg"
                alt="Curved Arrow"
                width={290}
                height={266}
              />
            </div>
            <div className="block lg:hidden">
              <Image
                src="/misc/twisted-blue-arrow.svg"
                alt="Colombia"
                width={93}
                height={80}
              />
            </div>
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
            <div className="relative hidden lg:block -bottom-16 ps-2">
              <Image
                src="/misc/curved-arrow.svg"
                alt="Curved Arrow"
                width={290}
                height={266}
                style={{
                  transform: 'scaleX(-1)'
                }}
              />
            </div>
            <div className="block lg:hidden">
              <Image
                src="/misc/twisted-blue-arrow.svg"
                alt="Colombia"
                width={93}
                height={80}
              />
            </div>
          </>
        )}

        <ExperienceCard experience={experience} />
      </div>
    )
  }

  return null
}

export default ExperienceLastRole
