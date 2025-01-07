import { useState } from "react"
import { AboutMe } from "./Sections/AboutMe/AboutMe"
import { Portfolio } from "./Sections/Portfolio/Portfolio"
import { Contact } from "./Sections/Contact/Contact"
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
      case 'contact':
        return <Contact />
      default:
        return null
    }
  }

  return (
    <S.GeneralWrapper>
      <S.GeneralHeader>
        <S.TitlesHeader tabIndex={0} onClick={aboutMeActive}>About Me</S.TitlesHeader>
        <S.TitlesHeader tabIndex={0} onClick={portfolioActive}>Portfolio</S.TitlesHeader>
        <S.TitlesHeader tabIndex={0} onClick={contactActive}>Contact</S.TitlesHeader>
      </S.GeneralHeader>

      {renderActiveSection()}


    </S.GeneralWrapper>
  )
}