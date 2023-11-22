import dynamic from 'next/dynamic'

// Components
import ContentWrapper from '@src/components/ui/content-wrapper/ContentWrapper'
import SkillLevelControls from './skill-level-controls/SkillLevelControls'

// About
import AboutMe from './about-me/AboutMe'

// Lazy
const SkillsList = dynamic(() => import('./skills-list/SkillsList'))

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
