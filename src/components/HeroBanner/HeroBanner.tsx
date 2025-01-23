import * as S from "./styles"
import { useEffect } from "react";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { RoughEase } from "gsap/EasePack";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(RoughEase);

export const HeroBanner = () => {
  useEffect(() => {
    gsap.set("#myDiv", {
      opacity: 0,
      scale: 0,
      fontFamily: "Iceberg, Arial, Helvetica, sans-serif;"
    })
    gsap.to("#myDiv", {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power4.out",
    })

    gsap.to("#myText", {
      opacity: 1,
      scale: 1,
      duration: 2,
      text: "Nathan Henrick",
      delay: 1,
      color: "var(--mainColor)",
      ease: "power4.out",
      onComplete: () => {
        gsap.to("#myDiv", {
          delay: 1,
          opacity: 0,
          onComplete: () => {
            gsap.to("#heroContainer", {
              duration: 1,
              delay: 0,
              opacity: 0,
            });
          }
        })
      },
    })
  }, []);

  return (
    <S.WrapperBanner id="heroContainer">
      <div id="myDiv">
        <S.BannerTitle id="myText"><span>.</span>Portfolio</S.BannerTitle>
      </div>
    </S.WrapperBanner>
  )
}