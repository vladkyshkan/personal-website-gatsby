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
    max-height: 1024px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    color: ${theme.accent};
    max-width: 700px;
    margin-bottom: 40px;
  }

  h4 {
    color: ${theme.accent};
    max-width: 650px;
    font-weight: 400;
    margin-top: 20px;
    line-height: 1.5;
    transition: 0.3;

    a {
      color: #1FB762;
    }

    a:nth-child(2) {
      color: #FF875F;
    }

    a:hover {
      text-decoration: underline;
    }
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
      margin-bottom: 24px;
    }
  }

  @media only screen and (max-width: 600px) {
    background-position: -20% 100%;
  }

  @media only screen and (max-width: 500px) {
    h1 {
      margin-bottom: 16px;
    }
  }

  @media only screen and (max-width: 400px) {
    background-position: 30% 100%;
  }
`

export default Bio
