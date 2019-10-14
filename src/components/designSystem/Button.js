import styled from "styled-components"
import { theme } from "./theme"

const Button = styled.button`
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 12px 70px;
  background-color: transparent;
  border: 1px solid ${props => (props.light ? theme.dark : theme.white)};
  outline: none;
`

export default Button
