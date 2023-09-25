// Next
import Image from 'next/image'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faArrowUp } from '@fortawesome/free-solid-svg-icons'

// Modules
import ProjectEntity from '@src/modules/features/pages/projects/domain/ProjectEntity'

// Components
import MainButton from '../main-button/MainButton'

library.add(faCode, faArrowUp)

export interface IProjectCardProps {
  project: ProjectEntity
}

const ProjectCard = ({ project }: IProjectCardProps) => {
  const { title, description, skills, imgPath, repoUrl, demoUrl } = project

  return (
    <div
      className={`
        flex
        flex-col
        gap-3
        bg-white
        bg-opacity-95
        rounded-xl
        border-2
        border-secondary
        shadow-custom-xs
        shadow-secondary
        p-5 md:p-10
        text-secondary
      `}
    >
      <Image
        src={imgPath}
        alt={title}
        className="rounded-xl"
        width={700}
        height={680}
      />

      <h3 className="font-semibold text-xl lg:text-2xl">{title}</h3>

      <div className="text-sm font-medium md:text-base">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <section className="flex flex-wrap gap-1">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-secondary text-white font-medium text-xs md:text-sm rounded-full px-4 py-2"
          >
            {skill}
          </div>
        ))}
      </section>

      <section className="flex gap-3 mt-2">
        <MainButton
          type="secondary"
          href={repoUrl}
          target="_blank"
          className="font-bold text-sm md:text-lg px-5 py-2"
        >
          <span className="flex gap-2 items-center text-secondary">
            <span>Repo</span>
            <FontAwesomeIcon icon="code" />
          </span>
        </MainButton>

        {demoUrl && (
          <MainButton
            type="secondary"
            href={demoUrl}
            target="_blank"
            className="font-bold text-sm md:text-lg px-5 py-2"
          >
            <span className="flex gap-2 items-center text-secondary">
              <span>Demo</span>
              <FontAwesomeIcon icon="arrow-up" className="rotate-45" />
            </span>
          </MainButton>
        )}
      </section>
    </div>
  )
}

export default ProjectCard
