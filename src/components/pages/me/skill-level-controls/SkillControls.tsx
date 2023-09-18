// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, library } from '@fortawesome/fontawesome-svg-core'
import {
  faFaceSmile,
  faFaceLaughBeam,
  faFaceKiss,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

// Modules
import getAllMeSkillLevels from '@src/modules/features/pages/me/application/getAllMeSkillLevels'

// Components
import SkillLevelButton from '@src/components/ui/skills-level-button/SkillLevelButton'

library.add(faFaceSmile, faFaceLaughBeam, faFaceKiss, faHeart)

const SkillLevelControls = () => {
  const skillLevels = getAllMeSkillLevels()

  return (
    <article className="mt-10">
      <h3 className="text-secondary text-3xl text-center font-bold tracking-wider uppercase mb-5">
        Tech Skills
      </h3>
      <p className="text-center text-md md:text-xl font-semibold text-secondary">
        I&apos;ve worked with some skills for a longer time than other, also
        there are skills that a love to use...
        <br />
        If you want you can filter them by:
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 w-fit items-stretch mx-auto my-10">
        {skillLevels.map((level) => (
          <SkillLevelButton key={level.id} level={level}>
            <FontAwesomeIcon icon={level.icon as IconName} size="2x" />
          </SkillLevelButton>
        ))}
      </section>
    </article>
  )
}

export default SkillLevelControls
