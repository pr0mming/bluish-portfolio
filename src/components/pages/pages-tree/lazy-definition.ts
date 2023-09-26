export interface ICustomPages {
  id: string
  /* eslint-disable */

  componentFn: Promise<any>
}

// Lazy
const getCustomPages = (): ICustomPages[] => {
  return [
    {
      id: 'me',
      componentFn: import('@src/components/pages/me/MePage')
    },
    {
      id: 'experience',
      componentFn: import('@src/components/pages/experience/ExperiencePage')
    },
    {
      id: 'projects',
      componentFn: import('@src/components/pages/projects/ProjectsPage')
    }
  ]
}

export default getCustomPages
