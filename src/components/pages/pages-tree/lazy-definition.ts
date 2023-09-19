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
    }
  ]
}

export default getCustomPages
