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
        companyWebsite: 'https://doublevpartners.com',
        time: 'apr. 2022 - jan. 2023 (10 months)',
        description:
          'I put efforts across multiple teams to drive the successful execution of two distinct projects, each with its unique set of challenges and innovations:',
        details: [
          'I took on the role of the development of core communication components between end-users and the Blockchain World. As a key member of the team, I designed and implemented interfaces that facilitated part of the user interaction throught an interactive Web Application.',
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
      },
      {
        id: 3,
        position: 'Ssr. Full Stack Developer II',
        companyName: 'Double V Partners',
        companyWebsite: 'https://doublevpartners.com',
        time: 'oct. 2021 - mar. 2022 (6 months)',
        description:
          'I actively contributed to the success of several diverse projects, showcasing my versatility and technical acumen in delivering impactful solutions:',
        details: [
          'In my initial project, I collaborated extensively with a wide-ranging team to redesign a rental bond platform. My responsibilities included developing UI features and making crucial adjustments to the existing codebase.',
          "I played a supporting part in enhancing a foreigner rental bond platform's user interface and experience. By closely aligning with the client's requirements and incorporating best practices in UI/UX design."
        ],
        technologies: [
          'Golang',
          'gRPC',
          '.NET',
          'C#',
          'CQRS',
          'Ocelot',
          'Clean Architecture',
          'Microservices',
          'Angular',
          'Bootstrap',
          'Mongo DB',
          'Azure DevOps'
        ]
      }
    ],
    [
      {
        id: 4,
        position: 'Backend Developer Engineer',
        companyName: 'Optima Corporation',
        companyWebsite: 'https://optima.net.co',
        time: 'mar. 2021 - oct. 2021 (8 months)',
        description:
          'I undertook pivotal roles in shaping and delivering impactful projects that spanned diverse domains. My technical expertise and commitment to innovation drove successful outcomes, showcasing my ability to collaborate and find solutions even in the face of unexpected challenges:',
        details: [
          'In collaboration with a diverse team, I contributed to a significant project aimed at enhancing an e-commerce platform for a foreign client. Our primary goal was to implement real-time features and fulfill additional requirements within strict deadlines. As a Frontend Developer, I took charge of translating requirements into user-friendly interfaces',
          "In a more self-driven project, I this time with a corporative newsletters web application. Collaborating with a colleague, I meticulously designed the web app's architecture, developed comprehensive UX/UI elements that aligned with client requirements, and orchestrated seamless communication between the frontend and backend components."
        ],
        technologies: [
          'Angular',
          'PrimeNG',
          'Firebase Realtime',
          'Bootstrap',
          '.NET Core',
          'Oracle Database',
          'Angular Material',
          'Azure DevOps',
          'TypeScript',
          'Gitflow'
        ]
      }
    ],
    [
      {
        id: 5,
        position: 'Software Development Team Coordinator',
        companyName: 'UTAP',
        companyWebsite: 'https://www.utap.edu.co',
        time: 'jan. 2021 - feb. 2022 (1 year 2 months)',
        description:
          'I played a pivotal role in orchestrating the successful execution of multifaceted projects that streamlined academic processes and elevated business operations.',
        details: [
          'I coordinated the development of a several requirements for the corporative Web App designed to manage a wide array of academic processes for both students and teachers',
          'I coordinated the development of several requirements for the corporative Desktop App that efficiently managed various administrative and operational processes.'
        ],
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
        position: 'Junior Application Development Analyst',
        companyName: 'jun. 2017 - dec. 2019 (2 year 7 months)',
        companyWebsite: 'https://www.utap.edu.co',
        time: 'jan. 2021 - feb. 2022 (1 year 2 months)',
        description:
          "I embarked on the first steps of my professional journey, making significant contributions to the university's technological landscape.",
        details: [
          'I served as a valuable assistant in data analysis, utilizing the database to create required reports that informed and optimized various business processes.',
          'My involvement extended to the enhancement of a substantial corporative Desktop App, pivotal to managing diverse business processes and manual tasks. In a collaborative environment, I enthusiastically took on the responsibility of fulfilling diverse requirements that aimed to improve app functionality and user experience.'
        ],
        technologies: [
          '.NET Framework',
          'C#',
          'MS SQL Server',
          'RDLC',
          'Webforms',
          'Winforms',
          'EF',
          'ASMX',
          'Bootstrap',
          'jQuery',
          'CSS',
          'SVN'
        ]
      }
    ]
  ]
}

export default getAllExperience
