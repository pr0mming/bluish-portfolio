import ProjectEntity from '../domain/ProjectEntity'

const getAllProjects = (): ProjectEntity[] => {
  return [
    {
      id: 1,
      title: 'firstProject.title',
      description: 'firstProject.description',
      skills: ['HTML', 'CSS', 'Phaser.js', 'JavaScript'],
      imgPath: '/projects/01.png',
      repoUrl: 'https://github.com/pr0mming/Bomberman-JS',
      demoUrl: 'https://www.youtube.com/watch?v=W5vcOb7laG0'
    },
    {
      id: 2,
      title: 'secondProject.title',
      description: 'secondProject.description',
      skills: ['HTML', 'CSS', 'Phaser.js', 'JavaScript'],
      imgPath: '/projects/02.png',
      repoUrl: 'https://github.com/pr0mming/TowerHanoi',
      demoUrl: 'https://www.youtube.com/watch?v=4g_4nM0yOCE'
    },
    {
      id: 3,
      title: 'thirdProject.title',
      description: 'thirdProject.description',
      skills: ['Java', 'Java Swing', 'POO'],
      imgPath: '/projects/03.png',
      repoUrl: 'https://github.com/pr0mming/SnakeGame',
      demoUrl: 'https://www.youtube.com/watch?v=KgzPBmJ_7BU'
    },
    {
      id: 4,
      title: 'fourthProject.title',
      description: 'fourthProject.description',
      skills: ['Java', 'Java FX', 'POO'],
      imgPath: '/projects/04.png',
      repoUrl: 'https://github.com/pr0mming/GameOfLife',
      demoUrl: 'https://www.youtube.com/watch?v=Kh5HhEx9gj0'
    }
  ]
}

export default getAllProjects
