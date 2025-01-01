import * as S from "../styles"

import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaGitAlt, FaGithubSquare, } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
// import { IoLogoJavascript } from "react-icons/io5";
import { SiJavascript, SiTypescript, SiStyledcomponents, SiAdobephotoshop } from "react-icons/si";
// import { TbSql } from "react-icons/tb";
import { PiFileSql } from "react-icons/pi";


export const AboutMe = () => {
  return (
    <S.WrapperContent>
      <S.Text>
        I'm Nathan, 19. I started studying in October 2023, since then, I've been gaining more knowledge in the web development area. Arriving in October 2024, I joined Centro Universitário Internacional (UNINTER), to course Sytems Analysis and Development.
      </S.Text>
      <S.Text>
        Still talking about study, in November of the same year I was approved in the selection process for Santander Tech+ (partnership with Ada Tech). In December, I was also approved to join Escola da Nuvem (AWS re/START + IA).
      </S.Text>

      <S.Title><span>.</span>Abilities</S.Title>

      <S.WrapperAbility>
        {/* HTML */}
        <S.AbilityCard>
          <FaHtml5 />
        </S.AbilityCard>

        {/* CSS */}
        <S.AbilityCard>
          <FaCss3Alt />
        </S.AbilityCard>

        {/* SASS */}
        <S.AbilityCard>
          <FaSass />
        </S.AbilityCard>

        {/* Tailwind */}
        <S.AbilityCard>
          <RiTailwindCssFill />
        </S.AbilityCard>

        {/* JavaScript */}
        <S.AbilityCard>
          <SiJavascript />
        </S.AbilityCard>

        {/* TypeScript */}
        <S.AbilityCard>
          <SiTypescript />
        </S.AbilityCard>

        {/* React */}
        <S.AbilityCard>
          <FaReact />
        </S.AbilityCard>

        {/* Styled-Components */}
        <S.AbilityCard>
          <SiStyledcomponents />
        </S.AbilityCard>

        {/* Git */}
        <S.AbilityCard>
          <FaGitAlt />
        </S.AbilityCard>

        {/* GitHub */}
        <S.AbilityCard>
          <FaGithubSquare />
        </S.AbilityCard>

        {/* SQL */}
        <S.AbilityCard>
          <PiFileSql />
        </S.AbilityCard>

        {/* Photoshop */}
        <S.AbilityCard>
          <SiAdobephotoshop />
        </S.AbilityCard>
      </S.WrapperAbility>

      <S.Title><span>.</span>What I'm currently studying</S.Title>
    </S.WrapperContent>
  )
}