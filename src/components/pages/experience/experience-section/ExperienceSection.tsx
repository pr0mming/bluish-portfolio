// Next
import Image from 'next/image'

// Components
import ExperienceCard from '@src/components/ui/experience-card/ExperienceCard'
import ExperienceEntity from '@src/modules/features/pages/experience/domain/ExperienceEntity'

export interface IExperienceSectionProps {
  elementNumber: number
  isFirstElement: boolean
  isLastElement: boolean
  experiences: ExperienceEntity[]
}

const ExperienceSection = ({
  elementNumber,
  isFirstElement,
  isLastElement,
  experiences
}: IExperienceSectionProps) => {
  if (elementNumber % 2 === 0) {
    return (
      <>
        {experiences.map((experience, i) => (
          <div
            key={experience.id}
            className={`flex flex-col items-center lg:flex-row lg:items-end lg:justify-start gap-2 ${
              isFirstElement ? 'mt-0' : 'mt-16'
            }`}
          >
            <ExperienceCard experience={experience} />
            {!isLastElement &&
              experiences.length > 1 &&
              i < experiences.length - 1 && (
                <>
                  <div className="relative flex items-end -bottom-16 pe-2">
                    <Image
                      src="/misc/mini-arrow.svg"
                      alt="Colombia"
                      width={77}
                      height={50}
                    />
                  </div>
                </>
              )}
            {!isLastElement && i === experiences.length - 1 && (
              <>
                <div className="relative hidden lg:flex items-end -bottom-16 pe-2">
                  <Image
                    src="/misc/curved-arrow.svg"
                    alt="Colombia"
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
        ))}
      </>
    )
  }

  return (
    <>
      {experiences.map((experience, i) => (
        <div
          key={experience.id}
          className={`flex ${
            !isLastElement &&
            experiences.length > 1 &&
            i < experiences.length - 1
              ? 'flex-col-reverse items-end'
              : 'flex-row'
          } justify-center lg:justify-end gap-2 mt-0 lg:mt-16`}
        >
          {!isLastElement &&
            experiences.length > 1 &&
            i < experiences.length - 1 && (
              <div
                className={`relative flex ${
                  !isLastElement &&
                  experiences.length > 1 &&
                  i < experiences.length - 1
                    ? 'right-56'
                    : '-bottom-16'
                } items-end `}
              >
                <Image
                  src="/misc/mini-arrow.svg"
                  alt="Colombia"
                  width={77}
                  height={20}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </div>
            )}
          {!isLastElement && i === experiences.length - 1 && (
            <>
              <div className="relative hidden lg:flex items-end -bottom-16 pe-2">
                <Image
                  src="/misc/curved-arrow.svg"
                  alt="Colombia"
                  width={290}
                  height={266}
                  style={{ transform: 'scaleX(-1)' }}
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
      ))}
    </>
  )
}

export default ExperienceSection
