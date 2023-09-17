// Components
import AboutMe from './about-me/AboutMe'
import SkillLevelControls from './skill-level-controls/SkillControls'
import SkillsList from './skills-list/SkillsList'

const MePage = () => {
  return (
    <section className="max-w-7xl bg-white bg-opacity-95 rounded-xl border-2 border-secondary shadow-custom-md shadow-secondary py-14 px-6 md:px-10">
      <AboutMe />

      <SkillLevelControls />

      <SkillsList />
    </section>
  )
}

export default MePage
