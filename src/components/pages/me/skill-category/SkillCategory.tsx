// React
import { useMemo } from 'react'

// Framer
import { AnimatePresence } from 'framer-motion'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'

// Modules
import MeSkillEntity from '@src/modules/features/pages/me/domain/MeSkillEntity'
import getAllMeSkillCategories from '@src/modules/features/pages/me/application/getAllMeSkillCategories'
import { SkillCategoryEnum } from '@src/modules/features/pages/me/domain/enums/SkillCategoryEnum'

// Components
import SkillCard from '@src/components/ui/skill-card/SkillCard'

export interface ISkillCategoryProps {
  categoryType: SkillCategoryEnum
  skills: MeSkillEntity[]
}

const SkillCategory = ({ categoryType, skills }: ISkillCategoryProps) => {
  const category = useMemo(
    () =>
      getAllMeSkillCategories().find(
        (category) => category.type === categoryType
      ),
    [categoryType]
  )

  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="flex justify-center items-center gap-5 flex-nowrap text-secondary">
        <h4 className="bold text-center text-2xl font-bold uppercase tracking-wider">
          {category?.name}
        </h4>
        <FontAwesomeIcon
          className="scale-125 md:scale-150"
          icon={category?.icon as IconName}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-6 mx-2 lg:mx-20">
        <AnimatePresence>
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default SkillCategory
