import getAllProjects from '@src/modules/features/pages/projects/application/getAllProjects'

// Components
import ContentWrapper from '@src/components/ui/content-wrapper/ContentWrapper'
import ProjectCard from '@src/components/ui/project-card/ProjectCard'

const ProjectsPage = () => {
  const projects = getAllProjects()

  return (
    <ContentWrapper type="primary">
      <h3 className="text-secondary text-3xl text-center font-bold tracking-wider uppercase mb-10">
        Personal Projects
      </h3>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </ContentWrapper>
  )
}

export default ProjectsPage
