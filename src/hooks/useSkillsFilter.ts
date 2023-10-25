'use client'

// React
import { useEffect, useMemo } from 'react'

// Modules
import getAllMeSkillsCatalog from '@src/modules/features/pages/me/application/getAllMeSkillsCatalog'
import getActiveSkillFilters from '@src/modules/features/pages/me/application/getActiveSkillFilters'

// Store
import { shallow } from 'zustand/shallow'
import useBoundStore from '@src/store/AppStore'

/**
 * This hook is only to manage the filters on the Me Page with the skills cards
 * and the hook uses the data from the Store
 * @returns the new skills filtered and a flag to mark if the filter is empty
 */
const useSkillsFilter = () => {
  const { skills, setSkillsFilters, setInitialSkills } = useBoundStore(
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
