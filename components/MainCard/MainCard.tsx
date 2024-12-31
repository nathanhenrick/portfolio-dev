import * as S from "./styles"
import { FaLinkedinIn } from "react-icons/fa";


export const MainCard = () => {
  return (
    <S.WrapperMainCard>
      <S.ProfileImage />
      <S.NameTitle>Nathan Henrick <br /> Martempe Constantino</S.NameTitle>
      <S.LineCard />

      <S.ArticleProfissionTitle>
        <S.ProfissionTitle>Web Developer</S.ProfissionTitle>
      </S.ArticleProfissionTitle>

      <S.WrapperTitles>
        <S.Titles><span>.</span>EMAIL</S.Titles>
        <p>nathanhenrick221@gmail.com</p>
        <S.Titles><span>.</span>BIRTHDAY</S.Titles>
        <p>14/02/2005</p>
        <S.Titles><span>.</span>EDUCATION</S.Titles>
        <p>Systems Analysis and Development (UNINTER)</p>
      </S.WrapperTitles>

      <S.WrapperSocial>
        <S.SocialTitle>SOCIAL</S.SocialTitle>

        <S.WrapperLinkedin href="https://www.linkedin.com/in/nathan-henrick-martempe-constantino-8459b12a5/" target="blank">
          <FaLinkedinIn />
        </S.WrapperLinkedin>

      </S.WrapperSocial>
    </S.WrapperMainCard>
  )
}