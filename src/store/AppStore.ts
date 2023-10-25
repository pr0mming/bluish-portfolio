// Zustand
import { createWithEqualityFn } from 'zustand/traditional'

// State
import { IAppSlice } from './state/IAppSlice'
import { ISkillsSlice } from './state/ISkillsSlice'

// Reducers
import { setActiveMenu } from './reducers/menuReducers'
import { setOpenSidebar } from './reducers/sidebarReducers'

import {
  addFavSkillFilter,
  addSkillFilter,
  removeFavSkillFilter,
  removeSkillFilter,
  setInitialSkills,
  setSkillsFilters
} from './reducers/skillsReducers'

// Zustand
import { StateCreator } from 'zustand/vanilla'

// I decided to separate the state using the Slices approach
const createAppSlice: StateCreator<
  IAppSlice & ISkillsSlice,
  [],
  [],
  IAppSlice
> = (set) => ({
  isOpenSidebar: false,
  activeMenu: '',
  setOpenSidebar: (value) => set(() => setOpenSidebar(value)),
  setActiveMenu: (value) => set(() => setActiveMenu(value))
})

const createSkillsSlice: StateCreator<
  IAppSlice & ISkillsSlice,
  [],
  [],
  ISkillsSlice
> = (set) => ({
  skillsFilters: {
    levels: [],
    isFavorite: false
  },
  initialSkills: [],
  skillsFiltered: [],
  setSkillsFilters: (value) => set(() => setSkillsFilters(value)),
  setInitialSkills: (value) => set(() => setInitialSkills(value)),
  addSkillFilter: (skillLevel) =>
    set((state) => addSkillFilter(skillLevel, state)),
  removeSkillFilter: (skillLevel) =>
    set((state) => removeSkillFilter(skillLevel, state)),
  addFavSkillFilter: () => set((state) => addFavSkillFilter(state)),
  removeFavSkillFilter: () => set((state) => removeFavSkillFilter(state))
})

// For using those slices we need to mix them using it
const useBoundStore = createWithEqualityFn<IAppSlice & ISkillsSlice>()(
  (...a) => ({
    ...createAppSlice(...a),
    ...createSkillsSlice(...a)
  }),
  Object.is
)

export default useBoundStore
