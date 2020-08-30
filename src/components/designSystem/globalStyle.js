import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.bg};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif;
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
