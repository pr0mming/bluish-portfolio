type ExperienceEntity = {
  id: number
  position: string
  companyName: string
  companyWebsite: string
  time: {
    startDate: Date
    endDate: Date
  }
  timeStr?: string
  description: string
  detailsLabel: string
  details?: string[]
  technologies: string[]
}

export default ExperienceEntity
