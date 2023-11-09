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
import {
  addPageLoaded,
  removePageLoaded,
  setActiveMenuToScroll
} from './reducers/pageReducers'

// I decided to separate the state using the Slices approach
const createAppSlice: StateCreator<
  IAppSlice & ISkillsSlice,
  [],
  [],
  IAppSlice
> = (set) => ({
  isOpenSidebar: false,
  activeMenu: '',
  activeMenuToScroll: '',
  pagesLoaded: ['home'],
  setOpenSidebar: (value) => set(() => setOpenSidebar(value)),
  setActiveMenu: (value) => set(() => setActiveMenu(value)),
  setActiveMenuToScroll: (value) => set(() => setActiveMenuToScroll(value)),
  addPageLoaded: (value) => set((state) => addPageLoaded(value, state)),
  removePageLoaded: (value) => set((state) => removePageLoaded(value, state))
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
