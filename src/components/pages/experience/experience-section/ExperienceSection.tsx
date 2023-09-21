// Components
import ExperienceEntity from '@src/modules/features/pages/experience/domain/ExperienceEntity'
import ExperienceLastRole from '../experience-last-role/ExperienceLastRole'
import ExperienceRole from '../experience-role/ExperienceRole'

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
  const isEven = elementNumber % 2 === 0

  return (
    <>
      {experiences.map((experience, i) => {
        const isFirstItem = i === 0 && !isFirstElement
        const isLastItem = i === experiences.length - 1

        if (isLastItem) {
          return (
            <ExperienceLastRole
              key={experience.id}
              type={isEven ? 'left' : 'right'}
              isFirstItem={isFirstItem}
              isLastItem={isLastElement}
              experience={experience}
            />
          )
        }

        return (
          <ExperienceRole
            key={experience.id}
            type={isEven ? 'left' : 'right'}
            isFirstItem={isFirstItem}
            isLastItem={isLastItem}
            experience={experience}
          />
        )
      })}
    </>
  )
}

export default ExperienceSection
