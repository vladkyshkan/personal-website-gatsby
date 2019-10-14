import styled from "styled-components"
import { theme } from "./designSystem/theme"
import figures from "../data/images/figures.svg"

const About = styled.div`
  padding: 0 5%;
  height: 100vh;
  background-color: black;
  background-image: url(${figures});
  background-position: 92% 35%;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;

  h1 {
    color: ${theme.accent};
    margin-top: 104px;
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
