// Components
import ContentWrapper from '@src/components/ui/content-wrapper/ContentWrapper'

// About
import AboutMe from './about-me/AboutMe'

// Skills
import SkillLevelControls from './skill-level-controls/SkillLevelControls'
import SkillsList from './skills-list/SkillsList'

export interface IMePageProps {
  lang: string
}

const MePage = ({ lang }: IMePageProps) => {
  return (
    <ContentWrapper type="primary">
      <AboutMe lang={lang} />

      <SkillLevelControls lang={lang} />

      <SkillsList lang={lang} />
    </ContentWrapper>
  )
}

export default MePage
