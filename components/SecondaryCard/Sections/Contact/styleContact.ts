import styled from "styled-components";
import * as G from "../../styles";

export const ContactForm = styled.form`
  input,
  textarea {
    background-color: var(--generalBg);
    border-radius: 1rem;
    border: 2px solid var(--mainColor);
    margin-bottom: 1rem;
  }

  label {
    font-size: 14px;
  }
`;

export const EmailContact = styled.input`
  display: block;
  width: 20rem;
  max-width: 75vw;
  padding: 0.5rem 1.5rem;
`;

export const MessageContact = styled.textarea`
  display: block;
  width: 100%;
  height: 50vh;
  max-height: 33vh;
  padding: 0.5rem 1.5rem;
`;

export const SubmitContact = styled.button`
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  width: 40%;

  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: var(--mainColor);
  color: var(--generalBg);
  font-weight: 700;
  letter-spacing: 1px;
  transition-duration: 0.1s;

  svg {
    fill: var(--generalBg);
    font-size: 1rem;
  }

  &:hover {
    background-color: var(--generalBg);
    color: var(--mainColor);
    outline: 2px solid var(--mainColor);

    svg {
      fill: var(--mainColor);
    }
  }
`;

export const TitleContainerContact = styled(G.TitleContainer)`
  margin-top: 0.5rem;
`;

export const ContainerSocialMedia = styled.section`
  height: 80vh;
  svg {
    font-size: 4vw;
    min-width: 2rem;
    transition-duration: 0.3s;

    &:hover {
      fill: var(--mainColor);
      cursor: pointer;
    }
  }
`;

export const ArticleSocialMedia = styled.article`
  display: flex;
  justify-content: center;
  column-gap: 5vw;
`;

export const SocialMediaTitle = styled.h2`
  text-align: center;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  margin: 3rem 0 1rem 0;
`;

export const GeneralFooter = styled.footer``;
