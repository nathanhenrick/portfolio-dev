import styled from "styled-components"

export const WrapperAbility = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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
  width: 7.5rem;
  aspect-ratio: 1/1;
  border-radius: 1.5rem;
  background-color: var(--cardBg);
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.5s;
  transition-timing-function: ease;

  &:hover {
    background-color: var(--mainColor);

    div {
      opacity: 1;
      transform: translateY(0); /* Faz o tooltip aparecer */
    }

    svg {
      fill: var(--cardBg);
    }
  }

  svg {
    font-size: 5rem;
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

export const WrapperStudyCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  width: 70%;
`;

export const StudyImage = styled.div`
  font-size: 6rem;
`;

export const StudyCardTitle = styled.h1`
  color: var(--mainColor);
  text-align: left;
  font-size: 1.25rem;
`;

export const StudyCardText = styled.p`
  font-weight: 200;
  font-size: 0.75rem;
`;

export const ResumeTitle = styled.h2`
  background-color: var(--cardBg);
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: 200;
  padding: 1rem 4rem;
  margin: 2rem 0;
  width: fit-content;
`;

export const EducationContent = styled.article`
  padding: 0 5rem;
`;

export const EducationTitle = styled.h3`
  font-size: 16px;
  font-weight: 300;
`;

export const EducationText = styled.p`
  font-size: 12px;
  font-weight: 200;
`;

export const EducationTextContainer = styled.ul`
  font-size: 12px;
  font-weight: 200;
`;

export const EducationTextItem = styled.li`
  list-style: none;
`;

export const WrapperEducationSubTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
`;

export const EducationSubTitle = styled.h4`
  color: var(--mainColor);
  font-size: 14px;
  font-weight: 300;
`;
