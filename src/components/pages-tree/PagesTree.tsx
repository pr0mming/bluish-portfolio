'use client'

// Next
import dynamic from 'next/dynamic'

// Components
import NavigationEvents from '@src/components/abstraction/navigation-events/NavigationEvents'
import PageWrapper from './PageWrapper'

// Modules
import getAllMenus from '@src/modules/features/ui/navbar/application/getAllMenus'
import { MenuEnum } from '@src/modules/features/ui/navbar/domain/enums/MenuEnum'

// i18n
import { useClientTranslation } from '@src/hooks/i18n/useClientTranslation'
import { defaultNS } from '@src/app/i18n/settings'

// Lazy Components
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
  const menus = getAllMenus()

  // Little workaround to solve the changeLanguage call (async)
  // Before the wrong language reaches the other client components :(
  useClientTranslation(lang, defaultNS)

  return (
    <div className="lg:mt-10">
      <NavigationEvents />

      <PageWrapper
        lang={lang}
        menuId={menus.find((menu) => menu.type === MenuEnum.ME)?.text ?? ''}
        PageFn={MePage}
      />

      <PageWrapper
        lang={lang}
        menuId={
          menus.find((menu) => menu.type === MenuEnum.EXPERIENCE)?.text ?? ''
        }
        PageFn={ExperiencePage}
      />

      <PageWrapper
        lang={lang}
        menuId={
          menus.find((menu) => menu.type === MenuEnum.PROJECTS)?.text ?? ''
        }
        PageFn={ProjectsPage}
      />
    </div>
  )
}

export default PagesTree
