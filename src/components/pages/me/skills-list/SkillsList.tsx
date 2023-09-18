'use client'

// React
import { useEffect, useMemo } from 'react'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPencil,
  faBrain,
  faDatabase,
  faCloud,
  faPuzzlePiece,
  faFaceFlushed
} from '@fortawesome/free-solid-svg-icons'

// Store
import useAppStore from '@src/store/AppStore'
import { shallow } from 'zustand/shallow'

// Modules
import getAllMeSkillsCatalog from '@src/modules/features/pages/me/application/getAllMeSkillsCatalog'
import getActiveSkillFilters from '@src/modules/features/pages/me/application/getActiveSkillFilters'

// Components
import SkillCategory from '../skill-category/SkillCategory'

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
  const { skills, setSkillsFilters, setInitialSkills } = useAppStore(
    (state) => ({
      skills: state.skillsFiltered,
      setSkillsFilters: state.setSkillsFilters,
      setInitialSkills: state.setInitialSkills
    }),
    shallow
  )

  const defaultFilters = useMemo(() => getActiveSkillFilters(), [])
  const initialSkills = useMemo(() => getAllMeSkillsCatalog(), [])
  const isEmpty = useMemo(
    () => skills.reduce((prev, curr) => prev + curr.skillList.length, 0) === 0,
    [skills]
  )

  useEffect(() => {
    setSkillsFilters({ levels: defaultFilters, isFavorite: false })
    setInitialSkills(initialSkills)
  }, [defaultFilters, initialSkills, setSkillsFilters, setInitialSkills])

  if (isEmpty) {
    return (
      <section className="flex gap-2 justify-center text-center text-secondary font-medium text-xl">
        <p>There is nothing</p>
        <FontAwesomeIcon icon={'face-flushed'} className="text-3xl" />
      </section>
    )
  }

  return (
    <section className="flex flex-col justify-center gap-20">
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
