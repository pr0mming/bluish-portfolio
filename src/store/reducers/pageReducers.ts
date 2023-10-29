import { IAppSlice } from '../state/IAppSlice'

export const setActiveMenuToScroll = (value: string) => ({
  activeMenuToScroll: value
})

export const addPageLoaded = (value: string, state: IAppSlice) => ({
  pagesLoaded:
    state.pagesLoaded.indexOf(value) === -1
      ? [...state.pagesLoaded, value]
      : [...state.pagesLoaded]
})

export const removePageLoaded = (value: string, state: IAppSlice) => ({
  pagesLoaded: state.pagesLoaded.filter((item) => item !== value)
})
