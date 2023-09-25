import ProjectEntity from '../domain/ProjectEntity'

const getAllProjects = (): ProjectEntity[] => {
  return [
    {
      id: 1,
      title: 'Bomberman (NES)',
      description:
        "A little universitarian project, it's a copy of the classic Bomberman (NES) (it's still <strong>unfinished</strong>) developed with the help of an awesome JS Framework for videogames using the <strong>prototype-based</strong> programming",
      skills: ['HTML', 'CSS', 'Phaser.js', 'JavaScript'],
      imgPath: '/projects/01.png',
      repoUrl: 'https://github.com/pr0mming/Bomberman-JS',
      demoUrl: 'https://www.youtube.com/watch?v=W5vcOb7laG0'
    },
    {
      id: 2,
      title: 'Tower of Hanoi',
      description:
        "Another little universitarian project, it's a copy of the classic puzzle Tower of Hanoi (with the intention to understand the algorithm) and also simulates the solution of the game from any combination",
      skills: ['HTML', 'CSS', 'Phaser.js', 'JavaScript'],
      imgPath: '/projects/02.png',
      repoUrl: 'https://github.com/pr0mming/TowerHanoi',
      demoUrl: 'https://www.youtube.com/watch?v=4g_4nM0yOCE'
    },
    {
      id: 3,
      title: 'Snake',
      description:
        'It was my first videogame project inspired in the classic videogame from Nokia, I created this version with the help of the widely-used Java Swing toolkit on <strong>NetBeans</strong>, implementing a <strong>2D array logic</strong> to bring the game to life',
      skills: ['Java', 'Java Swing', 'POO'],
      imgPath: '/projects/03.png',
      repoUrl: 'https://github.com/pr0mming/SnakeGame',
      demoUrl: 'https://www.youtube.com/watch?v=KgzPBmJ_7BU'
    },
    {
      id: 4,
      title: "Conway's Game of Life",
      description:
        "Actually It's not a game, it's a simulator applying a set of rules, the result is the creation of visual patterns really interesting, I saw a those patterns on a video and I did the simulator to check if that was true",
      skills: ['Java', 'Java FX', 'POO'],
      imgPath: '/projects/04.png',
      repoUrl: 'https://github.com/pr0mming/GameOfLife',
      demoUrl: 'https://www.youtube.com/watch?v=Kh5HhEx9gj0'
    }
  ]
}

export default getAllProjects
