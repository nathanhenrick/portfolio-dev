import styled from "styled-components";

export const WrapperBanner = styled.section`
  background-image: var(--backImage);
  z-index: 999;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0;
  opacity: 1;

  overflow: none;
  user-select: none;
  visibility: none;
`;

export const BannerTitle = styled.h1`
  transition-duration: 3s;
  color: #fff;
  font-size: 10vw;
  font-family: "Iceberg", Arial, Helvetica, sans-serif;

  span {
    font-size: calc(inherit + 40%);
    color: var(--mainColor);
  }
`;
