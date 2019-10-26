import styled from "styled-components"
import { theme } from "./theme"

const Button = styled.button`
  font-family: "IBM Plex Mono";
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 12px 70px;
  background-color: transparent;
  color: ${props => (props.light ? theme.dark : theme.white)};
  fill: ${props => (props.light ? theme.dark : theme.white)};
  border: 1px solid
    ${props => (props.light ? theme.borderDark : theme.borderWhite)};
  outline: none;

  &:hover {
    border: 1px solid ${props => (props.light ? theme.Dark : theme.White)};
  }

  &:hover svg {
    transform: translateX(24px);
    transition: 0.5s;
  }
`

export default Button
