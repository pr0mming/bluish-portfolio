// React
import { Fragment } from 'react'

// Components
import FloatingIcon from '../floating-icon/FloatingIcon'

// Modules
import getAllFloatingIcons from '@src/modules/features/pages/home/application/getAllFloatingIcons'

const HomeIconsPanel = () => {
  const icons = getAllFloatingIcons()

  return (
    <section className="relative flex flex-wrap justify-center items-center gap-6">
      {icons.map((icon, i) => (
        <Fragment key={icon.iconPath}>
          <FloatingIcon icon={icon} delayOffset={i} />
        </Fragment>
      ))}
    </section>
  )
}

export default HomeIconsPanel
