import React from "react"
import styled from "styled-components"

const IconArrowStyled = styled.div`
  display: inline-block;
  transform: translateY(1px);

  svg {
    transform: translateX(16px);
    transition: 0.5s;
    fill: inherit;
  }
`

const IconArrow = () => {
  return (
    <IconArrowStyled>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M8.086 4.49995L5.0505 1.46445L5.7575 0.757446L10 4.99995L9.6465 5.35345L5.7575 9.24245L5.0505 8.53545L8.086 5.49995H0V4.49995H8.086Z" />
      </svg>
    </IconArrowStyled>
  )
}

export default IconArrow
