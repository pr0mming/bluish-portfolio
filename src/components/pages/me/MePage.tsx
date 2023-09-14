// Next
import Image from 'next/image'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, library } from '@fortawesome/fontawesome-svg-core'
import {
  faEarthAmericas,
  faBriefcase,
  faBrain,
  faBook,
  faDumbbell,
  faGuitar
} from '@fortawesome/free-solid-svg-icons'

// Modules
import getAllMeFeatures from '@src/modules/features/pages/me/application/getAllMeFeatures'

library.add(faEarthAmericas, faBriefcase, faBrain, faBook, faDumbbell, faGuitar)

const meFeatures = getAllMeFeatures()

const MePage = () => {
  return (
    <section className="max-w-7xl bg-white bg-opacity-95 rounded-xl border-2 border-secondary shadow-custom-md shadow-secondary py-14 px-10 md:px-20 mx-10">
      <article>
        <h3 className="text-secondary text-3xl text-center font-bold tracking-wider uppercase mb-5">
          About Me
        </h3>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="p-0 md:p-10">
            <Image
              src="/me/just-me-article.png"
              alt="Just Me Again"
              className="w-full h-auto rounded-xl border-2 border-secondary shadow-custom-sm shadow-secondary"
              width={373}
              height={581}
            />
          </div>
          <ul className="list-none">
            {meFeatures.map((feature) => (
              <li
                key={feature.id}
                className="flex my-6 text-md md:text-xl font-medium text-secondary"
              >
                <span className="self-center me-6 scale-125 md:scale-150">
                  <FontAwesomeIcon icon={feature.icon as IconName} />
                </span>
                <p dangerouslySetInnerHTML={{ __html: feature.text }} />
              </li>
            ))}
          </ul>
        </section>
      </article>

      <article className="mt-20">
        <h3 className="text-secondary text-3xl text-center font-bold tracking-wider uppercase mb-5">
          Tech Skills
        </h3>
        <p className="text-center text-md md:text-xl font-semibold text-secondary">
          I&apos;ve worked with some skills for a longer time than other, also
          there are skills that a love to use
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center"></section>
      </article>
    </section>
  )
}

export default MePage
