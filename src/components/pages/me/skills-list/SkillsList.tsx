'use client'

// React
import { useEffect, useMemo } from 'react'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPencil,
  faBrain,
  faDatabase,
  faCloud,
  faPuzzlePiece
} from '@fortawesome/free-solid-svg-icons'

// Store
import useStore from '@src/store/AppStore'

// Modules
import getAllMeSkillsCatalog from '@src/modules/features/pages/me/application/getAllMeSkillsCatalog'

// Components
import SkillCategory from '../skill-category/SkillCategory'
import { getActiveSkillFilters } from '@src/modules/features/pages/me/application/getActiveSkillFilters'

library.add(faPencil, faBrain, faBrain, faDatabase, faCloud, faPuzzlePiece)

const SkillsList = () => {
  const [setSkillsFilters, skills, setInitialSkills] = useStore((state) => [
    state.setSkillsFilters,
    state.skillsFiltered,
    state.setInitialSkills
  ])

  const defaultFilters = useMemo(() => getActiveSkillFilters(), [])
  const initialSkills = useMemo(() => getAllMeSkillsCatalog(), [])

  useEffect(() => {
    console.log(1)
    setSkillsFilters(defaultFilters)

    setInitialSkills(initialSkills)
  }, [setSkillsFilters, setInitialSkills])

  return (
    <section className="flex flex-col justify-center gap-20">
      {skills.map((item) => (
        <SkillCategory
          key={item.id}
          categoryType={item.categoryType}
          skills={item.skillList}
        />
      ))}
    </section>
  )
}

export default SkillsList
