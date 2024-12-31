import styled from "styled-components";

export const GeneralWrapper = styled.section`
  background-color: var(--generalBg);
  border-radius: 1.5em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GeneralHeader = styled.nav`
  display: flex;
  justify-content: space-evenly;

  background-color: var(--cardBg);
  width: 100%;
  height: 3rem;
  border-radius: 1.5rem 1.5rem 0 0;
  padding: 0.5rem;

  font-weight: 200;
  font-size: 20px;
`;

export const TitlesHeader = styled.a`
  cursor: pointer;
  letter-spacing: 2px;
  transition-duration: 0.1s;

  &:hover {
    color: var(--mainColor);
  }
`;
