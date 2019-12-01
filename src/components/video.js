import React, { Component } from "react"
import styled from "styled-components"
import { theme } from "./designSystem/theme"

const VideoContainer = styled.div`
  margin: 0 auto 128px auto;
  max-width: 1152px;
  position: relative;

  @media only screen and (max-width: 56.25rem) {
    margin-bottom: 64px;
  }
`

const VideoStyled = styled.video`
  width: 100%;
  outline: none;
`

const ButtonVideo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: ${theme.white};
  box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;
  transform-origin: top left;

  &:hover {
    transform: scale(1.1) translate(-50%, -50%);
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }

  svg {
    position: relative;
    left: 3px;
  }
`

class Video extends Component {
  state = { showing: true }

  playVideo = () => {
    this.refs.video.play()
    const { showing } = this.state
    this.setState({ showing: !showing })
  }

  render() {
    return (
      <VideoContainer>
        <VideoStyled loop muted playsinline ref="video">
          <source src={this.props.src} type="video/mp4" />
        </VideoStyled>
        {this.state.showing ? (
          <ButtonVideo onClick={this.playVideo}>
            <svg
              width="16"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 20V0l16 9.952L0 20z" fill="#141414" />
            </svg>
          </ButtonVideo>
        ) : null}
      </VideoContainer>
    )
  }
}

export default Video
