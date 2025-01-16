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

  @media screen and (min-width: 581px) and (max-width: 820px) {
    h2 {
      font-size: 3.5vw;
    }
    p {
      font-size: 2vw;
    }
  }
  @media screen and (max-width: 580px) {
    h2 {
      font-size: 4.25vw;
    }
    p {
      font-size: 3.25vw;
    }
  }
  @media screen and (max-width: 420px) {
    nav {
      button {
        display: block;
      }
    }
  }
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
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

export const TitlesHeader = styled.button`
  font-size: clamp(2vw, 20px, 3.5vw);
  background: none;
  border: none;
  cursor: pointer;
  letter-spacing: 2px;
  transition-duration: 0.1s;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 50%;
    width: 0;
    height: 0.125rem;
    transition-duration: 0.3s;
  }

  &:hover::before {
    background-color: var(--mainColor);
    width: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0.125rem;
    transition-duration: 0.3s;
  }

  &:hover::after {
    background-color: var(--mainColor);
    width: 50%;
  }

  &:hover {
    color: var(--mainColor);
  }
`;

export const ContainerCurrentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 1rem 1.5rem 1rem;
  background-color: transparent;
  user-select: none;
`;
export const LineCurrenteTitle = styled.div`
  flex-grow: 1;
  height: 2px;
  width: 100%;
  background-color: var(--cardBg);
`;

export const CurrentTitle = styled.h2`
  font-family: "Iceberg", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  color: var(--mainColor);
  font-weight: 100;
  white-space: nowrap;
`;

export const WrapperContent = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow-y: auto;
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

  @media screen and (max-width: 350px) {
    svg.sendIcon {
      display: none;
    }
  }
`;

export const Text = styled.p`
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 1px;
  text-indent: 2rem;

  a {
    color: var(--mainColor);
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.125rem;
  text-align: left;

  &::before {
    content: ".";
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
  margin: 1rem 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
