// Components
import ContentWrapper from '@src/components/ui/content-wrapper/ContentWrapper'

// Modules
import getAllExperience from '@src/modules/features/pages/experience/application/getAllExperience'

// Components
import ExperienceSection from './experience-section/ExperienceSection'

const ExperiencePage = () => {
  const workExperience = getAllExperience()

  return (
    <ContentWrapper type="secondary">
      <h3 className="text-white text-3xl text-center font-bold tracking-wider uppercase mb-10">
        Experience
      </h3>
      <section>
        {workExperience.map((experiences, i) => (
          <ExperienceSection
            key={experiences[0].id}
            elementNumber={i}
            isFirstElement={i === 0}
            isLastElement={i === workExperience.length - 1}
            experiences={experiences}
          />
        ))}
      </section>
    </ContentWrapper>
  )
}

export default ExperiencePage
