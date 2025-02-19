import styled from "styled-components";

export const WrapperMainCard = styled.section`
  background-color: var(--generalBg);
  width: 25rem;
  height: fit-conten;
  max-height: 95dvh;
  max-height: 95vh;
  border-radius: 1.5em;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 5.5s ease-in-out slideInLeft;

  @media screen and (max-width: 51.25rem) {
    display: none;
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;


export const ProfileImage = styled.img`
  background-color: var(--cardBg);
  background-position: center center;
  /* background-size: cover; */
  width: 7rem;
  aspect-ratio: 1/1;
  user-select: none;
  border-radius: 50%;
`;

export const NameTitle = styled.h1`
  font-size: 1.125rem;
  font-weight: 200;
  color: white;
  text-align: center;
  padding: 0.5rem;
`;

export const LineCard = styled.hr`
  height: 0.25rem;
  width: 100%;
  background-color: var(--cardBg);
  border: none;
  outline: none;
`;

export const ArticleProfissionTitle = styled.article`
  background-color: var(--cardBg);
  border-radius: 0.5rem;
  padding: 0.5rem 1.25rem;
  margin: 1rem 0;
`;

export const ProfissionTitle = styled.h2`
  color: var(--mainColor);
  font-weight: 600;
  font-size: 1.125rem;
  letter-spacing: 0.125rem;
`;
export const WrapperTitles = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  p {
    font-size: 0.75rem;
    font-weight: 300;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 1.125rem;
  text-transform: uppercase;

  span {
    color: var(--mainColor);
    font-size: 2rem;
    line-height: 1.125rem;
  }
`;

export const WrapperSocial = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const WrapperLinkedin = styled.a`
  all: revert;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.2rem;
  aspect-ratio: 1/1;
  background-color: var(--generalBg);
  border: 0.125rem solid var(--mainColor);
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  left: 42%;
  transition-duration: 0.3s;

  &:hover {
    border: 0.125rem solid var(--mainColor);
    background-color: var(--mainColor);
    transform: scale(1.5);

    svg {
      fill: var(--generalBg);
    }
  }

  svg {
    font-size: 1rem;
    fill: var(--mainColor);
  }
`;

export const SocialTitle = styled.h3`
  text-transform: uppercase;
  opacity: 5%;
  font-size: 5rem;
  user-select: none;
`;