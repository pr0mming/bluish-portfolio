// Modules
import getAllProjects from '@src/modules/features/pages/projects/application/getAllProjects'

// i18n
import { useClientTranslation } from '../useClientTranslation'

const useProjectTranslation = (lang: string) => {
  const projects = getAllProjects()

  const { t } = useClientTranslation(lang, 'projects')

  // I reuse the same object to translate all the necessary keys
  return {
    title: t('title'),
    projects: projects.map((project) => ({
      ...project,
      title: t(project.title),
      description: t(project.description)
    }))
  }
}

export default useProjectTranslation
