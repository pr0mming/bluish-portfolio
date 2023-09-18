// Components
import ContentWrapper from '@src/components/ui/content-wrapper/ContentWrapper'

// About
import AboutMe from './about-me/AboutMe'

// Skills
import SkillLevelControls from './skill-level-controls/SkillControls'
import SkillsList from './skills-list/SkillsList'

const MePage = () => {
  return (
    <ContentWrapper type="primary">
      <AboutMe />

      <SkillLevelControls />

      <SkillsList />
    </ContentWrapper>
  )
}

export default MePage
