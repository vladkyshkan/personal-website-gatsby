import { createGlobalStyle } from 'styled-components';
import ButlerLight from '../../fonts/ButlerLight.otf';
import ButlerMedium from '../../fonts/ButlerMedium.otf';
import IBMPlexMonoRegular from '../../fonts/IBMPlexMonoRegular.ttf';
import IBMPlexMonoSemiBold from '../../fonts/IBMPlexMonoSemiBold.ttf';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Butler";
    font-style: normal;
    font-weight: 300;
    src: url(${ButlerLight}) format('otf');
  }

  @font-face {
    font-family: "Butler";
    font-style: normal;
    font-weight: 500;
    src: url(${ButlerMedium}) format('otf');
  }

  @font-face {
    font-family: "IBM Plex Mono";
    font-style: normal;
    font-weight: 400;
    src: url(${IBMPlexMonoRegular}) format('ttf');
  }

  @font-face {
    font-family: "IBM Plex Mono";
    font-style: normal;
    font-weight: 600;
    src: url(${IBMPlexMonoSemiBold}) format('ttf');
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
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;

export default GlobalStyle;
