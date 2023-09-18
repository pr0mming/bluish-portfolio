import MeSkillCatalogEntity from '../domain/MeSkillCatalogEntity'
import { SkillCategoryEnum } from '../domain/enums/SkillCategoryEnum'
import { SkillLevelEnum } from '../domain/enums/SkillLevelEnum'

const getAllMeSkillsCatalog = (): MeSkillCatalogEntity[] => {
  return [
    {
      id: 1,
      categoryType: SkillCategoryEnum.FRONTEND,
      skillList: [
        {
          id: 1,
          name: 'Angular',
          imgPath: '/skills/angular.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: true
        },
        {
          id: 2,
          name: 'React',
          imgPath: '/skills/react.png',
          level: SkillLevelEnum.ENTHUSIAST,
          isFavorite: false
        },
        {
          id: 3,
          name: 'Next',
          imgPath: '/skills/next.png',
          level: SkillLevelEnum.ENTHUSIAST,
          isFavorite: true
        },
        {
          id: 4,
          name: 'TypeScript',
          imgPath: '/skills/typescript.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: true
        },
        {
          id: 5,
          name: 'JavaScript',
          imgPath: '/skills/javascript.png',
          level: SkillLevelEnum.REPOSAITO,
          isFavorite: false
        },
        {
          id: 6,
          name: 'HTML',
          imgPath: '/skills/html.png',
          level: SkillLevelEnum.REPOSAITO,
          isFavorite: false
        },
        {
          id: 7,
          name: 'CSS',
          imgPath: '/skills/css.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: false
        },
        {
          id: 8,
          name: 'Bootstrap',
          imgPath: '/skills/bootstrap.png',
          level: SkillLevelEnum.REPOSAITO,
          isFavorite: false
        },
        {
          id: 9,
          name: 'Tailwind',
          imgPath: '/skills/tailwind.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: true
        },
        {
          id: 10,
          name: 'MUI',
          imgPath: '/skills/mui.png',
          level: SkillLevelEnum.ENTHUSIAST,
          isFavorite: false
        }
      ]
    },
    {
      id: 2,
      categoryType: SkillCategoryEnum.BACKEND,
      skillList: [
        {
          id: 11,
          name: 'C#',
          imgPath: '/skills/c-sharp.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: true
        },
        {
          id: 12,
          name: '.NET Framework',
          imgPath: '/skills/net-framework.png',
          level: SkillLevelEnum.REPOSAITO,
          isFavorite: false
        },
        {
          id: 13,
          name: '.NET',
          imgPath: '/skills/dotnet.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: true
        },
        {
          id: 14,
          name: 'Golang',
          imgPath: '/skills/golang.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: true
        }
      ]
    },
    {
      id: 3,
      categoryType: SkillCategoryEnum.DATABASE,
      skillList: [
        {
          id: 15,
          name: 'SQL Server',
          imgPath: '/skills/sql-server.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: true
        },
        {
          id: 16,
          name: 'MySQL',
          imgPath: '/skills/mysql.png',
          level: SkillLevelEnum.ENTHUSIAST,
          isFavorite: false
        },
        {
          id: 17,
          name: 'Oracle',
          imgPath: '/skills/oracle.png',
          level: SkillLevelEnum.ENTHUSIAST,
          isFavorite: false
        },
        {
          id: 18,
          name: 'Mongo DB',
          imgPath: '/skills/mongodb.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: false
        },
        {
          id: 19,
          name: 'Firebase',
          imgPath: '/skills/firebase.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: true
        }
      ]
    },
    {
      id: 4,
      categoryType: SkillCategoryEnum.CLOUD,
      skillList: [
        {
          id: 20,
          name: 'Azure',
          imgPath: '/skills/azure.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: true
        },
        {
          id: 21,
          name: 'AWS',
          imgPath: '/skills/aws.png',
          level: SkillLevelEnum.ENTHUSIAST,
          isFavorite: true
        }
      ]
    },
    {
      id: 5,
      categoryType: SkillCategoryEnum.MISC,
      skillList: [
        {
          id: 22,
          name: 'Microservices',
          imgPath: '/skills/microservices.png',
          level: SkillLevelEnum.ENTHUSIAST,
          isFavorite: true
        },
        {
          id: 23,
          name: 'gRPC',
          imgPath: '/skills/grpc.png',
          level: SkillLevelEnum.ENTHUSIAST,
          isFavorite: false
        },
        {
          id: 24,
          name: 'Git',
          imgPath: '/skills/git.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: true
        },
        {
          id: 25,
          name: 'Python',
          imgPath: '/skills/python.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: true
        },
        {
          id: 26,
          name: 'OWASP',
          imgPath: '/skills/owasp.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: true
        },
        {
          id: 27,
          name: 'Jira',
          imgPath: '/skills/jira.png',
          level: SkillLevelEnum.ENTHUSIAST,
          isFavorite: false
        },
        {
          id: 28,
          name: 'SOLID',
          imgPath: '/skills/solid.png',
          level: SkillLevelEnum.CONFIDENT,
          isFavorite: true
        }
      ]
    }
  ]
}

export default getAllMeSkillsCatalog
