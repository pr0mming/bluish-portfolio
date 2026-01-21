'use client'

// Framer
import * as m from "motion/react-m"

// Hooks
import useArrowAnimation from '@src/hooks/animations/useArrowAnimation'

export interface IExperienceCurvedArrowProps {
  isFlipped: boolean
}

const ExperienceCurvedArrow = ({ isFlipped }: IExperienceCurvedArrowProps) => {
  const { scope } = useArrowAnimation()

  return (
    <div
      ref={scope}
      className="relative hidden lg:block -bottom-16 pe-2 stroke-accent"
      style={{
        transform: isFlipped ? 'scaleX(-1)' : 'none'
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="274" height="321">
        <m.path
          d="M1.172 27.172a4 4 0 0 0 0 5.656l25.455 25.456a4 4 0 0 0 5.657-5.657L9.657 30 32.284 7.373a4 4 0 1 0-5.657-5.657L1.172 27.172zM4 34c144.368 0 262 128.148 262 287h8C274 158.422 153.447 26 4 26v8z"
          fill="transparent"
          strokeWidth="2"
          initial={{ pathLength: 0, fill: 'transparent', fillOpacity: 0 }}
        />
      </svg>
    </div>
  )
}

export default ExperienceCurvedArrow
