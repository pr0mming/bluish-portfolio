'use client'

// Framer
import { m } from 'framer-motion'

// Hooks
import useArrowAnimation from '@src/hooks/animations/useArrowAnimation'

const ExperienceMiniArrow = () => {
  const { scope } = useArrowAnimation()

  return (
    <div ref={scope} className="stroke-accent mt-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="81">
        <m.path
          d="M32.828 1.172a4 4 0 0 0-5.656 0L1.716 26.627a4 4 0 0 0 5.657 5.657L30 9.657l22.627 22.627a4 4 0 0 0 5.657-5.657L32.828 1.172zM34 81V4h-8v77h8z"
          fill="transparent"
          strokeWidth="2"
          initial={{ pathLength: 0, fill: 'transparent', fillOpacity: 0 }}
        />
      </svg>
    </div>
  )
}

export default ExperienceMiniArrow
