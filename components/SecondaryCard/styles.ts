import styled from "styled-components";

export const GeneralWrapper = styled.section`
  background-color: var(--generalBg);
  border-radius: 1.5em 1.5rem 0 1.5rem;
  width: 100%;
  height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

export const GeneralHeader = styled.nav`
  display: flex;
  justify-content: space-evenly;

  background-color: var(--cardBg);
  width: 100%;
  height: fit-content;
  border-radius: 1.5rem 1.5rem 0 0;
  padding: 0.5rem;

  font-weight: 200;
  font-size: 20px;
`;

export const TitlesHeader = styled.button`
  all: reverse;
  background: none;
  border: none;
  cursor: pointer;
  letter-spacing: 2px;
  transition-duration: 0.1s;

  &:hover {
    color: var(--mainColor);
  }
`;

export const WrapperContent = styled.section`
  width: 100%;
  padding: 1rem;
  overflow-y: scroll;
  max-height: 100vh;

  scrollbar-color: var(--mainColor) var(--generalBg);
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    background-color: var(--generalBg);
    width: 0.375rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--mainColor);
    border-radius: 10px;
  }
`;

export const Text = styled.p`
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 1px;
  /* margin-bottom: 1rem; */
  text-indent: 2rem;

  a {
    color: var(--mainColor);
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.125rem;

  span {
    color: var(--mainColor);
    font-size: 2rem;
    line-height: 1.125rem;
  }
`;

export const TitleComplement = styled.p`
  color: var(--mainColor);
  font-size: 12px;
  font-weight: 200;
`;

export const TitleContainer = styled.section`
  margin: 3rem 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;