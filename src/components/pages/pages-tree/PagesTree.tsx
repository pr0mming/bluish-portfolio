'use client'

// Next
import dynamic from 'next/dynamic'

// React
import { useEffect } from 'react'

// Components
import PageWrapper from './PageWrapper'

// Store
import useAppStore from '@src/store/AppStore'

// Hooks
import usePageHash from '@src/hooks/usePageHash'
import { useClientTranslation } from '@src/hooks/i18n/useClientTranslation'

// i18n
import { defaultNS } from '@src/app/i18n/settings'

// Lazy
const MePage = dynamic(() => import('@src/components/pages/me/MePage'))
const ExperiencePage = dynamic(
  () => import('@src/components/pages/experience/ExperiencePage')
)
const ProjectsPage = dynamic(
  () => import('@src/components/pages/projects/ProjectsPage')
)

export interface IPageTreeProps {
  lang: string
}

const PagesTree = ({ lang }: IPageTreeProps) => {
  const setActiveMenu = useAppStore((state) => state.setActiveMenu)

  const { menu } = usePageHash()

  // Little workaround to solve the changeLanguage call (async)
  // Before the wrong language reaches the other client components :(
  useClientTranslation(lang, defaultNS)

  useEffect(() => {
    setActiveMenu(menu)
  }, [menu, setActiveMenu])

  return (
    <div className="lg:mt-10">
      <PageWrapper lang={lang} loadLazy={false} PageFn={MePage} menuId="me" />

      <PageWrapper
        lang={lang}
        loadLazy={false}
        PageFn={ExperiencePage}
        menuId="experience"
      />

      <PageWrapper
        lang={lang}
        loadLazy={true}
        PageFn={ProjectsPage}
        menuId="projects"
      />
    </div>
  )
}

export default PagesTree
