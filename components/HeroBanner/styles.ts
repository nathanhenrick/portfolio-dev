import styled from "styled-components";

export const WrapperBanner = styled.section`
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 90vh;
  padding: 0;
  margin: 0;

  overflow: none;
`

export const BannerTitle = styled.h1`
  transition-duration: 3s;
  color: #fff;
  font-size: 8.75rem;
  font-family: "Iceberg", Arial, Helvetica, sans-serif;

  span {
    font-size: calc(inherit + 40%);
    color: var(--mainColor);
  }
`