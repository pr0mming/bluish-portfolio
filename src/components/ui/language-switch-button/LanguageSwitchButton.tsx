// Next
import Link from 'next/link'

// React
import { useState } from 'react'

// Framer
import { m } from 'framer-motion'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

// Modules
import { MenuTypeEnum } from '@src/modules/features/ui/navbar/domain/enums/MenuTypeEnum'

// Extensions
import { slashMotion, textMotion } from './LanguageSwitchButton.animations'

// i18n
import { languages } from '@src/app/i18n/settings'

library.add(faGlobe)

export interface ILanguageSwitchButtonProps {
  lang: string
  type: MenuTypeEnum
}

const LanguageSwitchButton = ({ lang, type }: ILanguageSwitchButtonProps) => {
  const [isActive, setActive] = useState(false)

  const availableLangs = languages.filter((item) => item !== lang)

  const handleClick = () => {
    if (type === MenuTypeEnum.SIDEBAR) setActive((state) => !state)
  }

  return (
    <m.div
      className="relative"
      initial={isActive ? 'active' : 'rest'}
      whileHover="active"
      animate={isActive ? 'active' : 'rest'}
    >
      <div className="flex items-center p-3">
        <m.button
          type="button"
          className="relative text-white text-opacity-70"
          variants={slashMotion}
          onClick={() => handleClick}
        >
          <FontAwesomeIcon icon={'globe'} size="2x" />
        </m.button>
        <m.div className="flex gap-2" variants={textMotion}>
          {availableLangs.map((language) => (
            <Link
              key={language}
              href={`/${language}`}
              className="transition ease-in-out delay-50 uppercase tracking-widest text-xs lg:text-lg font-medium hover:scale-125 hover:text-white duration-200"
            >
              {language}
            </Link>
          ))}
        </m.div>
      </div>
    </m.div>
  )
}

export default LanguageSwitchButton
