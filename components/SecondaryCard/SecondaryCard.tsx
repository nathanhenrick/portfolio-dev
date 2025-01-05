import { useState } from "react"
import { AboutMe } from "./Sections/AboutMe/AboutMe"
import { Portfolio } from "./Sections/Portfolio/Portfolio"
import * as S from "./styles"

export const SecondaryCard = () => {

  const [activeSection, setActiveSection] = useState<'aboutMe' | 'portfolio' | 'contact'>('aboutMe')

  const aboutMeActive = () => {
    setActiveSection('aboutMe')
  }
  const portfolioActive = () => {
    setActiveSection('portfolio')
  }
  const contactActive = () => {
    setActiveSection('contact')
  }

  const renderActiveSection =() => {
    switch (activeSection) {
      case 'aboutMe':
        return <AboutMe />;
      case 'portfolio':
        return <Portfolio />;
      // case 'contact':
      //   return <Contact />
      default:
        return null
        break
    }
  }

  return (
    <S.GeneralWrapper>
      <S.GeneralHeader>
        <S.TitlesHeader onClick={aboutMeActive}>About Me</S.TitlesHeader>
        <S.TitlesHeader onClick={portfolioActive}>Portfolio</S.TitlesHeader>
        <S.TitlesHeader onClick={contactActive}>Contact</S.TitlesHeader>
      </S.GeneralHeader>

      <S.CurrentTitle>Title</S.CurrentTitle>
      <S.Divider />

      {renderActiveSection()}


    </S.GeneralWrapper>
  )
}