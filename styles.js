import { createGlobalStyle } from "styled-components";
import { Open_Sans, Kalam } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});
const openSansBold = Open_Sans({
  subsets: ["latin"],
  weight: "600",
  style: "normal",
});
const kalam = Kalam({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  :root{
    --primaryBackgroundColor:  #edecec;
    --secondaryBackgroundColor: #eae6e6;
    --tertiaryBackgroundColor:  #dce2db;
    --shadowColor: #929090;
    --primaryDarkColor: #474747;
    --accentColor: #73A76A;
    --disabledColor: #aaaaaa;
    --primaryButtonColor: #edecec;
    --cancelHoverColor: #8e8d8d;
    --dangerColor: #F1554E;
    --dangerHoverColor: #ba3e37;
    --fontRegular: ${openSans.style.fontFamily};
    --fontBold: ${openSansBold.style.fontFamily};
    --fontTitle: ${kalam.style.fontFamily};
  }
  
  body {
    margin: 0;
    font-family: var(--fontRegular);
    background-color: #575757;
    display: flex;
    justify-content: center; 
  }
  
  #__next {
    height: 100vh;
    display: grid;
    grid-template-areas:
    "header"
    "main"
    "nav";
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    width: 100%;
    max-width: 600px;
    background-color: var(--primaryBackgroundColor);
  }
  header {
    grid-area: header;
    padding-inline: 15px;
    color: var(--primaryBackgroundColor);
    background-color: var(--accentColor);
    width: 100%;
    box-shadow: 0px 1px 2px var(--primaryDarkColor);
     }

     nav {
      grid-area: nav;
      background-color: var(--secondaryBackgroundColor);
      width: 100%;
      padding: 0;
     }

  main {
    grid-area: main;
    overflow: auto;
    padding-inline: 15px;
    color: var(--primaryDarkColor);
  
  }
  h1, h2, h3 {
    font-family: var(--fontBold);
  }
  button {
    font-family: var(--fontRegular);
  }
  ul {
    list-style-type: none;
    padding: 0px;
  }
  `;
