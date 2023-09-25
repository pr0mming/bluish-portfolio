// Next
import dynamic from 'next/dynamic'

// React
import { ComponentType } from 'react'

export interface ICustomPages {
  id: string
  componentFn: ComponentType
}

// Lazy
const getCustomPages = (): ICustomPages[] => {
  const components = [
    {
      id: 'me',
      path: import('@src/components/pages/me/MePage')
    },
    {
      id: 'experience',
      path: import('@src/components/pages/experience/ExperiencePage')
    },
    {
      id: 'projects',
      path: import('@src/components/pages/projects/ProjectsPage')
    }
  ]

  return components.map((component) => {
    return {
      id: component.id,
      componentFn: dynamic(() => component.path)
    } as ICustomPages
  })
}

export default getCustomPages
