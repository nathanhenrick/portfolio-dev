import * as S from "./styleAboutMe"
import * as G from "../../styles"

import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaGitAlt, FaGithubSquare, FaPython } from "react-icons/fa";
import { RiTailwindCssFill, RiEnglishInput } from "react-icons/ri";
import { SiJavascript, SiTypescript, SiStyledcomponents, SiAdobephotoshop, SiPostgresql } from "react-icons/si";
import { CgDesignmodo } from "react-icons/cg";
import { GiArtificialIntelligence } from "react-icons/gi";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutMe = () => {

  gsap.from(".box", {
    scrollTrigger: ".box", // Elemento que ativa a animação
    y: 100,               // Movimento no eixo Y
    opacity: 0,           // Começa invisível
    duration: 1,          // Duração da animação
  });
  return (
    <G.WrapperContent>
      <article>
        <G.Text>
          I'm Nathan, 19. I started studying in October 2023, since then, I've been gaining more knowledge in the web development area. Arriving in October 2024, I joined Centro Universitário Internacional (UNINTER), to course Sytems Analysis and Development.
        </G.Text>
        <G.Text>
          Still talking about study, in November of the same year I was approved in the selection process for Santander Tech+ (partnership with Ada Tech). In December, I was also approved to join <a href="https://escoladanuvem.org/" target="blank">Escola da Nuvem</a> (AWS re/START + IA).
        </G.Text>
      </article>

      <G.TitleContainer>
        <G.Title><span>.</span>Abilities</G.Title>
      </G.TitleContainer>

      <S.WrapperAbility>
        {/* HTML */}
        <S.AbilityCard tabIndex={0}>
          <FaHtml5 />
          <S.TooltipAbility>HTML5</S.TooltipAbility>
        </S.AbilityCard>

        {/* CSS */}
        <S.AbilityCard tabIndex={0}>
          <FaCss3Alt />
          <S.TooltipAbility>CSS3</S.TooltipAbility>
        </S.AbilityCard>

        {/* SASS */}
        <S.AbilityCard tabIndex={0}>
          <FaSass />
          <S.TooltipAbility>SASS</S.TooltipAbility>
        </S.AbilityCard>

        {/* Tailwind */}
        <S.AbilityCard tabIndex={0}>
          <RiTailwindCssFill />
          <S.TooltipAbility>Tailwind</S.TooltipAbility>
        </S.AbilityCard>

        {/* JavaScript */}
        <S.AbilityCard tabIndex={0}>
          <SiJavascript />
          <S.TooltipAbility>JavaScript</S.TooltipAbility>
        </S.AbilityCard>

        {/* TypeScript */}
        <S.AbilityCard tabIndex={0}>
          <SiTypescript />
          <S.TooltipAbility>TypeScript</S.TooltipAbility>
        </S.AbilityCard>

        {/* React */}
        <S.AbilityCard tabIndex={0}>
          <FaReact />
          <S.TooltipAbility>React</S.TooltipAbility>
        </S.AbilityCard>

        {/* Styled-Components */}
        <S.AbilityCard tabIndex={0}>
          <SiStyledcomponents />
          <S.TooltipAbility>Styled-components</S.TooltipAbility>
        </S.AbilityCard>

        {/* Git */}
        <S.AbilityCard tabIndex={0}>
          <FaGitAlt />
          <S.TooltipAbility>GIT</S.TooltipAbility>
        </S.AbilityCard>

        {/* GitHub */}
        <S.AbilityCard tabIndex={0}>
          <FaGithubSquare />
          <S.TooltipAbility>GitHub</S.TooltipAbility>
        </S.AbilityCard>

        {/* PostgreSQL */}
        <S.AbilityCard tabIndex={0}>
          <SiPostgresql />
          <S.TooltipAbility>PostgreSQL</S.TooltipAbility>
        </S.AbilityCard>

        {/* Photoshop */}
        <S.AbilityCard tabIndex={0}>
          <SiAdobephotoshop />
          <S.TooltipAbility>Photoshop</S.TooltipAbility>
        </S.AbilityCard>
      </S.WrapperAbility>

      <G.TitleContainer>
        <G.Title><span>.</span>What I'm currently studying</G.Title>
        <G.TitleComplement>This section will be updated regularly</G.TitleComplement>
      </G.TitleContainer>

      <S.WrapperStudy>
        <S.StudyCard>
          <S.StudyImage>
            <FaPython />
          </S.StudyImage>

          <S.WrapperStudyCardContent>
            <S.StudyCardTitle>Python</S.StudyCardTitle>
            <S.StudyCardText>To get a better comprehension about the A.I. topics.</S.StudyCardText>
          </S.WrapperStudyCardContent>
        </S.StudyCard>

        <S.StudyCard>
          <S.StudyImage>
            <CgDesignmodo />
          </S.StudyImage>

          <S.WrapperStudyCardContent>
            <S.StudyCardTitle>Design</S.StudyCardTitle>
            <S.StudyCardText>Knowledge about it never hurts.</S.StudyCardText>
          </S.WrapperStudyCardContent>
        </S.StudyCard>

        <S.StudyCard>
          <S.StudyImage>
            <RiEnglishInput />
          </S.StudyImage>

          <S.WrapperStudyCardContent>
            <S.StudyCardTitle>English</S.StudyCardTitle>
            <S.StudyCardText>I'm reading books and watching movies, always using flashcards to a better learning.</S.StudyCardText>
          </S.WrapperStudyCardContent>
        </S.StudyCard>

        <S.StudyCard>
          <S.StudyImage>
            <GiArtificialIntelligence />
          </S.StudyImage>

          <S.WrapperStudyCardContent>
            <S.StudyCardTitle>Basics of A.I.</S.StudyCardTitle>
            <S.StudyCardText>Learning it for Escola da Nuvem</S.StudyCardText>
          </S.WrapperStudyCardContent>
        </S.StudyCard>
      </S.WrapperStudy>

      <G.TitleContainer>
        <G.Title><span>.</span>Resume</G.Title>
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
              <S.EducationTextItem>Basics operation computer;</S.EducationTextItem>
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