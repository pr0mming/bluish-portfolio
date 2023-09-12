// Next
import Image from 'next/image'

import FloatingIconEntity from '@src/modules/ui/navbar/domain/entities/FloatingIconEntity'

export interface FloatingIconsPanelProps {
  className: string
  icons: FloatingIconEntity[]
}

const FloatingIconsPanel = ({ className, icons }: FloatingIconsPanelProps) => {
  return (
    <div className={`absolute flex flex-row flex-wrap gap-1 ${className}`}>
      {icons.map((icon) => (
        <Image
          key={icon.iconPath}
          className="flex-1"
          style={{
            marginTop: icon.position.top,
            marginBottom: icon.position.bottom,
            marginLeft: icon.position.left,
            marginRight: icon.position.right
          }}
          src={icon.iconPath}
          alt="Tech Icon"
          width={25}
          height={25}
        />
      ))}
    </div>
  )
}

export default FloatingIconsPanel
