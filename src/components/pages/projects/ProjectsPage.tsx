// Components
import ContentWrapper from '@src/components/ui/content-wrapper/ContentWrapper'
import ProjectCard from '@src/components/ui/project-card/ProjectCard'
import AchievementsList from './achievements-list/AchievementsList'

// Hooks
import useProjectTranslation from '@src/hooks/i18n/features/useProjectTranslation'

export interface IProjectsPageProps {
  lang: string
}

const ProjectsPage = ({ lang }: IProjectsPageProps) => {
  const { title, projects } = useProjectTranslation(lang)

  return (
    <ContentWrapper type="primary">
      <section className="mb-20">
        <h3 className="text-secondary text-2xl lg:text-3xl text-center font-bold tracking-wider uppercase mb-10">
          {title}
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <AchievementsList lang={lang} />
    </ContentWrapper>
  )
}

export default ProjectsPage
