'use client'

// Framer
import { m } from 'framer-motion'

// Hooks
import useArrowAnimation from '@src/hooks/animations/useArrowAnimation'

const ExperienceTwistedArrow = () => {
  const { scope } = useArrowAnimation()

  return (
    <div ref={scope} className="block lg:hidden stroke-accent">
      <svg xmlns="http://www.w3.org/2000/svg" width="115" height="98">
        <m.path
          d="M32.828 1.672a4 4 0 0 0-5.656 0L1.716 27.127a4 4 0 0 0 5.657 5.657L30 10.157l22.627 22.627a4 4 0 0 0 5.657-5.657L32.828 1.672zM26 4.5c0 20.13 1.27 35.057 3.567 45.941 2.276 10.79 5.669 18.145 10.368 22.507 4.964 4.605 10.802 5.363 16.458 4.262 5.436-1.059 10.99-3.871 16.066-6.722 5.314-2.985 10.039-5.964 14.617-8.121 4.635-2.184 7.971-2.927 10.347-2.365 1.929.456 4.328 2.081 6.307 7.943C105.734 73.882 107 83.385 107 98h8c0-14.884-1.265-25.429-3.69-32.613-2.451-7.259-6.38-11.83-12.045-13.17-5.218-1.235-10.741.624-15.599 2.913-4.913 2.315-10.313 5.68-15.125 8.383-5.049 2.836-9.62 5.054-13.676 5.844-3.836.746-6.857.168-9.488-2.273-2.894-2.686-5.83-8.088-7.983-18.295C35.261 38.677 34 24.37 34 4.5h-8z"
          fill="transparent"
          strokeWidth="2"
          initial={{ pathLength: 0, fill: 'transparent', fillOpacity: 0 }}
        />
      </svg>
    </div>
  )
}

export default ExperienceTwistedArrow
