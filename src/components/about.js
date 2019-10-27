import styled from "styled-components"
import { theme } from "./designSystem/theme"
import generative from "../data/images/generative.svg"

const About = styled.div`
  padding: 0 5%;
  height: 100vh;
  background-color: ${theme.dark};
  background-image: url(${generative});
  background-position: 100% 100%;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;

  h1 {
    color: ${theme.accent};
    margin-top: 100px;
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
    position: absolute;
    left: 1px;
    right: 1px;
    bottom: 64px;
    border-bottom: 1px solid ${theme.accent};
    opacity: 0.5;
  }
`

export default About
