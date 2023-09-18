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
import useAppStore from '@src/store/AppStore'
import { shallow } from 'zustand/shallow'

// Modules
import getAllMeSkillsCatalog from '@src/modules/features/pages/me/application/getAllMeSkillsCatalog'
import getActiveSkillFilters from '@src/modules/features/pages/me/application/getActiveSkillFilters'

// Components
import SkillCategory from '../skill-category/SkillCategory'

library.add(faPencil, faBrain, faBrain, faDatabase, faCloud, faPuzzlePiece)

const SkillsList = () => {
  const { setSkillsFilters, skills, setInitialSkills } = useAppStore(
    (state) => ({
      setSkillsFilters: state.setSkillsFilters,
      skills: state.skillsFiltered,
      setInitialSkills: state.setInitialSkills
    }),
    shallow
  )

  const defaultFilters = useMemo(() => getActiveSkillFilters(), [])
  const initialSkills = useMemo(() => getAllMeSkillsCatalog(), [])

  useEffect(() => {
    setSkillsFilters(defaultFilters)
    setInitialSkills(initialSkills)
  }, [defaultFilters, initialSkills, setSkillsFilters, setInitialSkills])

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
