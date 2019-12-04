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
    min-height: 700px;
    max-height: 900px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 32px;
  }

  h1 {
    color: ${theme.accent};
    margin-top: 25%;
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

  @media only screen and (min-width: 1440px) {
    background-position: 120% 100%;
  }

  @media only screen and (min-width: 1800px) {
    background-position: 80% 100%;
  }

  @media only screen and (min-width: 2000px) {
    background-position: 70% 100%;
  }

  @media only screen and (max-width: 1024px) {
    div {
      grid-template-columns: repeat(1, 1fr);
      align-content: end;
      grid-gap: 40px;
    }

    h1 {
      margin-bottom: 24px;
    }

    p:nth-child(2) {
      margin-bottom: 0;
    }
  }

  @media only screen and (max-width: 900px) {
    background-position: 400% 100%;
  }

  @media only screen and (max-width: 768px) {
    background-position: -100% 100%;

    h1 {
      margin-bottom: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    background-position: -20% 100%;

    div {
      grid-gap: 32px;
    }
  }

  @media only screen and (max-width: 500px) {
    p {
      margin-bottom: 64px;
    }

    &:before {
      display: none;
    }
  }

  @media only screen and (max-width: 400px) {
    background-position: 30% 100%;
  }
`

export default Bio
