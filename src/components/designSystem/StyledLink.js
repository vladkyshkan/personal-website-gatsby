import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(props => <Link {...props} />)`
  &,
  &:hover,
  &:active,
  &:visited,
  &:focus {
    text-decoration: none;
    color: inherit;
  }
`

export default StyledLink
