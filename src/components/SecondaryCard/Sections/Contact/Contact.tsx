import * as G from "../../styles"
import * as S from "./styleContact"
import { BsSend } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { PiReadCvLogo } from "react-icons/pi";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

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

        <S.ContainerScrollArrow>
          <MdOutlineKeyboardDoubleArrowDown />
          <S.SubmitContact type="submit">
            <BsSend className="sendIcon" />
            Send
          </S.SubmitContact>
          <MdOutlineKeyboardDoubleArrowDown />
        </S.ContainerScrollArrow>
      </S.ContactForm>

      <S.GeneralFooter>
        <S.ContainerSocialMedia>
          <S.MinorTitle>Social</S.MinorTitle>
          <S.ArticleSocialMedia>
            <a href="https://www.linkedin.com/in/nathan-henrick-martempe-constantino/" target="_blank">
              <FaLinkedin />
              <S.SocialTitle>
                LinkedIn
              </S.SocialTitle>
            </a>

            <a href="https://github.com/nathanhenrick" target="_blank">
              <FaGithub />
              <S.SocialTitle>
                GitHub
              </S.SocialTitle>
            </a>

            <a href="src\assets\NathanHenrickCV.pdf" download={'NathanHenrickCV.pdf'}>
              <PiReadCvLogo />
              <S.SocialTitle>
                CV
              </S.SocialTitle>
            </a>
          </S.ArticleSocialMedia>
        </S.ContainerSocialMedia>

        <S.ContainerStack>
          <S.MinorTitle>
            Stack
          </S.MinorTitle>
          <G.Text>
            I used <span>React</span>, <span>Styled-Components</span>, <span>TypeScript</span> and <span>GSAP</span> library.
          </G.Text>
        </S.ContainerStack>

        <div>
          <p>© 2025 Nathan Henrick Martempe Constantino. All rights reserved.</p>
        </div>

      </S.GeneralFooter>
    </G.WrapperContent >
  )
}