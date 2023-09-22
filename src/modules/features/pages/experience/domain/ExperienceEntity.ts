type ExperienceEntity = {
  id: number
  position: string
  companyName: string
  companyWebsite: string
  time: {
    startDate: Date
    endDate: Date
  }
  description: string
  details?: string[]
  technologies: string[]
}

export default ExperienceEntity
