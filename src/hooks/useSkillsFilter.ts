'use client'

// React
import { useEffect, useMemo } from 'react'

// Modules
import getAllMeSkillsCatalog from '@src/modules/features/pages/me/application/getAllMeSkillsCatalog'
import getActiveSkillFilters from '@src/modules/features/pages/me/application/getActiveSkillFilters'

// Store
import useAppStore from '@src/store/AppStore'
import { shallow } from 'zustand/shallow'

const useSkillsFilter = () => {
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

  return { skills, isEmpty }
}

export default useSkillsFilter
