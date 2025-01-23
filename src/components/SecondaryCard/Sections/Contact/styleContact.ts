import styled from "styled-components";
import * as G from "../../styles";

export const ContactForm = styled.form`
  input,
  textarea {
    background-color: var(--generalBg);
    border-radius: 1rem;
    border: 0.125rem solid var(--mainColor);
    margin-bottom: 1rem;
  }

  label {
    font-size: 0.875rem;
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
  height: 33vh;
  max-height: 35vh;
  padding: 0.5rem 1.5rem;
`;

export const ContainerScrollArrow = styled.div`
  display: flex;
  justify-content: space-evenly;

  svg {
    font-size: 3rem;
  }
`

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
  letter-spacing: 0.0625rem;
  transition-duration: 0.1s;

  svg {
    fill: var(--generalBg);
    font-size: 1rem;
  }

  &:hover {
    background-color: var(--generalBg);
    color: var(--mainColor);
    outline: 0.125rem solid var(--mainColor);

    box-shadow: 0 0 10px var(--mainColor);

    svg {
      fill: var(--mainColor);
    }
  }
`;

export const TitleContainerContact = styled(G.TitleContainer)`
  margin-top: 0.5rem;
`;

export const GeneralFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: auto;

  & > div {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const ContainerSocialMedia = styled.article`
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-decoration: none;
  }
`;

export const ContainerStack = styled(ContainerSocialMedia)``;

export const SocialTitle = styled.h3`
  color: #fff;
  font-weight: 200;
  font-size: 0.9rem;
`;

export const ArticleSocialMedia = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5vw;
  transition-duration: 0.3s;

  svg {
    font-size: 4rem;
    min-width: 2rem;
    transition-duration: 0.3s;

    &:hover {
      fill: var(--mainColor);
      cursor: pointer;
      transform: translateY(-10%);
    }
  }
`;

export const MinorTitle = styled.h2`
  text-align: center;
  font-weight: 600;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  color: #fff;
  margin: 3rem 0 1rem 0;
  position: relative;
`;
