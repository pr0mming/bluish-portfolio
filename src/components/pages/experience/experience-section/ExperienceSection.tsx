import ExperienceCard from '@src/components/ui/experience-card/ExperienceCard'
import ExperienceEntity from '@src/modules/features/pages/experience/domain/ExperienceEntity'
import AnimatedArrow from '../Arrow'

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
            className={`flex justify-start gap-2 ${
              isFirstElement ? 'mt-0' : 'mt-16'
            }`}
          >
            <ExperienceCard experience={experience} />
            {(!isLastElement || i < experiences.length - 1) && (
              <AnimatedArrow />
            )}
          </div>
        ))}
      </>
    )
  }

  return (
    <>
      {experiences.map((experience, i) => (
        <div key={experience.id} className={`flex justify-end gap-2 mt-16`}>
          {(!isLastElement || i < experiences.length - 1) && <AnimatedArrow />}
          <ExperienceCard experience={experience} />
        </div>
      ))}
    </>
  )
}

export default ExperienceSection
