import styled from "styled-components";

export const GeneralWrapper = styled.section`
  background-color: var(--generalBg);
  border-radius: 1.5em 1.5rem 0 1.5rem;
  width: 100%;
  height: calc(100vh - 2rem);
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
  all: revert;
  cursor: pointer;
  letter-spacing: 2px;
  transition-duration: 0.1s;

  &:hover {
    color: var(--mainColor);
  }
`;

export const CurrentTitle = styled.h1`
  color: var(--mainColor);
  font-weight: 200;
  font-size: 20px;
  letter-spacing: 1px;
  user-select: none;
  padding: 0.5rem;
  text-align: center;
`;

export const LineSubHeader = styled.hr`
  height: 0.25rem;
  width: calc(100% - 4rem);
  background-color: var(--cardBg);
  border: none;
  outline: none;
`;

export const WrapperContent = styled.section`
  flex-grow: 1;
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
  margin-bottom: 1rem;
  text-indent: 2rem;
`;

export const Title = styled.h2`
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.125rem;
  padding: 1rem 0;

  span {
    color: var(--mainColor);
    font-size: 2rem;
    line-height: 1.125rem;
  }
`;

export const WrapperAbility = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
`;

export const AbilityCard = styled.article`
  width: 7.5rem;
  aspect-ratio: 1/1;
  border-radius: 1.5rem;
  background-color: var(--cardBg);
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.15s;

  &:hover {
    background-color: var(--mainColor);
    svg {
      fill: var(--cardBg);
    }
  }

  svg {
    font-size: 5rem;
  }
`;
