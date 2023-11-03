import getAllExperience from '@src/modules/features/pages/experience/application/getAllExperience'
import { IExperienceCardProps } from './ExperienceCard'

const experience = getAllExperience()

const base: IExperienceCardProps = {
  experience: experience[0][0]
}

export const mockProps = {
  base
}
