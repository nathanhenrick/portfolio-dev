import * as S from "./styleAboutMe"
import * as G from "../../styles"

import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaGitAlt, FaGithubSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiTypescript, SiStyledcomponents, SiAdobephotoshop, SiPostgresql, SiJquery } from "react-icons/si";

export const AboutMe = () => {

  return (
    <G.WrapperContent className="scrollableWrapper">
      <G.ContainerCurrentTitle>
        <G.LineCurrenteTitle />
        <G.CurrentTitle>About me</G.CurrentTitle>
        <G.LineCurrenteTitle />
      </G.ContainerCurrentTitle>
      <article>
        <G.Text>
          I'm Nathan, 19. I started studying in October 2023, since then, I've been gaining more knowledge in the web development area. Arriving in October 2024, I joined Centro Universitário Internacional (UNINTER), to course Sytems Analysis and Development.
        </G.Text>
        {/* <G.Text>
          Still talking about study, in November of the same year I was approved in the selection process for Santander Tech+ (partnership with Ada Tech). In December 2024 and January 2025 I was approved to join <a href="https://escoladanuvem.org/" target="blank">Escola da Nuvem</a> (AWS re/START + A.I.) and ONE Oracle Next Education, respectively.
        </G.Text> */}
      </article>

      <G.TitleContainer>
        <G.Title>Abilities</G.Title>
      </G.TitleContainer>

      <S.WrapperAbility className="abilitiesCards">
        {/* HTML */}
        <S.AbilityCard className="scrollableWrapper" tabIndex={0}>
          <FaHtml5 />
          <S.TooltipAbility>HTML5</S.TooltipAbility>
        </S.AbilityCard>

        {/* CSS */}
        <S.AbilityCard className="scrollableWrapper" tabIndex={0}>
          <FaCss3Alt />
          <S.TooltipAbility>CSS3</S.TooltipAbility>
        </S.AbilityCard>

        {/* SASS */}
        <S.AbilityCard className="scrollableWrapper" tabIndex={0}>
          <FaSass />
          <S.TooltipAbility>SASS</S.TooltipAbility>
        </S.AbilityCard>

        {/* Tailwind */}
        <S.AbilityCard className="scrollableWrapper" tabIndex={0}>
          <RiTailwindCssFill />
          <S.TooltipAbility>Tailwind</S.TooltipAbility>
        </S.AbilityCard>

        {/* JavaScript */}
        <S.AbilityCard className="scrollableWrapper" tabIndex={0}>
          <SiJavascript />
          <S.TooltipAbility>JavaScript</S.TooltipAbility>
        </S.AbilityCard>

        {/* TypeScript */}
        <S.AbilityCard className="scrollableWrapper" tabIndex={0}>
          <SiTypescript />
          <S.TooltipAbility>TypeScript</S.TooltipAbility>
        </S.AbilityCard>

        {/* React */}
        <S.AbilityCard className="scrollableWrapper" tabIndex={0}>
          <FaReact />
          <S.TooltipAbility>React</S.TooltipAbility>
        </S.AbilityCard>

        {/* Styled-Components */}
        <S.AbilityCard className="scrollableWrapper" tabIndex={0}>
          <SiStyledcomponents />
          <S.TooltipAbility>Styled-components</S.TooltipAbility>
        </S.AbilityCard>

        {/* Git */}
        <S.AbilityCard className="scrollableWrapper" tabIndex={0}>
          <FaGitAlt />
          <S.TooltipAbility>Git</S.TooltipAbility>
        </S.AbilityCard>

        {/* GitHub */}
        <S.AbilityCard className="scrollableWrapper" tabIndex={0}>
          <FaGithubSquare />
          <S.TooltipAbility>GitHub</S.TooltipAbility>
        </S.AbilityCard>

        {/* PostgreSQL */}
        <S.AbilityCard className="scrollableWrapper" tabIndex={0}>
          <SiPostgresql />
          <S.TooltipAbility>PostgreSQL</S.TooltipAbility>
        </S.AbilityCard>

        {/* jQuery */}
        <S.AbilityCard className="scrollableWrapper" tabIndex={0}>
          <SiJquery />
          <S.TooltipAbility>jQuery</S.TooltipAbility>
        </S.AbilityCard>

        {/* Photoshop */}
        <S.AbilityCard className="scrollableWrapper" tabIndex={0}>
          <SiAdobephotoshop />
          <S.TooltipAbility>Photoshop</S.TooltipAbility>
        </S.AbilityCard>

      </S.WrapperAbility>

      <G.TitleContainer>
        <G.Title>What I'm currently studying</G.Title>
        <G.TitleComplement>This section will be updated regularly</G.TitleComplement>
      </G.TitleContainer>

      <S.WrapperStudy>
        <S.StudyCard>
          <S.WrapperStudyCardContent>
            <S.StudyCardTitle>Python</S.StudyCardTitle>
          </S.WrapperStudyCardContent>
        </S.StudyCard>

        <S.StudyCard>
          <S.WrapperStudyCardContent>
            <S.StudyCardTitle>Redux</S.StudyCardTitle>
          </S.WrapperStudyCardContent>
        </S.StudyCard>

        <S.StudyCard>
          <S.WrapperStudyCardContent>
            <S.StudyCardTitle>NodeJS</S.StudyCardTitle>
          </S.WrapperStudyCardContent>
        </S.StudyCard>

        <S.StudyCard>
          <S.WrapperStudyCardContent>
            <S.StudyCardTitle>Artificial Intelligence</S.StudyCardTitle>
          </S.WrapperStudyCardContent>
        </S.StudyCard>
      </S.WrapperStudy>

      <G.TitleContainer>
        <G.Title>Resume</G.Title>
      </G.TitleContainer>

      <S.ResumeTitle>Education</S.ResumeTitle>

      <S.EducationContent>
        <G.TitleContainer>
          <S.EducationTitle>Escola da Nuvem</S.EducationTitle>
          <G.TitleComplement>Feb. 2025</G.TitleComplement>
        </G.TitleContainer>
        <S.EducationText>
          School that presents technician classes about Cloud Computing  with AWS and Generative A.I.
        </S.EducationText>

        <G.TitleContainer>
          <S.EducationTitle>ONE Oracle Next Education</S.EducationTitle>
          <G.TitleComplement>Jan. 2025</G.TitleComplement>
        </G.TitleContainer>
        <S.EducationText>
          Oracle program with Alura partnership, more than 700 hours of workload. Topics: Innovation and management, programming and A.I..
        </S.EducationText>

        <G.TitleContainer>
          <S.EducationTitle>Santander Tech+</S.EducationTitle>
          <G.TitleComplement>Dec. 2024</G.TitleComplement>
        </G.TitleContainer>

        <S.WrapperEducationSubTitle>
          <section>
            <S.EducationSubTitle>
              Fundamental Content
            </S.EducationSubTitle>
            <S.EducationTextContainer>
              <S.EducationTextItem>Understading the market labour;</S.EducationTextItem>
              <S.EducationTextItem>Basics computer operations;</S.EducationTextItem>
              <S.EducationTextItem>History of Computer Science;</S.EducationTextItem>
              <S.EducationTextItem>Fundamental Math.</S.EducationTextItem>
            </S.EducationTextContainer>
          </section>

          <section>
            <S.EducationSubTitle>
              Data Science Trail
            </S.EducationSubTitle>
            <S.EducationTextContainer>
              <S.EducationTextItem>Basic Calculus;</S.EducationTextItem>
              <S.EducationTextItem>Python Introduce;</S.EducationTextItem>
              <S.EducationTextItem>Exploratory Data Analysis;</S.EducationTextItem>
              Data Base;
              <S.EducationTextItem>SQL</S.EducationTextItem>
            </S.EducationTextContainer>
          </section>
        </S.WrapperEducationSubTitle>

        <G.TitleContainer>
          <S.EducationTitle>
            Centro Universitário Internacional UNINTER
          </S.EducationTitle>
          <G.TitleComplement>Oct. 2024</G.TitleComplement>
        </G.TitleContainer>

        <S.EducationText>
          Coursing Systems Analysis and Development, provided to finish in April 2027 (5 semesters)
        </S.EducationText>
      </S.EducationContent>

      <G.TitleContainer>
        <S.ResumeTitle>Experience</S.ResumeTitle>
        <G.TitleComplement>Only personal projects for a while</G.TitleComplement>
      </G.TitleContainer>

    </G.WrapperContent>
  )
}