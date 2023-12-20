// Next
import Image from 'next/image'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, library } from '@fortawesome/fontawesome-svg-core'
import {
  faEarthAmericas,
  faBriefcase,
  faBrain,
  faUserGroup,
  faFire
} from '@fortawesome/free-solid-svg-icons'

// Modules
import getAllMeFeatures from '@src/modules/features/pages/me/application/getAllMeFeatures'

// Hooks
import { useClientTranslation } from '@src/hooks/i18n/useClientTranslation'

library.add(faEarthAmericas, faBriefcase, faBrain, faUserGroup, faFire)

export interface IAboutMeProps {
  lang: string
}

const AboutMe = ({ lang }: IAboutMeProps) => {
  const meFeatures = getAllMeFeatures()

  const { t } = useClientTranslation(lang, 'me')

  return (
    <article>
      <h3 className="text-secondary text-2xl lg:text-3xl text-center font-bold tracking-wider uppercase mb-10">
        {t('title')}
      </h3>
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="mx-auto">
          <Image
            src="/me/just-me-article.png"
            alt="Just Me Again"
            className="rounded-xl border-2 border-secondary shadow-custom-sm shadow-secondary"
            width={350}
            height={525}
          />
        </div>
        <ul className="list-none mx-2 md:mx-6">
          {meFeatures.map((feature) => (
            <li
              key={feature.id}
              className="flex my-10 text-md md:text-xl font-medium text-secondary"
            >
              <span className="self-center me-6">
                <FontAwesomeIcon
                  className="scale-125 md:scale-150"
                  icon={feature.icon as IconName}
                />
              </span>
              <p dangerouslySetInnerHTML={{ __html: t(feature.textKey) }} />
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default AboutMe
