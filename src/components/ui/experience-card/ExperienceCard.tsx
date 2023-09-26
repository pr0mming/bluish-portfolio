// Next
import Link from 'next/link'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

// Modules
import ExperienceEntity from '@src/modules/features/pages/experience/domain/ExperienceEntity'
import getWorkTime from '@src/modules/common/time/getWorkTime'

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

  const expTimeStr = getWorkTime(time.startDate, time.endDate)

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
        p-5 md:p-10
        text-white
      `}
      style={{
        maxWidth: 590,
        height: 'auto'
      }}
    >
      <h3 className="font-semibold text-xl lg:text-2xl">{position}</h3>
      <span className="flex items-center gap-2">
        <h4 className="font-medium text-lg lg:text-xl">{companyName}</h4>
        <Link
          href={companyWebsite}
          target="_blank"
          className="transition ease-in-out0 duration-150 hover:text-white-600 hover:scale-125"
          aria-label="Check Website"
        >
          <FontAwesomeIcon icon="arrow-up" className="rotate-45 text-xl" />
        </Link>
      </span>
      <h5 className="font-medium text-sm">{expTimeStr}</h5>

      <div className="text-sm font-light md:text-base">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <ul className="list-disc font-light text-sm md:text-base ms-5">
        {details?.map((detail) => (
          <li key={detail} className="mb-5">
            <p dangerouslySetInnerHTML={{ __html: detail }}></p>
          </li>
        ))}
      </ul>

      <section className="flex flex-wrap gap-1">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="bg-accent text-white font-medium text-xs md:text-sm rounded-full px-4 py-2"
          >
            {tech}
          </div>
        ))}
      </section>
    </div>
  )
}

export default ExperienceCard
