import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"
import ButlerLight from "../../fonts/butlerlight-webfont.woff2"
import ButlerMedium from "../../fonts/butlermedium-webfont.woff2"
import IBMPlexMonoRegular from "../../fonts/ibmplexmonoregular-webfont.woff2"
import IBMPlexMonoSemiBold from "../../fonts/ibmplexmonosemibold-webfont.woff2"

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Butler";
    font-style: normal;
    font-weight: 300;
    src: url(${ButlerLight}) format('woff2');
  }

  @font-face {
    font-family: "Butler";
    font-style: normal;
    font-weight: 500;
    src: url(${ButlerMedium}) format('woff2');
  }

  @font-face {
    font-family: "IBM Plex Mono";
    font-style: normal;
    font-weight: 400;
    src: url(${IBMPlexMonoRegular}) format('woff2');
  }

  @font-face {
    font-family: "IBM Plex Mono";
    font-style: normal;
    font-weight: 600;
    src: url(${IBMPlexMonoSemiBold}) format('woff2');
  }

  html {
    font-size: 10px;
    font-family: "IBM Plex Mono", monospace;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.bg};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
