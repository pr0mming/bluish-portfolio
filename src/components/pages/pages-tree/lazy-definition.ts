import dynamic from 'next/dynamic'
import { ComponentType } from 'react'

export interface ICustomPages {
  id: string
  componentFn: ComponentType
}

// Lazy
const getCustomPages = (): ICustomPages[] => {
  return [
    {
      id: 'me',
      componentFn: dynamic(() => import('@src/components/pages/me/MePage'))
    },
    {
      id: 'experience',
      componentFn: dynamic(
        () => import('@src/components/pages/experience/ExperiencePage')
      )
    },
    {
      id: 'projects',
      componentFn: dynamic(
        () => import('@src/components/pages/projects/ProjectsPage')
      )
    }
  ]
}

export default getCustomPages
