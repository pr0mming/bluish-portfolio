import ExperienceEntity from '../domain/ExperienceEntity'

const getAllExperience = (): ExperienceEntity[][] => {
  return [
    [
      {
        id: 1,
        position: 'Software Development Consultant',
        companyName: 'Sofka Technologies',
        companyWebsite: 'https://sofka.com.co',
        time: 'jan. 2023 - Present (8 months)',
        description:
          'Collaborating within a cross-functional team to drive innovation in a dynamic software development environment. Currently focusing on a credit line project, I analyze requirements and play a key role in ensuring the timely delivery of high-quality features on a substantial codebase solution',
        technologies: [
          '.NET Framework',
          'C#',
          'VB.NET',
          'ASMX',
          'Bootstrap',
          'JavaScript',
          'jQuery',
          'CSS',
          'Azure DevOps',
          'MS SQL Server'
        ]
      }
    ],
    [
      {
        id: 2,
        position: 'Senior Full Stack Developer I',
        companyName: 'Double V Partners',
        companyWebsite: 'https://doublevpartners.com/',
        time: 'apr. 2022 - jan. 2023 (10 months)',
        description:
          'I put efforts across multiple teams to drive the successful execution of two distinct projects, each with its unique set of challenges and innovations:',
        details: [
          ' I took on the role of the development of core communication components between end-users and the Blockchain World. As a key member of the team, I designed and implemented interfaces that facilitated part of the user interaction throught an interactive Web Application.',
          "In collaboration with a dedicated team, I played a role in creating a chatbot solution aimed at enhancing issue resolution and process management for a client's application."
        ],
        technologies: [
          'Next.js',
          'Tailwind CSS',
          'MUI',
          'Angular',
          'Angular Material',
          'NgRx',
          'Firebase Authentication',
          'Golang',
          'Mongo DB',
          'AWS Lambda',
          'Solidity'
        ]
      }
    ]
  ]
}

export default getAllExperience
