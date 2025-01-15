import * as G from "../../styles"
import * as S from "./styleContact"
import { BsSend } from "react-icons/bs";

export const Contact = () => {
  return (
    <G.WrapperContent>
      <S.TitleContainerContact>
        <G.Title><span>.</span>Send a e-mail</G.Title>
      </S.TitleContainerContact>

      <S.ContactForm action="https://formsubmit.co/nathanhenrick221@gmail.com" method="POST">
      
        <label htmlFor="email">Your e-mail</label>
        <S.EmailContact placeholder="exp@example.com" type="email" name="E-mail" required />

        <label htmlFor="message">Your message</label>
        <S.MessageContact placeholder="Write here..." name="Message" required />

        <S.SubmitContact type="submit">
          <BsSend />
          Send
        </S.SubmitContact>
      </S.ContactForm>
    </G.WrapperContent>
  )
}