import * as G from "../../styles"
import * as S from "./styleContact"
import { BsSend } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { PiReadCvLogo } from "react-icons/pi";

export const Contact = () => {
  return (
    <G.WrapperContent>
      <G.ContainerCurrentTitle>
        <G.LineCurrenteTitle></G.LineCurrenteTitle>
        <G.CurrentTitle>Contact</G.CurrentTitle>
        <G.LineCurrenteTitle></G.LineCurrenteTitle>
      </G.ContainerCurrentTitle>
      <S.TitleContainerContact>
        <G.Title>Send a e-mail</G.Title>
      </S.TitleContainerContact>

      <S.ContactForm action="https://formsubmit.co/nathanhenrick221@gmail.com" method="POST">

        <label htmlFor="email">Your e-mail</label>
        <S.EmailContact placeholder="exp@example.com" type="email" name="E-mail" required />

        <label htmlFor="message">Your message</label>
        <S.MessageContact placeholder="Write here..." name="Message" required />

        <S.SubmitContact type="submit">
          <BsSend className="sendIcon" />
          Send
        </S.SubmitContact>
      </S.ContactForm>

      <S.ContainerSocialMedia>
        <S.SocialMediaTitle>Social</S.SocialMediaTitle>
        <S.ArticleSocialMedia>
          <FaLinkedin>
            <a href="https://www.linkedin.com/in/nathan-henrick-martempe-constantino/" target="blank"></a>
          </FaLinkedin>
          <FaGithub>
            <a href="" target="blank"></a>
          </FaGithub>
          <PiReadCvLogo>
            <a href="" target="blank"></a>
          </PiReadCvLogo>
        </S.ArticleSocialMedia>
      </S.ContainerSocialMedia>

      <S.GeneralFooter>

      </S.GeneralFooter>
    </G.WrapperContent>
  )
}