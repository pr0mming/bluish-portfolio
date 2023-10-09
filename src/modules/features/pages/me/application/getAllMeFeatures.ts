import MeFeaturesEntity from '../domain/MeFeaturesEntity'

const getAllMeFeatures = (): MeFeaturesEntity[] => {
  return [
    {
      id: 1,
      icon: 'fa-solid fa-earth-americas',
      textKey: 'me.firstFeature'
    },
    {
      id: 2,
      icon: 'fa-solid fa-briefcase',
      textKey: 'me.secondFeature'
    },
    {
      id: 3,
      icon: 'fa-solid fa-brain',
      textKey: 'me.thirdFeature'
    },
    {
      id: 4,
      icon: 'fa-solid fa-book',
      textKey: 'me.fourthFeature'
    },
    {
      id: 5,
      icon: 'fa-solid fa-dumbbell',
      textKey: 'me.fifthFeature'
    },
    {
      id: 6,
      icon: 'fa-solid fa-guitar',
      textKey: 'me.sixthFeature'
    }
  ]
}

export default getAllMeFeatures
