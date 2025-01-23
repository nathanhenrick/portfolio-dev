import * as S from "./styles"
import { FaLinkedinIn } from "react-icons/fa";
import ProfilePhoto from "../../assets/images/profilePhoto.jpg"

export const MainCard = () => {
  return (
    <S.WrapperMainCard id="wrapperMainCard">
      <S.ProfileImage src={ProfilePhoto} alt="Profile photo" />
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

        <S.WrapperLinkedin tabIndex={0} href="https://www.linkedin.com/in/nathan-henrick-martempe-constantino" aria-label="Access LinkedIn profile: Nathan Henrick" target="blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </S.WrapperLinkedin>

      </S.WrapperSocial>
    </S.WrapperMainCard>
  )
}