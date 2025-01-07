import styled from "styled-components";

export const WrapperEmail = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
`;

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
  padding: 0.5rem 1.5rem;
`;

export const MessageContact = styled.textarea`
  display: block;
  width: 100%;
  max-width: 75vw;
  height: 50vh;
  max-height: 100vh;
  padding: 0.5rem 1.5rem;
`;

export const SubmitContact = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;

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
