import ExperienceEntity from '../domain/ExperienceEntity'

const getAllExperience = (): ExperienceEntity[][] => {
  return [
    [
      {
        id: 1,
        position: 'Software Development Consultant',
        companyName: 'Sofka Technologies',
        companyWebsite: 'https://sofka.com.co',
        time: {
          startDate: new Date(2023, 0, 1),
          endDate: new Date()
        },
        description:
          'Currently focusing on a <span class="font-semibold">credit line project</span> for a well-recognized nationalwide client, I analyze requirements and play a key role in ensuring the timely delivery of high-quality features on a substantial codebase solution',
        technologies: [
          '.NET Framework',
          'C#',
          'VB.NET',
          'Bootstrap',
          'JavaScript',
          'jQuery',
          'MS SQL Server',
          'Azure DevOps',
          'ASMX'
        ]
      }
    ],
    [
      {
        id: 2,
        position: 'Senior Full Stack Developer I',
        companyName: 'Double V Partners',
        companyWebsite: 'https://doublevpartners.com',
        time: {
          startDate: new Date(2022, 3, 1),
          endDate: new Date(2023, 0, 1)
        },
        description:
          'I put efforts across multiple teams to drive the successful execution of <span class="font-semibold">two distinct projects</span>, each with its unique set of challenges and innovations:',
        details: [
          'I took on the role of the development of <span class="font-semibold">core communication</span> between end-users and the <span class="font-semibold">Blockchain</span> components. As a key member of the team, I designed and implemented interfaces that facilitated part of the user interaction throught an <span class="font-semibold">interactive Web Application</span>.',
          'In collaboration with a dedicated team, I played a role in creating a <span class="font-semibold">chatbot solution</span> aimed at enhancing issue resolution and process management for a client\'s application.'
        ],
        technologies: [
          'Next.js',
          'Tailwind CSS',
          'MUI',
          'Angular',
          'Angular Material',
          'NgRx',
          'Golang',
          'Firebase Authentication',
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
        time: {
          startDate: new Date(2021, 9, 1),
          endDate: new Date(2022, 2, 1)
        },
        description:
          'I actively contributed to the success of <span class="font-semibold">several diverse projects</span>, showcasing my versatility and technical acumen in delivering impactful solutions:',
        details: [
          'In my initial project, I collaborated extensively with a wide-ranging team to redesign a <span class="font-semibold">rental bond platform</span>. My responsibilities included developing UI features and making crucial adjustments to the existing codebase.',
          'I played a supporting part in enhancing a <span class="font-semibold">foreigner rental bond</span> platform\'s user interface and experience. By closely aligning with the client\'s requirements and incorporating best practices in UX/UI design.'
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
        position: 'Backend Developer Engineer',
        companyName: 'Optima Corporation',
        companyWebsite: 'https://optima.net.co',
        time: {
          startDate: new Date(2021, 2, 1),
          endDate: new Date(2021, 9, 1)
        },
        description:
          'My technical expertise and commitment to innovation drove successful outcomes, showcasing my ability to collaborate and find solutions even in the face of <span class="font-semibold">unexpected challenges</span>:',
        details: [
          'In collaboration with a diverse team, I contributed to a significant project aimed at enhancing an <span class="font-semibold">e-commerce platform</span> for a <span class="font-semibold">foreign client</span>. I took charge of translating requirements into user-friendly interfaces, implementing <span class="font-semibold">real-time features</span> and integrating the communication with the backend components',
          'Collaborating with a colleague, I meticulously designed and implemented the Frontend architecture for a <span class="font-semibold">Corporative newsletters Web Application</span>, developed comprehensive UX/UI elements that aligned with client requirements, and orchestrated seamless communication between the frontend and backend components.'
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
        position: 'Software Development Team Coordinator',
        companyName: 'UTAP',
        companyWebsite: 'https://www.utap.edu.co',
        time: {
          startDate: new Date(2020, 0, 1),
          endDate: new Date(2021, 1, 1)
        },
        description:
          'I played a pivotal role in orchestrating the successful execution of multifaceted projects that streamlined academic processes and elevated business operations:',
        details: [
          'I coordinated the development of a several requirements for the <span class="font-semibold">corporative Web App</span> designed to manage a wide array of academic processes for both students and teachers',
          'I coordinated the development of several requirements for the <span class="font-semibold">corporative Desktop App</span> that efficiently managed various administrative and operational processes.'
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
        companyName: 'UTAP',
        companyWebsite: 'https://www.utap.edu.co',
        time: {
          startDate: new Date(2017, 5, 1),
          endDate: new Date(2019, 11, 1)
        },
        description:
          "I embarked on the first steps of my professional journey, making significant contributions to the university's technological landscape:",
        details: [
          'I served as a valuable assistant in <span class="font-semibold">data analysis</span>, utilizing the database to create required reports that informed and optimized various business processes.',
          'My involvement extended to the enhancement of a substantial <span class="font-semibold">corporative Desktop App</span>, pivotal to managing diverse business processes and manual tasks. In a collaborative environment, I enthusiastically took on the responsibility of fulfilling diverse requirements that aimed to improve app functionality and user experience.'
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
