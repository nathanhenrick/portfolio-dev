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
        <S.Title><span>.</span>EMAIL</S.Title>
        <p>nathanhenrick221@gmail.com</p>
        <S.Title><span>.</span>BIRTHDAY</S.Title>
        <p>02/14/2005</p>
        <S.Title><span>.</span>EDUCATION</S.Title>
        <p>Systems Analysis and Development (UNINTER)</p>
      </S.WrapperTitles>

      <S.WrapperSocial>
        <S.SocialTitle>SOCIAL</S.SocialTitle>

        <S.WrapperLinkedin tabIndex={0} href="https://www.linkedin.com/in/nathan-henrick-martempe-constantino-8459b12a5/" target="blank">
          <FaLinkedinIn />
        </S.WrapperLinkedin>

      </S.WrapperSocial>
    </S.WrapperMainCard>
  )
}