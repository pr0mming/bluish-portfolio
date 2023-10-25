'use client'

// Next
import dynamic from 'next/dynamic'

// Components
import NavigationEvents from '@src/components/abstraction/navigation-events/NavigationEvents'
import PageWrapper from './PageWrapper'

// i18n
import { useClientTranslation } from '@src/hooks/i18n/useClientTranslation'
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
  // Little workaround to solve the changeLanguage call (async)
  // Before the wrong language reaches the other client components :(
  useClientTranslation(lang, defaultNS)

  return (
    <div className="lg:mt-10">
      <NavigationEvents />

      <PageWrapper menuId="me">
        <MePage lang={lang} />
      </PageWrapper>

      <PageWrapper menuId="experience">
        <ExperiencePage lang={lang} />
      </PageWrapper>

      <PageWrapper menuId="projects">
        <ProjectsPage lang={lang} />
      </PageWrapper>
    </div>
  )
}

export default PagesTree
