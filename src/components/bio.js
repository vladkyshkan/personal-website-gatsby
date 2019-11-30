import styled from "styled-components"
import { theme } from "./designSystem/theme"
import generative from "../data/images/generative.svg"

const Bio = styled.div`
  padding: 0 5%;
  background-color: ${theme.dark};
  background-image: url(${generative});
  background-position: 150% 100%;
  background-repeat: no-repeat;
  position: relative;

  div {
    height: 100vh;
    max-height: 700px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 32px;
  }

  h1 {
    color: ${theme.accent};
    margin-top: 96px;
  }

  p {
    color: ${theme.accent};
    margin-bottom: 128px;
    align-self: end;
  }

  &:before {
    content: "";
    margin: 0 auto;
    width: 90%;
    max-width: 1152px;
    position: absolute;
    left: 1px;
    right: 1px;
    bottom: 64px;
    border-bottom: 1px solid ${theme.accent};
    opacity: 0.5;
  }

  @media only screen and (min-width: 90rem) {
    background-position: 120% 100%;
  }

  @media only screen and (min-width: 112.5rem) {
    background-position: 80% 100%;
  }

  @media only screen and (max-width: 64rem) {
    grid-template-columns: repeat(1, 1fr);

    h1 {
      margin-bottom: 0;
    }

    p:nth-child(2) {
      margin-bottom: 0;
    }
  }
`

export default Bio
