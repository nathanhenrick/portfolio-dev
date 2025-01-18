import * as S from "./styles"
import { useEffect } from "react";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { RoughEase } from "gsap/EasePack";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(RoughEase);

export const HeroBanner = () => {
  useEffect(() => {
    gsap.to("#myText", {
      duration: 2,
      text: "Nathan Henrick",
      delay: 1,
      color: "var(--mainColor)",
      ease: "back.out(0)",
      onComplete: () => {
        gsap.to("#heroContainer", {
          duration: 1,
          delay: 1,
          opacity: 0,
          ease: "power2.out",
        });
      },
    })
}, []);

return (
  <S.WrapperBanner id="heroContainer">
    <S.BannerTitle id="myText"><span>.</span>Portfolio</S.BannerTitle>
  </S.WrapperBanner>
)
}