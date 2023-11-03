import getAllProjects from '@src/modules/features/pages/projects/application/getAllProjects'
import { IProjectCardProps } from './ProjectCard'

const projects = getAllProjects()

const base: IProjectCardProps = {
  project: projects[0]
}

export const mockProps = {
  base
}
