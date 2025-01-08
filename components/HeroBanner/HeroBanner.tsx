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
      delay: 1.5,
      color: "var(--mainColor)",
      ease: RoughEase.ease.config({
        template: "none.out",
        strength: 1,
        points: 10,
        taper: "none",
        randomize: true,
        clamp: false
      })
    })
}, []);

return (
  <S.WrapperBanner>
    <S.BannerTitle id="myText"><span>.</span>Portfolio</S.BannerTitle>
  </S.WrapperBanner>
)
}