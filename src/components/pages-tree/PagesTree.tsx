'use client'

// Next
import dynamic from 'next/dynamic'

// Components
import NavigationEvents from '@src/components/abstraction/navigation-events/NavigationEvents'
import PageLoading from './PageLoading'
import PageWrapper from './PageWrapper'

// Modules
import getAllMenus from '@src/modules/features/ui/navbar/application/getAllMenus'
import { MenuEnum } from '@src/modules/features/ui/navbar/domain/enums/MenuEnum'

// i18n
import { useClientTranslation } from '@src/hooks/i18n/useClientTranslation'
import { defaultNS } from '@src/app/i18n/settings'

// Lazy
const menus = getAllMenus()

const MePage = dynamic(() => import('@src/components/pages/me/MePage'), {
  loading: () => (
    <PageLoading
      menuId={menus.find((menu) => menu.type === MenuEnum.ME)?.text ?? ''}
    />
  )
})
const ExperiencePage = dynamic(
  () => import('@src/components/pages/experience/ExperiencePage'),
  {
    loading: () => (
      <PageLoading
        menuId={
          menus.find((menu) => menu.type === MenuEnum.EXPERIENCE)?.text ?? ''
        }
      />
    )
  }
)
const ProjectsPage = dynamic(
  () => import('@src/components/pages/projects/ProjectsPage'),
  {
    loading: () => (
      <PageLoading
        menuId={
          menus.find((menu) => menu.type === MenuEnum.PROJECTS)?.text ?? ''
        }
      />
    )
  }
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

      <PageWrapper lang={lang} menuId="me" menuOrder={1} PageFn={MePage} />

      <PageWrapper
        lang={lang}
        menuId="experience"
        menuOrder={2}
        PageFn={ExperiencePage}
      />

      <PageWrapper
        lang={lang}
        menuId="projects"
        menuOrder={3}
        PageFn={ProjectsPage}
      />
    </div>
  )
}

export default PagesTree
