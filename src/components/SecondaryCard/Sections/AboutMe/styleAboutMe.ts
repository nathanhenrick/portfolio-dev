import styled from "styled-components";

export const WrapperAbility = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  &:has(article:hover) article:not(:hover) {
    opacity: 0.4;
  }
`;

export const TooltipAbility = styled.div`
  position: absolute;
  bottom: calc(100% + 0.2rem);
  background-color: var(--mainColor);
  color: var(--generalBg);
  padding: 0.4rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0.25rem;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(0.5rem);
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: none;
`;

export const AbilityCard = styled.article`
  position: relative;
  width: fit-content;
  max-width: 7.5rem;
  padding: 1rem;
  aspect-ratio: 1/1;
  border-radius: 1.5rem;
  background-color: var(--cardBg);
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 1s;
  transition-timing-function: ease;

  &:hover {
    background-color: var(--mainColor);
    transform: translateY(-8px);

    div {
      opacity: 1;
      transform: translateY(0);
    }

    svg {
      fill: var(--cardBg);
    }
  }

  svg {
    font-size: 5rem;
  }

  @media screen and (max-width: 20rem) {
    svg {
      font-size: 20vw;
    }
  }
`;

export const WrapperStudy = styled.section`
  display: flex;
  justify-content: space-evenly;
  row-gap: 1rem;
  flex-wrap: wrap;
`;

export const StudyCard = styled.article`
  background-color: var(--cardBg);
  border-radius: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 20rem;
  height: max-content;
  padding: 1rem;
`;

export const StudyImage = styled.div`
  font-size: clamp(4rem, 6rem, 8vw);
  align-self: center;
`;

export const WrapperStudyCardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 2rem;
`;

export const StudyCardTitle = styled.h1`
  color: var(--mainColor);
  text-align: left;
  font-size: 1rem;
  text-align: center;
`;

export const ResumeTitle = styled.h2`
  background-color: var(--cardBg);
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: 200;
  padding: 1rem 2rem;
  margin: 1rem 0;
  width: fit-content;
`;

export const EducationContent = styled.article`
  padding: 0 1rem;
`;

export const EducationTitle = styled.h3`
  font-size: 1rem;
  font-weight: 300;
`;

export const EducationText = styled.p`
  font-size: 0.75rem;
  font-weight: 200;
`;

export const EducationTextContainer = styled.ul`
  font-size: 0.75rem;
  font-weight: 200;
`;

export const EducationTextItem = styled.li`
  margin: 0.25rem 0;
  list-style: none;
`;

export const WrapperEducationSubTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10vw;
`;

export const EducationSubTitle = styled.h4`
  color: var(--mainColor);
  font-size: 0.875rem;
  font-weight: 300;
`;
