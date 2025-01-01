import { AboutMe } from "./Sections/AboutMe"
import * as S from "./styles"

export const SecondaryCard = () => {
  return (
    <S.GeneralWrapper>
      <S.GeneralHeader>
        <S.TitlesHeader>About Me</S.TitlesHeader>
        <S.TitlesHeader>Portfolio</S.TitlesHeader>
        <S.TitlesHeader>Contact</S.TitlesHeader>
      </S.GeneralHeader>

      <S.CurrentTitle>About me</S.CurrentTitle>
      <S.LineSubHeader />


      <AboutMe />

    </S.GeneralWrapper>
  )
}