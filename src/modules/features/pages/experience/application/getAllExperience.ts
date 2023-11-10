import ExperienceEntity from '../domain/ExperienceEntity'

const getAllExperience = (): ExperienceEntity[][] => {
  return [
    [
      {
        id: 1,
        position: 'sixthExperience.position',
        companyName: 'Sofka Technologies',
        companyWebsite: 'https://www.sofka.com.co',
        time: {
          startDate: new Date(2023, 0, 1),
          endDate: new Date()
        },
        description: 'sixthExperience.description',
        detailsLabel: 'detailsLabel',
        details: ['sixthExperience.details.first'],
        technologies: [
          '.NET Framework',
          'C#',
          'VB.NET',
          'Bootstrap',
          'JavaScript',
          'jQuery',
          'MS SQL Server',
          'ASMX',
          'Azure DevOps'
        ]
      }
    ],
    [
      {
        id: 2,
        position: 'fifthExperience.position',
        companyName: 'Double V Partners',
        companyWebsite: 'https://doublevpartners.com',
        time: {
          startDate: new Date(2022, 3, 1),
          endDate: new Date(2023, 0, 1)
        },
        description: 'fifthExperience.description',
        detailsLabel: 'detailsLabel',
        details: [
          'fifthExperience.details.first',
          'fifthExperience.details.second'
        ],
        technologies: [
          'Next.js',
          'Tailwind CSS',
          'MUI',
          'Angular',
          'NgRx',
          'Angular Material',
          'Golang',
          'Solidity',
          'Firebase Authentication',
          'Mongo DB',
          'AWS Lambda'
        ]
      },
      {
        id: 3,
        position: 'fourthExperience.position',
        companyName: 'Double V Partners',
        companyWebsite: 'https://doublevpartners.com',
        time: {
          startDate: new Date(2021, 9, 1),
          endDate: new Date(2022, 2, 1)
        },
        description: 'fourthExperience.description',
        detailsLabel: 'detailsLabel',
        details: [
          'fourthExperience.details.first',
          'fourthExperience.details.second'
        ],
        technologies: [
          'Angular',
          'Bootstrap',
          'Golang',
          '.NET',
          'C#',
          'Microservices',
          'Mongo DB',
          'Azure DevOps',
          'CQRS',
          'Ocelot',
          'Clean Architecture',
          'gRPC'
        ]
      }
    ],
    [
      {
        id: 4,
        position: 'thirdExperience.position',
        companyName: 'Optima Corporation',
        companyWebsite: 'https://optima.net.co',
        time: {
          startDate: new Date(2021, 2, 1),
          endDate: new Date(2021, 9, 1)
        },
        description: 'thirdExperience.description',
        detailsLabel: 'detailsLabel',
        details: [
          'thirdExperience.details.first',
          'thirdExperience.details.second'
        ],
        technologies: [
          'Angular',
          'Angular Material',
          'TypeScript',
          'Bootstrap',
          'PrimeNG',
          '.NET Core',
          'C#',
          'Firebase Realtime',
          'Oracle Database',
          'Azure DevOps',
          'Gitflow'
        ]
      }
    ],
    [
      {
        id: 5,
        position: 'secondExperience.position',
        companyName: 'UTAP',
        companyWebsite: 'https://www.utap.edu.co',
        time: {
          startDate: new Date(2020, 0, 1),
          endDate: new Date(2021, 1, 1)
        },
        description: 'secondExperience.description',
        detailsLabel: 'detailsLabel',
        details: ['secondExperience.details.first'],
        technologies: [
          '.NET Framework',
          'C#',
          'MS SQL Server',
          'RDLC',
          'WCF',
          'Linux'
        ]
      },
      {
        id: 6,
        position: 'firstExperience.position',
        companyName: 'UTAP',
        companyWebsite: 'https://www.utap.edu.co',
        time: {
          startDate: new Date(2017, 5, 1),
          endDate: new Date(2019, 11, 1)
        },
        description: 'firstExperience.description',
        detailsLabel: 'detailsLabel',
        details: [
          'firstExperience.details.first',
          'firstExperience.details.second'
        ],
        technologies: [
          'Bootstrap',
          'CSS',
          'jQuery',
          '.NET Framework',
          'C#',
          'MS SQL Server',
          'RDLC',
          'Webforms',
          'Winforms',
          'EF',
          'ASMX',
          'SVN'
        ]
      }
    ]
  ]
}

export default getAllExperience
