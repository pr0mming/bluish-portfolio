// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPencil,
  faBrain,
  faDatabase,
  faCloud,
  faPuzzlePiece,
  faFaceFlushed
} from '@fortawesome/free-solid-svg-icons'

// Components
import SkillCategory from '../skill-category/SkillCategory'
import SkillsListEmpty from './skills-list-empty/SkillsListEmpty'

// Hooks
import useSkillsFilter from '@src/hooks/useSkillsFilter'

library.add(
  faPencil,
  faBrain,
  faBrain,
  faDatabase,
  faCloud,
  faPuzzlePiece,
  faFaceFlushed
)

const SkillsList = () => {
  const { skills, isEmpty } = useSkillsFilter()

  if (isEmpty) {
    return <SkillsListEmpty />
  }

  return (
    <section className="flex flex-col justify-center gap-16">
      {skills.map((item) => {
        if (item.skillList.length) {
          return (
            <SkillCategory
              key={item.id}
              categoryType={item.categoryType}
              skills={item.skillList}
            />
          )
        }

        return null
      })}
    </section>
  )
}

export default SkillsList
