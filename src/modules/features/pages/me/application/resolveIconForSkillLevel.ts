import { SkillLevelEnum } from '../domain/enums/SkillLevelEnum'

const resolveIconForSkillLevel = (skillLevel: SkillLevelEnum): string => {
  let imgPath = ''

  switch (skillLevel) {
    case SkillLevelEnum.ENTHUSIAST:
      imgPath = 'face-smile'
      break

    case SkillLevelEnum.CONFIDENT:
      imgPath = 'face-laugh-beam'
      break

    case SkillLevelEnum.REPOSAITO:
      imgPath = 'face-kiss'
      break

    default:
      break
  }

  return imgPath
}

export default resolveIconForSkillLevel
