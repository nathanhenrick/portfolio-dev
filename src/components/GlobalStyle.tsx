import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --generalBg: #222326;
    --cardBg: #363A45;
    --mainColor: #47B4C2;
    --backImage: linear-gradient(225deg, #050E14, #010805);
  }

  * {
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

body, html {
  background-color: #050E14;
  background-image: var(--backImage);
  background-attachment: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  /* max-width: ; */
  overflow-y: auto;
  scrollbar-color: var(--mainColor) var(--generalBg);
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    background-color: var(--generalBg);
    width: 0.375rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--mainColor);
    border-radius: 10px;
  }
  
}
`