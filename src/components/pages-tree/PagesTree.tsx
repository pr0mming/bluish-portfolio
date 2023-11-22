'use client'

// Components
import NavigationEvents from '@src/components/abstraction/navigation-events/NavigationEvents'
import PageWrapper from './PageWrapper'

// Modules
import getAllMenus from '@src/modules/features/ui/navbar/application/getAllMenus'
import { MenuEnum } from '@src/modules/features/ui/navbar/domain/enums/MenuEnum'

// i18n
import { useClientTranslation } from '@src/hooks/i18n/useClientTranslation'
import { defaultNS } from '@src/app/i18n/settings'

// Components
import MePage from '@src/components/pages/me/MePage'
import ExperiencePage from '@src/components/pages/experience/ExperiencePage'
import ProjectsPage from '@src/components/pages/projects/ProjectsPage'

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
        menuId={menus.find((menu) => menu.type === MenuEnum.ME)?.text ?? ''}
      >
        <MePage lang={lang} />
      </PageWrapper>

      <PageWrapper
        menuId={
          menus.find((menu) => menu.type === MenuEnum.EXPERIENCE)?.text ?? ''
        }
      >
        <ExperiencePage lang={lang} />
      </PageWrapper>

      <PageWrapper
        menuId={
          menus.find((menu) => menu.type === MenuEnum.PROJECTS)?.text ?? ''
        }
      >
        <ProjectsPage lang={lang} />
      </PageWrapper>
    </div>
  )
}

export default PagesTree
