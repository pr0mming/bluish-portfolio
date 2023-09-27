import MeFeaturesEntity from '../domain/MeFeaturesEntity'

const getAllMeFeatures = (): MeFeaturesEntity[] => {
  return [
    {
      id: 1,
      icon: 'fa-solid fa-earth-americas',
      text: "I'm from <strong>Cali, Colombia</strong>"
    },
    {
      id: 2,
      icon: 'fa-solid fa-briefcase',
      text: 'Over <strong>5 years</strong> of experience working as <strong>Full Stack Developer</strong>'
    },
    {
      id: 3,
      icon: 'fa-solid fa-brain',
      text: 'I love the <strong>coding challenges</strong> on competitive platforms'
    },
    {
      id: 4,
      icon: 'fa-solid fa-book',
      text: "The <strong>Stephen King's</strong> books are my favorite ones"
    },
    {
      id: 5,
      icon: 'fa-solid fa-dumbbell',
      text: 'I use the <strong>Morning Workout</strong> as a way to renew my mind'
    },
    {
      id: 6,
      icon: 'fa-solid fa-guitar',
      text: 'Oftentimes I like to learn songs to play in <strong>Fingerstyle</strong>'
    }
  ]
}

export default getAllMeFeatures
