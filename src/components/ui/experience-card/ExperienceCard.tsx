// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

// Modules
import ExperienceEntity from '@src/modules/features/pages/experience/domain/ExperienceEntity'

library.add(faArrowUp)

export interface IExperienceCardProps {
  experience: ExperienceEntity
}

const ExperienceCard = ({ experience }: IExperienceCardProps) => {
  const {
    position,
    companyName,
    companyWebsite,
    time,
    description,
    details,
    technologies
  } = experience

  return (
    <div
      className={`
        flex
        flex-col
        gap-3
        bg-secondary
        bg-opacity-95
        rounded-xl
        border-2
        border-accent
        shadow-custom-xs
        shadow-accent
        py-10
        px-5
        md:px-10
        text-white
      `}
      style={{
        maxWidth: 590,
        height: 'auto'
      }}
    >
      <h3 className="font-semibold text-2xl">{position}</h3>
      <span className="flex items-center gap-2">
        <h4 className="font-medium text-xl">{companyName}</h4>
        <a
          href={companyWebsite}
          target="_blank"
          className="transition ease-in-out delay-75 duration-150 hover:text-white-600 hover:scale-125"
          aria-label="Check Website"
        >
          <FontAwesomeIcon icon="arrow-up" className="rotate-45 text-xl" />
        </a>
      </span>
      <h5 className="font-medium text-sm">{time}</h5>
      <p className="font-light">{description}</p>
      <ul className="list-disc font-light text-base ms-5">
        {details?.map((detail) => (
          <li key={detail} className="mb-5">
            {detail}
          </li>
        ))}
      </ul>
      <section className="flex flex-wrap gap-1">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="bg-accent text-white font-medium text-sm rounded-full px-4 py-2"
          >
            {tech}
          </div>
        ))}
      </section>
    </div>
  )
}

export default ExperienceCard
