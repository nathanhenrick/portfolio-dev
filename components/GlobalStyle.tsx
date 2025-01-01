import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --generalBg: #222326;
    --cardBg: #363A45;
    --mainColor: #47B4C2;
  }

  *, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: "Poppins", Arial, Helvetica, sans-serif;
  color: #fff;

  &::selection {
    background-color: var(--mainColor);
    color: #000;
  }
}

body {
  background-color: #050E14;
  background-image: linear-gradient(225deg, #050E14, #010805);
  background-attachment: fixed;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
`