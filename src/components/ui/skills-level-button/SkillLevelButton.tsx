'use client'

// React
import { useState } from 'react'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

// Components
import Tooltip from '../tooltip/Tooltip'

// Modules
import MeSkillLevelEntity from '@src/modules/features/pages/me/domain/MeSkillLevelEntity'

// Store
import useAppStore from '@src/store/AppStore'
import { shallow } from 'zustand/shallow'

library.add(faCircleInfo)

export interface ISkillLevelButtonProps {
  level: MeSkillLevelEntity
  children: React.ReactNode
}

const SkillLevelButton = ({ level, children }: ISkillLevelButtonProps) => {
  const { title, description, workExperience } = level

  const [isActive, setIsActive] = useState(level.type != undefined)
  const {
    addSkillFilter,
    removeSkillFilter,
    addFavSkillFilter,
    removeFavSkillFilter
  } = useAppStore(
    (state) => ({
      addSkillFilter: state.addSkillFilter,
      removeSkillFilter: state.removeSkillFilter,
      addFavSkillFilter: state.addFavSkillFilter,
      removeFavSkillFilter: state.removeFavSkillFilter
    }),
    shallow
  )

  const handleButtonClick = () => {
    setIsActive((state) => !state)

    if (level.type != undefined) {
      !isActive ? addSkillFilter(level.type) : removeSkillFilter(level.type)
    } else {
      !isActive ? addFavSkillFilter() : removeFavSkillFilter()
    }
  }

  return (
    <button
      className={`
      flex
      flex-col
      md:flex-row
      justify-center
      md:justify-start
      items-center
      gap-2
      md:gap-5
      bg-white
      rounded-xl
      border-2
      border-secondary
      p-5
      text-secondary
      font-bold
      transition ease-in-out duration-200
      ${
        isActive
          ? '-translate-x-2 -translate-y-2 shadow-custom-sm shadow-secondary'
          : 'translate-x-0 translate-y-0 shadow-none'
      }`}
      aria-label="Filter Level"
      onClick={handleButtonClick}
    >
      {children}
      <span className="flex flex-col gap-2 text-center md:text-left ">
        <span className="flex gap-2">
          <span className="text-base md:text-xl">{title}</span>
          <Tooltip text={description}>
            <FontAwesomeIcon icon={'circle-info'} size="sm" />
          </Tooltip>
        </span>

        <span className=" flex flex-col lg:flex-row md:gap-2 text-sm md:text-md font-semibold">
          {workExperience && (
            <>
              <span className="font-bold">Work Exp:</span>
              {workExperience}
            </>
          )}
        </span>
      </span>
    </button>
  )
}

export default SkillLevelButton
