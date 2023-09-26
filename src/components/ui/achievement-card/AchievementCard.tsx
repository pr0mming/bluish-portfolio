// Next
import Image from 'next/image'
import Link from 'next/link'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

// Modules
import AchievementEntity from '@src/modules/features/pages/projects/domain/AchievementEntity'

library.add(faArrowUp)

export interface IProjectCardProps {
  achievement: AchievementEntity
}

const AchievementCard = ({ achievement }: IProjectCardProps) => {
  const { title, description, platformUrl, imgPath } = achievement

  return (
    <div
      className={`
        flex
        flex-col
        items-start
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
      <span className="flex items-center gap-2">
        <h4 className="font-semibold text-xl lg:text-2xl">{title}</h4>
        <Link
          href={platformUrl}
          target="_blank"
          className="transition ease-in-out delay-0 duration-150 hover:text-secondary-600 hover:scale-125"
          aria-label="Check Website"
        >
          <FontAwesomeIcon icon="arrow-up" className="rotate-45 text-xl" />
        </Link>
      </span>

      <div className="text-sm font-medium md:text-base">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      {imgPath && (
        <Image
          src={imgPath}
          alt={title}
          className="rounded-lg"
          sizes="100vw"
          style={{
            width: '70%',
            height: 'auto'
          }}
          width={0}
          height={50}
        />
      )}
    </div>
  )
}

export default AchievementCard
