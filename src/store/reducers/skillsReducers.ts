import { IAppState, ISkillFilters } from '../state/IAppState'

import { SkillLevelEnum } from '@src/modules/features/pages/me/domain/enums/SkillLevelEnum'
import MeSkillCatalogEntity from '@src/modules/features/pages/me/domain/MeSkillCatalogEntity'

export const setSkillsFilters = (value: ISkillFilters) => ({
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
  skillsFilters: {
    ...state.skillsFilters,
    levels: [...state.skillsFilters.levels, skillLevel]
  },
  skillsFiltered: [
    ...state.initialSkills.map((item, i) => {
      return {
        ...item,
        skillList: [
          ...state.initialSkills[i].skillList.filter((skill) => {
            if (state.skillsFilters.isFavorite) {
              return (
                skill.isFavorite &&
                (skill.level === skillLevel ||
                  state.skillsFilters.levels.includes(skill.level))
              )
            }

            return (
              skill.level === skillLevel ||
              state.skillsFilters.levels.includes(skill.level)
            )
          })
        ].sort((item) => item.id)
      }
    })
  ]
})

export const removeSkillFilter = (
  skillLevel: SkillLevelEnum,
  state: IAppState
) => ({
  skillsFilters: {
    ...state.skillsFilters,
    levels: [...state.skillsFilters.levels.filter((item) => item != skillLevel)]
  },
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
  skillsFilters: {
    ...state.skillsFilters,
    isFavorite: true
  },
  skillsFiltered: [
    ...state.skillsFiltered.map((item, i) => {
      return {
        ...item,
        skillList: [
          ...state.skillsFiltered[i].skillList.filter(
            (skill) =>
              state.skillsFilters.levels.includes(skill.level) &&
              skill.isFavorite
          )
        ].sort((item) => item.id)
      }
    })
  ]
})

export const removeFavSkillFilter = (state: IAppState) => ({
  skillsFilters: {
    ...state.skillsFilters,
    isFavorite: false
  },
  skillsFiltered: [
    ...state.initialSkills.map((item, i) => {
      return {
        ...item,
        skillList: [
          ...state.initialSkills[i].skillList.filter((skill) =>
            state.skillsFilters.levels.includes(skill.level)
          )
        ].sort((item) => item.id)
      }
    })
  ]
})
