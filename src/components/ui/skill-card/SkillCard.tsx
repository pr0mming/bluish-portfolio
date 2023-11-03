// Next
import Image from 'next/image'

// React
import { useMemo } from 'react'

// Framer
import { m } from 'framer-motion'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, library } from '@fortawesome/fontawesome-svg-core'
import {
  faFaceSmile,
  faFaceLaughBeam,
  faFaceKiss,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

// Modules
import resolveIconForSkillLevel from '@src/modules/features/pages/me/application/resolveIconForSkillLevel'
import MeSkillEntity from '@src/modules/features/pages/me/domain/MeSkillEntity'

// Extensions
import { skillCardMotion } from './SkillCard.animations'

library.add(faFaceSmile, faFaceLaughBeam, faFaceKiss, faHeart)

export interface ISkillCardProps {
  skill: MeSkillEntity
  initialAnimation: string
}

const SkillCard = ({ skill, initialAnimation }: ISkillCardProps) => {
  const { name, imgPath, level, isFavorite } = skill
  const skillLevelIcon = useMemo(() => resolveIconForSkillLevel(level), [level])

  return (
    <m.div
      className={`
          w-24
          h-auto
          relative
          bg-white
          rounded-xl
          border-2
          border-secondary
          p-5
          text-secondary
          shadow-custom-xs
          shadow-secondary
        `}
      initial={initialAnimation}
      animate="show"
      exit="hidden"
      variants={skillCardMotion}
    >
      <div className="absolute flex gap-2 right-2" style={{ top: '-14px' }}>
        <FontAwesomeIcon
          icon={skillLevelIcon as IconName}
          className="text-2xl"
        />

        {isFavorite && <FontAwesomeIcon icon="heart" className="text-2xl" />}
      </div>
      <div className="flex flex-col flex-1 items-center gap-1">
        <div
          className="relative my-auto"
          style={{ width: '45px', height: '45px' }}
        >
          <Image
            src={imgPath}
            alt={name}
            sizes="45px"
            fill
            style={{
              objectFit: 'contain'
            }}
          />
        </div>
        <span className="h-10 flex items-center text-center text-xs md:text-sm font-bold">
          {name}
        </span>
      </div>
    </m.div>
  )
}

export default SkillCard
