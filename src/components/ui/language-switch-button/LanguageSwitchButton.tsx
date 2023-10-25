'use client'

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

// Store
import useBoundStore from '@src/store/AppStore'

// i18n
import { languages } from '@src/app/i18n/settings'

library.add(faGlobe)

export interface ILanguageSwitchButtonProps {
  lang: string
  type: MenuTypeEnum
}

const LanguageSwitchButton = ({ lang, type }: ILanguageSwitchButtonProps) => {
  const [isActive, setActive] = useState(false)
  const setOpenSidebar = useBoundStore((state) => state.setOpenSidebar)

  const availableLangs = languages.filter((item) => item !== lang)

  const handleButtonClick = () => {
    if (type === MenuTypeEnum.SIDEBAR) {
      setActive((state) => !state)
    }
  }

  const handleLinkClick = () => {
    if (type === MenuTypeEnum.SIDEBAR) {
      setOpenSidebar(false)
    }
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
          aria-label="Change Language"
          variants={slashMotion}
          onClick={() => handleButtonClick()}
        >
          <FontAwesomeIcon icon={'globe'} size="2x" />
        </m.button>
        <m.div className="flex gap-2" variants={textMotion}>
          {availableLangs.map((language) => (
            <Link
              key={language}
              href={`/${language}`}
              onClick={() => handleLinkClick()}
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
