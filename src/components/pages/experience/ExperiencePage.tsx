// Components
import ContentWrapper from '@src/components/ui/content-wrapper/ContentWrapper'

// Components
import ExperienceSection from './experience-section/ExperienceSection'

// Hooks
import useExperienceTranslation from '@src/hooks/i18n/features/useExperienceTranslation'

export interface IExperiencePageProps {
  lang: string
}

const ExperiencePage = ({ lang }: IExperiencePageProps) => {
  const { title, workExperience } = useExperienceTranslation(lang)

  return (
    <ContentWrapper type="secondary">
      <h3 className="text-white text-2xl lg:text-3xl text-center font-bold tracking-wider uppercase mb-10">
        {title}
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
