import { IAppState } from '../state/IAppState'

import { SkillLevelEnum } from '@src/modules/features/pages/me/domain/enums/SkillLevelEnum'
import MeSkillCatalogEntity from '@src/modules/features/pages/me/domain/MeSkillCatalogEntity'

export const setSkillsFilters = (value: SkillLevelEnum[]) => ({
  skillsFilters: value
})

export const setInitialSkills = (value: MeSkillCatalogEntity[]) => ({
  initialSkills: value,
  skillsFiltered: value
})

export const addSkillFilter = (
  skillLevel: SkillLevelEnum,
  state: IAppState
) => ({
  skillsFilters: [...state.skillsFilters, skillLevel],
  skillsFiltered: [
    ...state.initialSkills.map((item, i) => {
      return {
        ...item,
        skillList: [
          ...state.initialSkills[i].skillList.filter(
            (skill) =>
              skill.level === skillLevel ||
              state.skillsFilters.includes(skill.level)
          )
        ].sort((item) => item.id)
      }
    })
  ]
})

export const removeSkillFilter = (
  skillLevel: SkillLevelEnum,
  state: IAppState
) => ({
  skillsFilters: [...state.skillsFilters.filter((item) => item != skillLevel)],
  skillsFiltered: [
    ...state.skillsFiltered.map((item, i) => {
      return {
        ...item,
        skillList: [
          ...state.skillsFiltered[i].skillList.filter(
            (skill) => skill.level != skillLevel
          )
        ].sort((item) => item.id)
      }
    })
  ]
})

export const addFavSkillFilter = (state: IAppState) => ({
  skillsFiltered: [
    ...state.skillsFiltered.map((item, i) => {
      return {
        ...item,
        skillList: [
          ...state.skillsFiltered[i].skillList.filter(
            (skill) => skill.isFavorite
          )
        ].sort((item) => item.id)
      }
    })
  ]
})

export const removeFavSkillFilter = (state: IAppState) => ({
  skillsFiltered: [
    ...state.initialSkills.map((item, i) => {
      return {
        ...item,
        skillList: [
          ...state.initialSkills[i].skillList.filter((skill) =>
            state.skillsFilters.includes(skill.level)
          )
        ].sort((item) => item.id)
      }
    })
  ]
})
