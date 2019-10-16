import React from "react"
import styled from "styled-components"

const IconArrowStyled = styled.div`
  display: inline-block;

  svg {
    transform: translateX(16px);
    transition: 0.5s;
    fill: inherit;
  }
`

const IconArrow = () => {
  return (
    <IconArrowStyled>
      <svg
        className="btn-icon"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
      >
        <g opacity="1">
          <path d="M6.4688 3.59996L4.0404 1.17156L4.606 0.605957L8 3.99996L7.7172 4.28276L4.606 7.39396L4.0404 6.82836L6.4688 4.39996H0V3.59996H6.4688Z" />
        </g>
      </svg>
    </IconArrowStyled>
  )
}

export default IconArrow
