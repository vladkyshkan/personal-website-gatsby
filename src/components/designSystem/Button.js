import styled from "styled-components"
import { theme } from "./theme"

const Button = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05px;
  border-radius: 8px;
  padding: 12px 70px;
  background-color: transparent;
  color: ${props => (props.light ? theme.dark : theme.white)};
  fill: ${props => (props.light ? theme.dark : theme.white)};
  border: 1px solid
    ${props => (props.light ? theme.dark : theme.white)};
  outline: none;
  margin-right: 24px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${props => (props.light ? theme.dark : theme.white)};
    color: ${props => (props.light ? theme.white : theme.dark)};
    transition: 0.3s;
  }

  &:hover svg {
    transform: translateX(24px);
    fill: ${props => (props.light ? theme.white : theme.dark)};
    transition: 0.3s;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
    margin-right: 0;
  }
`

export default Button
