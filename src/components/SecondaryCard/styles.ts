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
  animation: 9s ease-in-out slideInRight;

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(1%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media screen and (min-width: 36.3125rem) and (max-width: 51.25rem) {
    h2 {
      font-size: 3.5vw;
    }
    p {
      font-size: 2vw;
    }
  }
  @media screen and (max-width: 36.25rem) {
    h2 {
      font-size: 4.25vw;
    }
    p {
      font-size: 3.25vw;
    }
  }
  @media screen and (max-width: 26.25rem) {
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
  font-size: 1.25rem;
  box-shadow: 0 0.625rem 0.625rem rgba(0, 0, 0, 0.1);
  z-index: 900;
`;

export const TitlesHeader = styled.button`
  font-size: clamp(2vw, 1.25rem, 3.5vw);
  background: none;
  border: none;
  cursor: pointer;
  letter-spacing: 0.125rem;
  transition-duration: 0.3s;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 50%;
    width: 0;
    height: 0.125rem;
    transition-duration: 0.6s;
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
    transition-duration: 0.6s;
  }

  &:hover::after {
    background-color: var(--mainColor);
    width: 50%;
  }

  &:hover {
    color: var(--mainColor);
    transform: translateY(0.5rem);
    transition: transform 0.3s ease-in-out;
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
  height: 0.125rem;
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
    border-radius: 0.625rem;
  }

  @media screen and (max-width: 21.875rem) {
    svg.sendIcon {
      display: none;
    }
  }
`;

export const Text = styled.p`
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 0.0625rem;
  text-indent: 2rem;
  text-align: justify;

  a {
    color: var(--mainColor);
  }

  span {
    color: var(--mainColor);
    font-weight: 500;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 0.125rem;
      background-color: var(--mainColor);
      animation: 8s ease-in-out infinite reverse lineStack;
    }

    @keyframes lineStack {
      0%,
      100% {
        width: 100%;
      }
      50% {
        width: 10%;
      }
    }
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  letter-spacing: 0.0625rem;
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
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.0625rem;
`;

export const TitleContainer = styled.section`
  margin: 1rem 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
