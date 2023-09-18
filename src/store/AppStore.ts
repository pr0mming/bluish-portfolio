// Zustand
import { createWithEqualityFn } from 'zustand/traditional'

// State
import { IAppState } from './state/IAppState'

// Reducers
import {
  addFavSkillFilter,
  addSkillFilter,
  removeFavSkillFilter,
  removeSkillFilter,
  setInitialSkills,
  setSkillsFilters
} from './reducers/skillsReducers'

import { setActiveMenu } from './reducers/menuReducers'
import { setOpenSidebar } from './reducers/sidebarReducers'

const useAppStore = createWithEqualityFn<IAppState>(
  (set) => ({
    isOpenSidebar: false,
    activeMenu: '',
    skillsFilters: {
      levels: [],
      isFavorite: false
    },
    initialSkills: [],
    skillsFiltered: [],
    setOpenSidebar: (value) => set(() => setOpenSidebar(value)),
    setActiveMenu: (value) => set(() => setActiveMenu(value)),

    setSkillsFilters: (value) => set(() => setSkillsFilters(value)),
    setInitialSkills: (value) => set(() => setInitialSkills(value)),
    addSkillFilter: (skillLevel) =>
      set((state) => addSkillFilter(skillLevel, state)),
    removeSkillFilter: (skillLevel) =>
      set((state) => removeSkillFilter(skillLevel, state)),
    addFavSkillFilter: () => set((state) => addFavSkillFilter(state)),
    removeFavSkillFilter: () => set((state) => removeFavSkillFilter(state))
  }),
  Object.is
)

export default useAppStore
