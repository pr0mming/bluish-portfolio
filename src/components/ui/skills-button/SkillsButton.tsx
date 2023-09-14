// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import Tooltip from '../tooltip/Tooltip'

library.add(faCircleInfo)

export interface ISkillsButtonProps {
  title: string
  description: string
  workExperience?: string
  ariaLabel: string
  children: React.ReactNode
}

const SkillsButton = ({
  title,
  description,
  workExperience,
  ariaLabel,
  children
}: ISkillsButtonProps) => {
  return (
    <button
      className={`
      flex
      flex-col
      md:flex-row
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
      hover:-translate-x-2
      hover:-translate-y-2
      hover:shadow-custom-sm
      hover:shadow-secondary`}
      aria-label={ariaLabel}
    >
      {children}
      <span className="flex flex-col gap-2 text-center md:text-left ">
        <span className="flex gap-2">
          <span className="text-lg md:text-xl">{title}</span>
          <Tooltip text={description}>
            <FontAwesomeIcon icon={['fas', 'circle-info']} size="lg" />
          </Tooltip>
        </span>

        <span className=" flex flex-col lg:flex-row md:gap-2 font-semibold">
          {workExperience && (
            <>
              <span className="font-bold text-md">Work Exp:</span>
              {workExperience}
            </>
          )}
        </span>
      </span>
    </button>
  )
}

export default SkillsButton
